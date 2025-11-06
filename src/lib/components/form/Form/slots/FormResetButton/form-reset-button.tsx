import { useFormContext } from 'react-hook-form'

import { Button, Flex } from 'lib/components'

import { FormResetButtonProps } from './definitions'

export const FormResetButton = ({
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
  intent,
  size,
  disabled,
  iconName,
  iconPosition,
}: FormResetButtonProps) => {
  const { reset } = useFormContext()

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
        tagAttrs={{ type: 'reset', onClick: () => reset() }}
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

FormResetButton.displayName = 'Form.ResetButton'
