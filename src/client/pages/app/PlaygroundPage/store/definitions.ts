import { RespValue } from 'lib/definitions'

export const COMPONENTS_TO_SKIP = ['HtmlTag', 'NebkitProvider', 'HydrationGate']
export const PROPS_TO_SKIP = ['tag', 'tagAttrs', 'tagRef', 'zIndex']

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
