import { ComponentMeta } from 'client/definitions'

import { FLEX_PROPS_META } from '../../../../core/Flex/meta/props'
import { type FormActionsProps } from '../../slots/FormActions/definitions'
import { DEFAULT_FORM_ACTIONS_GAP } from '../../slots/FormActions/definitions'

const FORM_ACTIONS_PROPS_META: ComponentMeta<FormActionsProps>['props'] = {
  alignContent: FLEX_PROPS_META.alignContent,
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
