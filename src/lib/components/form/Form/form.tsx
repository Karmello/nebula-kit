import classNames from 'classnames'

import { Flex } from 'lib/components'
import { WithSlots } from 'lib/components/internal'
import { withPrefix } from 'lib/helpers'

import {
  DEFAULT_FORM_ALIGN_ITEMS,
  DEFAULT_FORM_FLEX_DIRECTION,
  DEFAULT_FORM_GAP,
  FormProps,
} from './definitions'

export const Form = ({
  // HtmlTag
  children,
  tagAttrs,
  tagRef,
  // Flex
  flexDirection = DEFAULT_FORM_FLEX_DIRECTION,
  flexWrap,
  justifyContent,
  alignItems = DEFAULT_FORM_ALIGN_ITEMS,
  gap = DEFAULT_FORM_GAP,
}: FormProps) => {
  return (
    <WithSlots<'Form.Field'>
      childrenToVerify={children}
      componentName="Form"
      slotsConfig={[{ name: 'Form.Field', required: true, allowMultiple: true }]}
    >
      {({ slotsByName }) => {
        return (
          <Flex
            tag="form"
            tagAttrs={{
              ...tagAttrs,
              className: classNames(withPrefix('form'), tagAttrs?.className),
            }}
            tagRef={tagRef}
            flexDirection={flexDirection}
            flexWrap={flexWrap}
            justifyContent={justifyContent}
            alignItems={alignItems}
            gap={gap}
          >
            {slotsByName['Form.Field'].map(slot => (
              <Flex.Item flex={1}>{slot}</Flex.Item>
            ))}
          </Flex>
        )
      }}
    </WithSlots>
  )
}

Form.displayName = 'Form'
