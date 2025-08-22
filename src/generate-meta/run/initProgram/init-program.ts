import ts from 'typescript'
import path from 'path'

export const initProgram = (tsConfig: string) => {
  const configPath = ts.findConfigFile('.', ts.sys.fileExists, tsConfig)
  const config = ts.readConfigFile(configPath, ts.sys.readFile).config
  const parsed = ts.parseJsonConfigFileContent(config, ts.sys, path.dirname(configPath))

  return ts.createProgram(parsed.fileNames, parsed.options)
}
