import { RespValue } from 'lib/definitions'

const COMMON_BLACKLISTED_PROPS = ['tag', 'tagAttrs', 'tagRef']

export const PLAYGROUND_MAP: Record<string, string[]> = {
  Box: [
    ...COMMON_BLACKLISTED_PROPS,
    'borderBottomLeftRadius',
    'borderBottomRightRadius',
    'borderBottomWidth',
    'borderLeftWidth',
    'borderRightWidth',
    'borderTopLeftRadius',
    'borderTopRightRadius',
    'borderTopWidth',
    'zIndex',
  ],
  Text: [...COMMON_BLACKLISTED_PROPS, 'space'],
  Button: [...COMMON_BLACKLISTED_PROPS],
  Callout: [...COMMON_BLACKLISTED_PROPS],
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
