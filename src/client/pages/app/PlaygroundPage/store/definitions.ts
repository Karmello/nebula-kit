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
  SelectProps,
  InputProps,
  SwitchProps,
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
    'disabled',
    'drawable',
    'inlineSize',
    'intent',
    'interactive',
    'margin',
    'padding',
    'selected',
    'surface',
    'theme',
    'variant',
    'visibility',
  ] as (keyof BoxProps)[],
  Button: [
    'bold',
    'children',
    'color',
    'disabled',
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
    'surface',
    'variant',
  ] as (keyof ButtonProps)[],
  Callout: ['content', 'heading', 'intent', 'size', 'status', 'variant'] as (keyof CalloutProps)[],
  Checkbox: ['checked', 'color', 'disabled', 'intent', 'size', 'variant'] as (keyof CheckboxProps)[],
  Icon: ['color', 'intent', 'name', 'size'] as (keyof IconProps)[],
  Input: ['color', 'disabled', 'intent', 'placeholder', 'readOnly', 'size', 'variant'] as (keyof InputProps)[],
  Section: ['children', 'color', 'heading', 'iconName', 'iconPlacement', 'intent', 'size', 'variant'] as (keyof SectionProps)[],
  Select: [
    'color',
    'disabled',
    'dropdownPlacement',
    'inlineSize',
    'intent',
    'scrollAlign',
    'size',
    'staticLabel',
    'visibleItemsCount',
  ] as (keyof SelectProps)[],
  Switch: ['color', 'disabled', 'intent', 'size'] as (keyof SwitchProps)[],
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
}
