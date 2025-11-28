import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const root = process.cwd()
const versionFile = path.join(root, 'versioning.json')

const pkg = JSON.parse(await readFile('./package.json', 'utf8'))
const newVersion = pkg.version

const ver = JSON.parse(await readFile(versionFile, 'utf8'))

const all = new Set(ver.all)
all.add(newVersion)

const updated = {
  latest: newVersion,
  all: Array.from(all),
}

await writeFile(versionFile, JSON.stringify(updated, null, 2))

console.log('Updated versioning.json:', updated)
