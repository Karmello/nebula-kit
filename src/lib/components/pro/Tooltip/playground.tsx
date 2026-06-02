import { Button } from 'lib/index.core'
import { Tooltip, TooltipProps } from 'lib/index.pro'

export type PropsFromTooltipKey = (typeof PROPS_FROM_TOOLTIP)[number]

export const PROPS_FROM_TOOLTIP = [
  'color',
  'content',
  'intent',
  'maxInlineSize',
  'minInlineSize',
  'mode',
  'offset',
  'padding',
  'paddingBlock',
  'paddingInline',
  'placement',
  'variant',
] as const satisfies readonly (keyof TooltipProps)[]

export const TOOLTIP_PRESETS = [
  {
    name: 'Default',
    props: {
      content: 'This is tooltip content.',
    } as Record<PropsFromTooltipKey, unknown>,
  },
  {
    name: 'Custom',
    props: {
      color: 'blue',
      intent: 'primary',
      variant: 'outline',
      mode: 'click',
      content: 'This is much much longer tooltip content to display maxInlineSize in action.',
    } as Record<PropsFromTooltipKey, unknown>,
  },
]

export const TooltipTemplate = (props: any) => {
  return (
    <Tooltip {...props}>
      <Button>Tooltip trigger</Button>
    </Tooltip>
  )
}
