import { ComponentMeta } from 'client/definitions'
import { FLEX_PROPS_META } from 'client/meta/Flex/props'
import { FormActionsProps } from 'lib/components'
import { DEFAULT_FORM_ACTIONS_GAP } from 'lib/components/pro/form-elements/Form'

const FORM_ACTIONS_PROPS_META: ComponentMeta<FormActionsProps>['props'] = {
  alignItems: FLEX_PROPS_META.alignItems,
  children: {
    ...FLEX_PROPS_META.children,
    options: ['Form.ActionButton'],
    description: 'Action button slots.',
  },
  columnGap: FLEX_PROPS_META.columnGap,
  flexDirection: FLEX_PROPS_META.flexDirection,
  flexWrap: FLEX_PROPS_META.flexWrap,
  gap: {
    ...FLEX_PROPS_META.gap,
    defaultValue: String(DEFAULT_FORM_ACTIONS_GAP),
  },
  justifyContent: FLEX_PROPS_META.justifyContent,
  rowGap: FLEX_PROPS_META.rowGap,
  tagAttrs: FLEX_PROPS_META.tagAttrs,
  tagRef: FLEX_PROPS_META.tagRef,
}

export { FORM_ACTIONS_PROPS_META }
