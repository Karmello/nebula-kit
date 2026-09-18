import {
  BOX_BG_MODE,
  BOX_COLORS,
  BOX_INTENTS,
  BOX_SURFACE_DEPTHS,
} from 'lib/components/core/Box/constants'
import {
  DEFAULT_HORIZONTAL_RULE_BG_MODE,
  DEFAULT_HORIZONTAL_RULE_INTENT,
  DEFAULT_HORIZONTAL_RULE_MARGIN_BLOCK,
  DEFAULT_HORIZONTAL_RULE_SURFACE_DEPTH,
} from 'lib/components/core/HorizontalRule/constants'
import { HorizontalRuleProps } from 'lib/index.core'
import type { DocProp } from 'client/definitions'

export const HORIZONTAL_RULE_PROPS: Record<keyof HorizontalRuleProps, DocProp> = {
  elemRef: {
    options: ['RefObject'],
    description: 'Reference to the element.',
  },
  elemAttrs: {
    options: ['HTML tag attributes'],
    description: 'Additional HTML attributes applied to the element.',
  },
  // surface
  intent: {
    options: BOX_INTENTS,
    defaultValue: String(DEFAULT_HORIZONTAL_RULE_INTENT),
    description: "Color tone applied to the component's main color.",
    group: 'surface',
  },
  color: {
    options: BOX_COLORS,
    description: 'Color applied to the component.',
    group: 'surface',
  },
  surfaceDepth: {
    options: BOX_SURFACE_DEPTHS,
    defaultValue: DEFAULT_HORIZONTAL_RULE_SURFACE_DEPTH,
    description:
      "Selects which depth tier the component's surface color is drawn from - base or raised - each with its own per-intent lightness and interaction states.",
    group: 'surface',
  },
  bgMode: {
    options: BOX_BG_MODE,
    defaultValue: DEFAULT_HORIZONTAL_RULE_BG_MODE,
    description:
      "Controls how the component's background is painted - transparent for no fill, tinted for a fill that blends with whatever sits behind it, or filled for a solid, full-strength fill.",
    group: 'surface',
  },
  // margin
  marginBlock: {
    options: ['string'],
    defaultValue: String(DEFAULT_HORIZONTAL_RULE_MARGIN_BLOCK),
    isResponsive: true,
    description: 'Margin for the top and bottom sides.',
    link: true,
    group: 'margin',
  },
  marginTop: {
    options: ['string'],
    isResponsive: true,
    description: 'Margin for the top side.',
    link: true,
    group: 'margin',
  },
  marginBottom: {
    options: ['string'],
    isResponsive: true,
    description: 'Margin for the bottom side.',
    link: true,
    group: 'margin',
  },
}
