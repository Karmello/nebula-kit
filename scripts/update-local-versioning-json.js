import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import crypto from 'node:crypto'

const root = process.cwd()
const versionFile = path.join(root, 'versioning.json')

// read version
const pkg = JSON.parse(await readFile('./package.json', 'utf8'))
const version = pkg.version

// tarball path produced by `npm pack`
const tarballPath = path.join(root, 'dist', `nebula-kit-pro-${version}.tgz`)

// read tarball + compute shasum
const tarball = await readFile(tarballPath)
const shasum = crypto.createHash('sha1').update(tarball).digest('hex')

// read existing versioning.json
const existingJson = JSON.parse(await readFile(versionFile, 'utf8'))

// normalize old format → new format
const existingEntries = Array.isArray(existingJson.all) ? existingJson.all : []

// dedupe by version
const map = new Map(existingEntries.map(entry => [entry.version, entry]))

// insert / overwrite current version
map.set(version, { version, shasum })

const updated = {
  latest: version,
  all: Array.from(map.values()),
}

await writeFile(versionFile, JSON.stringify(updated, null, 2))

console.log('Updated versioning.json:')
console.log(updated)
