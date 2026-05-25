import classNames from 'classnames'

import { Flex } from 'lib/components'
import { WithSlots } from 'lib/components/shared'
import { withPrefix } from 'lib/helpers'

import {
  DEFAULT_FORM_FIELDS_FLEX_DIRECTION,
  DEFAULT_FORM_FIELDS_ALIGN_ITEMS,
  DEFAULT_FORM_FIELDS_COLUMN_GAP,
  DEFAULT_FORM_FIELDS_ROW_GAP,
  FormFieldsProps,
} from './definitions'

export const FormFields = ({
  // Flex
  children,
  tagAttrs,
  tagRef,
  flexDirection = DEFAULT_FORM_FIELDS_FLEX_DIRECTION,
  flexWrap,
  justifyContent,
  alignItems = DEFAULT_FORM_FIELDS_ALIGN_ITEMS,
  gap,
  columnGap = DEFAULT_FORM_FIELDS_COLUMN_GAP,
  rowGap = DEFAULT_FORM_FIELDS_ROW_GAP,
}: FormFieldsProps) => {
  return (
    <WithSlots<'Form.Field'>
      childrenToVerify={children}
      componentName="Form.Fields"
      slotsConfig={[
        {
          name: 'Form.Field',
          required: true,
          allowMultiple: true,
        },
      ]}
    >
      {({ slotsByName }) => {
        return (
          <Flex
            tagAttrs={{
              ...tagAttrs,
              className: classNames(withPrefix('form-fields'), tagAttrs?.className),
            }}
            tagRef={tagRef}
            flexDirection={flexDirection}
            flexWrap={flexWrap}
            justifyContent={justifyContent}
            alignItems={alignItems}
            gap={gap}
            columnGap={columnGap}
            rowGap={rowGap}
          >
            {slotsByName['Form.Field']}
          </Flex>
        )
      }}
    </WithSlots>
  )
}

FormFields.displayName = 'Form.Fields'
