import type {
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
  AvatarProps,
  WithIconProps,
} from 'lib/components'

export const PROPS_FROM_AVATAR = ['initials', 'shape', 'size', 'src'] as const satisfies readonly (keyof AvatarProps)[]

export const PROPS_FROM_BOX = [
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

export const PROPS_FROM_BUTTON = [
  'align',
  'bold',
  'children',
  'color',
  'description',
  'disabled',
  'elevated',
  'fullWidth',
  'iconAngle',
  'iconName',
  'iconPlacement',
  'inlineSize',
  'intent',
  'interactive',
  'loading',
  'minInlineSize',
  'maxInlineSize',
  'ripple',
  'selected',
  'size',
  'variant',
] as const satisfies readonly (keyof ButtonProps)[]

export const PROPS_FROM_CALLOUT = [
  'content',
  'heading',
  'intent',
  'size',
  'status',
  'variant',
] as const satisfies readonly (keyof CalloutProps)[]

export const PROPS_FROM_CHECKBOX = [
  'checked',
  'color',
  'disabled',
  'intent',
  'size',
  'variant',
] as const satisfies readonly (keyof CheckboxProps)[]

export const PROPS_FROM_ICON = ['color', 'intent', 'name', 'size'] as const satisfies readonly (keyof IconProps)[]

export const PROPS_FROM_INPUT = [
  'color',
  'disabled',
  'intent',
  'placeholder',
  'readOnly',
  'size',
  'variant',
] as const satisfies readonly (keyof InputProps)[]

export const PROPS_FROM_LOADER = ['active', 'centered', 'color', 'size'] as const satisfies readonly (keyof LoaderProps)[]

export const PROPS_FROM_REVEAL = [
  'children',
  'color',
  'disabled',
  'intent',
  'label',
  'size',
] as const satisfies readonly (keyof RevealProps)[]

export const PROPS_FROM_SECTION = [
  'children',
  'color',
  'heading',
  'headingIntent',
  'iconName',
  'iconPlacement',
  'intent',
  'interactive',
  'size',
  'variant',
] as const satisfies readonly (keyof SectionProps)[]

export const PROPS_FROM_SELECT = [
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

export const PROPS_FROM_SWITCH = ['color', 'disabled', 'intent', 'size'] as const satisfies readonly (keyof SwitchProps)[]

export const PROPS_FROM_TABLE = [
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

export const PROPS_FROM_TABS = [
  'color',
  'inlineSize',
  'intent',
  'orientation',
  'size',
  'variant',
] as const satisfies readonly (keyof TabsProps)[]

export const PROPS_FROM_TEXT = [
  'bold',
  'children',
  'clampLines',
  'color',
  'fontSize',
  'intent',
  'italic',
  'lineHeight',
  'noWrap',
  'textAlign',
  'truncate',
  'typography',
  'underline',
] as const satisfies readonly (keyof TextProps)[]

export const PROPS_FROM_WITH_ICON = [
  'children',
  'gap',
  'iconAngle',
  'iconColor',
  'iconIntent',
  'iconName',
  'iconPlacement',
  'iconSize',
  'inlineSize',
  'justifyContent',
] as const satisfies readonly (keyof WithIconProps)[]

export const PLAYGROUND_PROPS_MAP: Record<string, readonly string[]> = {
  Avatar: PROPS_FROM_AVATAR,
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
  WithIcon: PROPS_FROM_WITH_ICON,
}
