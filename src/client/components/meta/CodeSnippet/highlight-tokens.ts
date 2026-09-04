import bash from '@shikijs/langs/bash'
import css from '@shikijs/langs/css'
import js from '@shikijs/langs/js'
import json from '@shikijs/langs/json'
import jsx from '@shikijs/langs/jsx'
import log from '@shikijs/langs/log'
import ts from '@shikijs/langs/ts'
import tsx from '@shikijs/langs/tsx'
import githubDark from '@shikijs/themes/github-dark'
import githubLight from '@shikijs/themes/github-light'
import {
  BundledLanguage,
  createHighlighterCore,
  createJavaScriptRegexEngine,
  TokensResult,
} from 'shiki'

import type { NebkitProviderTheme } from 'lib/components/core/NebkitProvider/types'

const highlighter = await createHighlighterCore({
  engine: createJavaScriptRegexEngine(),
  langs: [log, bash, tsx, ts, jsx, js, css, json],
  themes: [githubLight, githubDark],
})

export const tokenizeCode = (
  code: string,
  lang: BundledLanguage,
  theme: NebkitProviderTheme
): TokensResult => {
  return highlighter.codeToTokens(code, {
    lang,
    theme: theme === 'light' ? githubLight : githubDark,
  })
}
