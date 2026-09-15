import { Pattern } from './definitions'
import { Test } from './jsx/test'
import testCode from './jsx/test.tsx?raw'

export const PATTERNS: Array<Pattern> = [
  {
    id: 'test',
    category: 'Basic',
    title: 'Test',
    description: 'Test pattern.',
    component: Test,
    code: testCode,
  },
]

export * from './definitions'
