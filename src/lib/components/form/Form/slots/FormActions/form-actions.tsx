import { Flex } from 'lib/components'
import { WithSlots } from 'lib/components/internal'

import { DEFAULT_FORM_ACTIONS_GAP, FormActionsProps } from './definitions'

export const FormActions = ({
  // FlexIem
  children,
  tagAttrs,
  tagRef,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  gap = DEFAULT_FORM_ACTIONS_GAP,
  columnGap,
  rowGap,
}: FormActionsProps) => {
  return (
    <WithSlots<'Form.SubmitButton' | 'Form.ResetButton'>
      childrenToVerify={children}
      componentName="FormActions"
      slotsConfig={[{ name: 'Form.SubmitButton' }, { name: 'Form.ResetButton' }]}
      someRequired
    >
      {({ slotsByName }) => {
        return (
          <Flex
            tagAttrs={tagAttrs}
            tagRef={tagRef}
            flexDirection={flexDirection}
            flexWrap={flexWrap}
            justifyContent={justifyContent}
            alignItems={alignItems}
            gap={gap}
            columnGap={columnGap}
            rowGap={rowGap}
          >
            {slotsByName['Form.SubmitButton']}
            {slotsByName['Form.ResetButton']}
          </Flex>
        )
      }}
    </WithSlots>
  )
}

FormActions.displayName = 'Form.Actions'
