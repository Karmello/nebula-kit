import { BundledLanguage, createHighlighterCore, createJavaScriptRegexEngine, TokensResult } from 'shiki'

import log from '@shikijs/langs/log'
import bash from '@shikijs/langs/bash'
import tsx from '@shikijs/langs/tsx'
import ts from '@shikijs/langs/ts'
import jsx from '@shikijs/langs/jsx'
import js from '@shikijs/langs/js'
import css from '@shikijs/langs/css'
import json from '@shikijs/langs/json'

import githubLight from '@shikijs/themes/github-light'
import githubDark from '@shikijs/themes/github-dark'

import { Theme } from 'lib/definitions'

const highlighter = await createHighlighterCore({
  engine: createJavaScriptRegexEngine(),
  langs: [log, bash, tsx, ts, jsx, js, css, json],
  themes: [githubLight, githubDark],
})

export const tokenizeCode = (code: string, lang: BundledLanguage, theme: Theme): TokensResult => {
  return highlighter.codeToTokens(code, { lang, theme: theme === 'light' ? githubLight : githubDark })
}
