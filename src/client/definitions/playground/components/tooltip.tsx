import { Button, Tooltip, TooltipProps } from 'lib/components'

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
  'textAlign',
  'variant',
] as const satisfies readonly (keyof TooltipProps)[]

export const TOOLTIP_PRESETS = [
  {
    name: 'Default',
    props: {
      //
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
