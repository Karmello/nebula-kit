import { ComponentMeta } from 'client/definitions'
import { RespValue } from 'lib/definitions'

import {
  BoxProps,
  ButtonProps,
  CalloutProps,
  SectionProps,
  TextProps,
  IconProps,
  CheckboxProps,
} from 'lib/components'

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
    'defaultState',
    'disabled',
    'drawable',
    'elevated',
    'inlineSize',
    'intent',
    'interactive',
    'margin',
    'padding',
    'theme',
    'variant',
    'visibility',
  ] as (keyof BoxProps)[],
  Button: [
    'bold',
    'children',
    'color',
    'defaultState',
    'disabled',
    'elevated',
    'fullWidth',
    'iconAngle',
    'iconName',
    'iconPlacement',
    'inlineSize',
    'intent',
    'interactive',
    'justifyContent',
    'loading',
    'minInlineSize',
    'maxInlineSize',
    'ripple',
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
    'iconPlacement',
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
    'iconPlacement',
    'intent',
    'size',
    'variant',
  ] as (keyof SectionProps)[],
  Callout: ['content', 'heading', 'intent', 'size', 'status', 'variant'] as (keyof CalloutProps)[],
  Icon: ['color', 'intent', 'name', 'size'] as (keyof IconProps)[],
  Checkbox: ['checked', 'color', 'disabled', 'intent', 'size', 'variant'] as (keyof CheckboxProps)[],
}
