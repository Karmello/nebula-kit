import { TextElem, TextTypography } from 'lib/definitions'

import { TextOwnProps } from './text'

export const TEXT_TYPOGRAPHY_CONFIG: Record<
  TextTypography,
  {
    elem: TextElem
    fontSize: TextOwnProps['fontSize']
    lineHeight: TextOwnProps['lineHeight']
  }
> = {
  caption: { elem: 'p', fontSize: 6, lineHeight: 1.4 },
  secondary: { elem: 'p', fontSize: 7, lineHeight: 1.5 },
  body: { elem: 'p', fontSize: 8, lineHeight: 1.6 },
  lead: { elem: 'p', fontSize: 9, lineHeight: 1.6 },
  h6: { elem: 'h6', fontSize: 10, lineHeight: 1.3 },
  h5: { elem: 'h5', fontSize: 12, lineHeight: 1.3 },
  h4: { elem: 'h4', fontSize: 15, lineHeight: 1.25 },
  h3: { elem: 'h3', fontSize: 18, lineHeight: 1.25 },
  h2: { elem: 'h2', fontSize: 24, lineHeight: 1.2 },
  h1: { elem: 'h1', fontSize: 30, lineHeight: 1.1 },
}
