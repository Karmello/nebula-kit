import fs from 'fs'
import { kebabCase } from 'change-case'

import { run } from './run/run'

// const libComponentFolderNames = fs
//   .readdirSync('src/lib/components', { withFileTypes: true })
//   .filter(e => e.isDirectory())
//   .map(e => e.name)

const libComponentFolderNames = ['primitive']

libComponentFolderNames.forEach(folderName => {
  // const libComponentNames = fs
  //   .readdirSync(`src/lib/components/${folderName}`, { withFileTypes: true })
  //   .filter(e => e.isDirectory())
  //   .map(e => e.name)

  const libComponentNames = ['Box']

  libComponentNames.forEach(componentName => {
    try {
      run(
        `src/lib/components/${folderName}/${componentName}/${kebabCase(componentName)}.tsx`,
        componentName,
        `${componentName}OwnProps`,
        `src/meta/${kebabCase(componentName)}.json`
      )
    } catch (ex) {
      console.error(ex)
    }
  })
})
