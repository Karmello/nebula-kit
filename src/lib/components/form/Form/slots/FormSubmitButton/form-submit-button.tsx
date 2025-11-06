import { Button, Flex } from 'lib/components'

import { DEFAULT_FORM_SUBMIT_BUTTON_INTENT, FormSubmitButtonProps } from './definitions'

export const FormSubmitButton = ({
  // FlexItem
  tagAttrs,
  tagRef,
  flex,
  flexBasis,
  flexGrow,
  flexShrink,
  alignSelf,
  order,
  // Button
  children,
  variant,
  intent = DEFAULT_FORM_SUBMIT_BUTTON_INTENT,
  size,
  disabled,
  iconName,
  iconPosition,
}: FormSubmitButtonProps) => {
  return (
    <Flex.Item
      tagAttrs={tagAttrs}
      tagRef={tagRef}
      flex={flex}
      flexBasis={flexBasis}
      flexGrow={flexGrow}
      flexShrink={flexShrink}
      alignSelf={alignSelf}
      order={order}
    >
      <Button
        tagAttrs={{ type: 'submit' }}
        fullWidth
        variant={variant}
        intent={intent}
        size={size}
        disabled={disabled}
        iconName={iconName}
        iconPosition={iconPosition}
      >
        {children}
      </Button>
    </Flex.Item>
  )
}

FormSubmitButton.displayName = 'Form.SubmitButton'
