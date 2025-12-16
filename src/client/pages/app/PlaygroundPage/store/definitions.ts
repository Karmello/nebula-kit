import { BoxProps } from 'lib/components'
import { RespValue } from 'lib/definitions'

export const PLAYGROUND_MAP: Record<string, unknown[]> = {
  Box: [
    'blockSize',
    'borderRadius',
    'borderWidth',
    'brand',
    'children',
    'color',
    'disabled',
    'drawable',
    'highlighted',
    'inlineSize',
    'intent',
    'interactive',
    'margin',
    'padding',
    'theme',
    'variant',
  ] as (keyof BoxProps)[],
}

export type PlaygroundView = 'canvas' | 'props'
export type PropValue = RespValue<string | number | boolean>

export type Prop = {
  options: string[]
  defaultValue: PropValue
  isResponsive: boolean
  value: PropValue
}

export type Props = Record<string, Prop>

export type State = {
  view: PlaygroundView
  activeComponent: string
  components: Record<
    string,
    {
      props: Props
      activeProp: string
      activeSlot?: string
    }
  >
}
