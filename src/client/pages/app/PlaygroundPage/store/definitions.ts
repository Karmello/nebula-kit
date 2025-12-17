import { BoxProps, ButtonProps } from 'lib/components'
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
  Button: [
    'bold',
    'children',
    'color',
    'disabled',
    'fullWidth',
    'highlighted',
    'iconAngle',
    'iconName',
    'iconPosition',
    'intent',
    'justifyContent',
    'loading',
    'size',
    'variant',
  ] as (keyof ButtonProps)[],
}

export type PropValue = RespValue<string | number | boolean>

export type Prop = {
  options: string[]
  defaultValue: PropValue
  isResponsive: boolean
  value: PropValue
}

export type Props = Record<string, Prop>

export type State = {
  displayProps: boolean
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
