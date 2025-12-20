import { ComponentMeta } from 'client/definitions'
import { BoxProps, ButtonProps, CalloutProps, SectionProps, TextProps } from 'lib/components'
import { RespValue } from 'lib/definitions'

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
      bundle: ComponentMeta<unknown>['overview']['bundle']
      props: Props
      activeProp: string
    }
  >
}

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
    'inlineSize',
    'intent',
    'justifyContent',
    'loading',
    'minInlineSize',
    'maxInlineSize',
    'size',
    'variant',
  ] as (keyof ButtonProps)[],
  Text: [
    'bold',
    'children',
    'clampLines',
    'color',
    'disabled',
    'iconName',
    'iconPosition',
    'intent',
    'italic',
    'noWrap',
    'scale',
    'textAlign',
    'truncate',
    'typography',
    'underline',
  ] as (keyof TextProps)[],
  Section: [
    'children',
    'color',
    'heading',
    'iconName',
    'iconPosition',
    'intent',
    'size',
    'variant',
  ] as (keyof SectionProps)[],
  Callout: ['content', 'heading', 'intent', 'size', 'status', 'variant'] as (keyof CalloutProps)[],
}
