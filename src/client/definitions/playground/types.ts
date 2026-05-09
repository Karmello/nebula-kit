import {
  PROPS_FROM_AVATAR,
  PROPS_FROM_BOX,
  PROPS_FROM_BUTTON,
  PROPS_FROM_CALLOUT,
  PROPS_FROM_CHECKBOX,
  PROPS_FROM_ICON,
  PROPS_FROM_INPUT,
  PROPS_FROM_LOADER,
  PROPS_FROM_REVEAL,
  PROPS_FROM_SECTION,
  PROPS_FROM_SELECT,
  PROPS_FROM_SWITCH,
  PROPS_FROM_TABLE,
  PROPS_FROM_TABS,
  PROPS_FROM_TEXT,
} from './props'

export type PropsFromAvatarKey = (typeof PROPS_FROM_AVATAR)[number]
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
  | PropsFromAvatarKey
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
