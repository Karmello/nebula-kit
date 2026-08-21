import { WithSlots } from 'lib/components/shared'
import { Box } from 'lib/index.core'
import { FormActionsProps } from 'lib/index.pro'

import { DEFAULT_FORM_ACTIONS_GAP } from './definitions'

export const FormActions = ({
  // Flex
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
    <WithSlots<'Form.ActionButton'>
      childrenToVerify={children}
      componentName="FormActions"
      slotsConfig={[{ name: 'Form.ActionButton', required: true, allowMultiple: true }]}
    >
      {({ slotsByName }) => {
        return (
          <Box
            display="flex"
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
            {slotsByName['Form.ActionButton']}
          </Box>
        )
      }}
    </WithSlots>
  )
}

FormActions.displayName = 'Form.Actions'
