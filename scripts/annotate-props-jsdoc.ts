import { Project, Node } from 'ts-morph'
import path from 'path'
import fs from 'fs'

import META from '../src/client/meta/index.ts'

const bundle = process.env.TSUP_BUNDLE

if (!bundle) {
  console.error('TSUP_BUNDLE not set')
  process.exit(1)
}

// adjust if needed
const DTS_PATH = path.resolve('dist/index.d.ts')

if (!fs.existsSync(DTS_PATH)) {
  console.error(`index.d.ts not found at ${DTS_PATH}`)
  process.exit(1)
}

const project = new Project({
  skipAddingFilesFromTsConfig: true,
})

const sourceFile = project.addSourceFileAtPath(DTS_PATH)
const checker = project.getTypeChecker()

// --- helpers -------------------------------------------------

function addJsDocOnce(node: any, comment: string) {
  const existing = node.getJsDoc?.()
  if (existing && existing.length > 0) return

  if ('addJsDoc' in node && typeof node.addJsDoc === 'function') {
    node.addJsDoc({ comment })
  }
}

// --- main logic ----------------------------------------------

Object.keys(META).forEach(componentName => {
  const metaComponent = META[componentName]?.[componentName]
  if (!metaComponent) return

  const { overview, props } = metaComponent

  if (overview.bundle !== bundle) return

  const propsTypeName = `${componentName}Props`
  const propsDecl = sourceFile.getTypeAlias(propsTypeName)

  if (!propsDecl) {
    // optional warning, but never crash dist
    return
  }

  const propsType = propsDecl.getType()
  const apparentProps = propsType.getApparentProperties()

  const propSymbolMap = new Map(apparentProps.map(symbol => [symbol.getName(), symbol]))

  Object.keys(props).forEach(propName => {
    const metaProp = props[propName]
    if (!metaProp?.description) return

    const symbol = propSymbolMap.get(propName)
    if (!symbol) return

    const declarations = symbol.getDeclarations()

    declarations.forEach(decl => {
      // property signatures in type literals / helper types
      if (Node.isPropertySignature(decl) || Node.isPropertyDeclaration(decl)) {
        addJsDocOnce(decl, metaProp.description)
      }
    })
  })
})

// write back
sourceFile.saveSync()
