import type { DocOverview } from 'client/definitions'

export const MARKUP_OVERVIEW: DocOverview = {
  bundle: 'pro',
  title:
    'Lightweight inline markup interpreter for rendering formatted textual content through Text components.',
  description:
    'Markup is a lightweight inline markup interpreter that enhances existing textual content with inline formatting such as bold, italic and inline code. It walks through nested textual structures and transforms supported formatting markers into semantic inline elements while preserving the original typography, sizing and layout behavior defined by Text.',
  features: [
    'interprets lightweight inline formatting markers inside textual content',
    'preserves typography and layout behavior from existing Text components',
    'supports nested Text composition and complex content structures',
    'works naturally with content-oriented components such as MarkerList',
  ],
  guidelines: [
    'wrap Text components with Markup instead of placing Markup inside Text',
    'use `**text**` to render bold inline text',
    'use `_text_` to render italic inline text',
    'use `\\`text\\`` to render inline code or short technical values',
    'Markup can process nested string children recursively when they appear inside Text-based structures',
  ],
  composedOf: ['Box'],
  exposedTags: ['div'],
}
