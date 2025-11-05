import { Box } from 'lib/components'
import { WithSlots } from 'lib/components/internal'

import { FormFieldProps } from './definitions'

export const FormField = ({ children, tagAttrs, tagRef }: FormFieldProps) => {
  return (
    <WithSlots<'Input' | 'Select'>
      childrenToVerify={children}
      componentName="Form.Field"
      slotsConfig={[{ name: 'Input' }, { name: 'Select' }]}
      someRequired
    >
      {({ allValidSlots }) => {
        return (
          <Box tag="label" tagAttrs={tagAttrs} tagRef={tagRef}>
            {allValidSlots[0]}
          </Box>
        )
      }}
    </WithSlots>
  )
}

FormField.displayName = 'Form.Field'
