import { ComponentMeta } from 'client/definitions'
import { ICON_NAMES, RespValue } from 'lib/definitions'

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
  TableProps,
  LoaderProps,
  TabsProps,
  RevealProps,
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

const PROPS_FROM_BOX = [
  'blockSize',
  'borderRadius',
  'borderWidth',
  'brand',
  'children',
  'color',
  'disabled',
  'drawable',
  'elevated',
  'inlineSize',
  'intent',
  'interactive',
  'margin',
  'padding',
  'surface',
  'theme',
  'variant',
  'visibility',
] as const satisfies readonly (keyof BoxProps)[]

const PROPS_FROM_BUTTON = [
  'bold',
  'children',
  'color',
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
  'selected',
  'size',
  'variant',
] as const satisfies readonly (keyof ButtonProps)[]

const PROPS_FROM_CALLOUT = [
  'content',
  'heading',
  'intent',
  'size',
  'status',
  'variant',
] as const satisfies readonly (keyof CalloutProps)[]

const PROPS_FROM_CHECKBOX = [
  'checked',
  'color',
  'disabled',
  'intent',
  'size',
  'variant',
] as const satisfies readonly (keyof CheckboxProps)[]

const PROPS_FROM_ICON = ['color', 'intent', 'name', 'size'] as const satisfies readonly (keyof IconProps)[]

const PROPS_FROM_INPUT = [
  'color',
  'disabled',
  'intent',
  'placeholder',
  'readOnly',
  'size',
  'variant',
] as const satisfies readonly (keyof InputProps)[]

const PROPS_FROM_LOADER = ['active', 'centered', 'color', 'size'] as const satisfies readonly (keyof LoaderProps)[]

const PROPS_FROM_REVEAL = [
  'children',
  'color',
  'disabled',
  'intent',
  'label',
  'size',
] as const satisfies readonly (keyof RevealProps)[]

const PROPS_FROM_SECTION = [
  'children',
  'color',
  'heading',
  'iconName',
  'iconPlacement',
  'intent',
  'interactive',
  'size',
  'variant',
] as const satisfies readonly (keyof SectionProps)[]

const PROPS_FROM_SELECT = [
  'color',
  'disabled',
  'dropdownPlacement',
  'inlineSize',
  'intent',
  'scrollAlign',
  'size',
  'staticLabel',
  'visibleItemsCount',
] as const satisfies readonly (keyof SelectProps)[]

const PROPS_FROM_SWITCH = ['color', 'disabled', 'intent', 'size'] as const satisfies readonly (keyof SwitchProps)[]

const PROPS_FROM_TABLE = [
  'color',
  'inlineSize',
  'intent',
  'layout',
  'maxInlineSize',
  'minInlineSize',
  'paddingBlock',
  'paddingInline',
  'textAlign',
] as const satisfies readonly (keyof TableProps)[]

const PROPS_FROM_TABS = [
  'color',
  'flexDirection',
  'inlineSize',
  'intent',
  'size',
  'variant',
] as const satisfies readonly (keyof TabsProps)[]

const PROPS_FROM_TEXT = [
  'bold',
  'children',
  'clampLines',
  'color',
  'disabled',
  'fontSize',
  'iconName',
  'iconPlacement',
  'intent',
  'italic',
  'lineHeight',
  'noWrap',
  'scale',
  'textAlign',
  'truncate',
  'typography',
  'underline',
] as const satisfies readonly (keyof TextProps)[]

export const PLAYGROUND_PROPS_MAP: Record<string, readonly string[]> = {
  Box: PROPS_FROM_BOX,
  Button: PROPS_FROM_BUTTON,
  Callout: PROPS_FROM_CALLOUT,
  Checkbox: PROPS_FROM_CHECKBOX,
  Icon: PROPS_FROM_ICON,
  Input: PROPS_FROM_INPUT,
  Loader: PROPS_FROM_LOADER,
  Reveal: PROPS_FROM_REVEAL,
  Section: PROPS_FROM_SECTION,
  Select: PROPS_FROM_SELECT,
  Switch: PROPS_FROM_SWITCH,
  Tabs: PROPS_FROM_TABS,
  Table: PROPS_FROM_TABLE,
  Text: PROPS_FROM_TEXT,
}

export type PropsFromBoxKey = (typeof PROPS_FROM_BOX)[number]
export type PropsFromButtonKey = (typeof PROPS_FROM_BUTTON)[number]
export type PropsFromCalloutKey = (typeof PROPS_FROM_CALLOUT)[number]
export type PropsFromCheckboxKey = (typeof PROPS_FROM_CHECKBOX)[number]
export type PropsFromIconKey = (typeof PROPS_FROM_ICON)[number]
export type PropsFromInputKey = (typeof PROPS_FROM_INPUT)[number]
export type PropsFromLoaderKey = (typeof PROPS_FROM_LOADER)[number]
export type PropsFromRevealKey = (typeof PROPS_FROM_REVEAL)[number]
export type PropsFromSectionKey = (typeof PROPS_FROM_SECTION)[number]
export type PropsFromSelectKey = (typeof PROPS_FROM_SELECT)[number]
export type PropsFromSwitchKey = (typeof PROPS_FROM_SWITCH)[number]
export type PropsFromTableKey = (typeof PROPS_FROM_TABLE)[number]
export type PropsFromTabsKey = (typeof PROPS_FROM_TABS)[number]
export type PropsFromTextKey = (typeof PROPS_FROM_TEXT)[number]

export type PlaygroundProp =
  | PropsFromBoxKey
  | PropsFromButtonKey
  | PropsFromCalloutKey
  | PropsFromCheckboxKey
  | PropsFromIconKey
  | PropsFromInputKey
  | PropsFromLoaderKey
  | PropsFromRevealKey
  | PropsFromSectionKey
  | PropsFromSelectKey
  | PropsFromSwitchKey
  | PropsFromTableKey
  | PropsFromTabsKey
  | PropsFromTextKey

export const PLAYGROUND_CONTROLS_MAP: Record<PlaygroundProp, { type: 'array' | 'boolean' | 'string' }> = {
  active: { type: 'boolean' },
  blockSize: { type: 'string' },
  bold: { type: 'boolean' },
  borderRadius: { type: 'string' },
  borderWidth: { type: 'string' },
  brand: { type: 'array' },
  centered: { type: 'boolean' },
  checked: { type: 'boolean' },
  children: { type: 'string' },
  clampLines: { type: 'string' },
  color: { type: 'array' },
  content: { type: 'string' },
  disabled: { type: 'boolean' },
  drawable: { type: 'boolean' },
  dropdownPlacement: { type: 'array' },
  elevated: { type: 'boolean' },
  flexDirection: { type: 'array' },
  fontSize: { type: 'string' },
  fullWidth: { type: 'boolean' },
  heading: { type: 'string' },
  iconAngle: { type: 'string' },
  iconName: { type: 'array' },
  iconPlacement: { type: 'array' },
  inlineSize: { type: 'string' },
  intent: { type: 'array' },
  interactive: { type: 'boolean' },
  italic: { type: 'boolean' },
  justifyContent: { type: 'array' },
  label: { type: 'string' },
  layout: { type: 'array' },
  lineHeight: { type: 'string' },
  loading: { type: 'boolean' },
  margin: { type: 'string' },
  maxInlineSize: { type: 'string' },
  minInlineSize: { type: 'string' },
  name: { type: 'array' },
  noWrap: { type: 'boolean' },
  padding: { type: 'string' },
  paddingBlock: { type: 'string' },
  paddingInline: { type: 'string' },
  placeholder: { type: 'string' },
  readOnly: { type: 'boolean' },
  ripple: { type: 'boolean' },
  scale: { type: 'array' },
  scrollAlign: { type: 'array' },
  selected: { type: 'boolean' },
  size: { type: 'array' },
  staticLabel: { type: 'string' },
  status: { type: 'array' },
  surface: { type: 'array' },
  textAlign: { type: 'array' },
  theme: { type: 'array' },
  truncate: { type: 'boolean' },
  typography: { type: 'array' },
  underline: { type: 'boolean' },
  variant: { type: 'array' },
  visibility: { type: 'array' },
  visibleItemsCount: { type: 'string' },
}

export const PLAYGROUND_ARRAY_DATA_MAP: Record<string, readonly string[]> = {
  IconName: ICON_NAMES,
}
