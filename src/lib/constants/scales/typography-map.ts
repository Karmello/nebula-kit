import type { TextTypography } from 'lib/components/core/Text/types'
import type { TextTag } from 'lib/types'

export const TYPOGRAPHY_MAP: Record<
  TextTypography,
  {
    tag: TextTag
    fontSize: string
    lineHeight: number
    gap?: string
  }
> = {
  body: {
    tag: 'p',
    fontSize: '15px',
    lineHeight: 1.4,
  },
  lead: {
    tag: 'p',
    fontSize: '17px',
    lineHeight: 1.4,
  },
  small: {
    tag: 'p',
    fontSize: '14px',
    lineHeight: 1.3,
  },
  caption: {
    tag: 'p',
    fontSize: '11px',
    lineHeight: 1.3,
  },
  h6: {
    tag: 'h6',
    fontSize: '16px',
    lineHeight: 1.4,
    gap: '9px',
  },
  h5: {
    tag: 'h5',
    fontSize: '22px',
    lineHeight: 1.4,
    gap: '11px',
  },
  h4: {
    tag: 'h4',
    fontSize: '27px',
    lineHeight: 1.4,
    gap: '13px',
  },
  h3: {
    tag: 'h3',
    fontSize: '37px',
    lineHeight: 1.3,
    gap: '15px',
  },
  h2: {
    tag: 'h2',
    fontSize: '48px',
    lineHeight: 1.3,
    gap: '20px',
  },
  h1: {
    tag: 'h1',
    fontSize: '60px',
    lineHeight: 1.3,
    gap: '25px',
  },
}
