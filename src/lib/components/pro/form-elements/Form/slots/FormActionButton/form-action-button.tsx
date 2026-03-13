import { useFormContext } from 'react-hook-form'

import { Button, Flex } from 'lib/components'
import { DEFAULT_BUTTON_INTENT } from 'lib/components/core/controls/Button/definitions'
import { withPrefix } from 'lib/helpers'

import {
  DEFAULT_FORM_ACTION_SUBMIT_BUTTON_COLOR,
  DEFAULT_FORM_ACTION_SUBMIT_BUTTON_INTENT,
  FormActionButtonProps,
} from './definitions'

export const FormActionButton = ({
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
  color,
  size,
  disabled,
  iconName,
  iconPlacement,
  // own
  type,
  onClick,
}: FormActionButtonProps) => {
  const {
    reset,
    formState: { isSubmitting },
  } = useFormContext()

  const finalDefaultIntent = type === 'submit' ? DEFAULT_FORM_ACTION_SUBMIT_BUTTON_INTENT : DEFAULT_BUTTON_INTENT

  const finalDefaultColor = type === 'submit' ? DEFAULT_FORM_ACTION_SUBMIT_BUTTON_COLOR : undefined

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
        tagAttrs={{
          className: withPrefix('form-action-button'),
          type: ([undefined, 'clear'].includes(type) ? 'button' : type) as never,
          onClick: e => {
            if (type === 'reset') {
              reset()
            } else if (type === 'clear') {
              reset({})
            }
            onClick?.(e)
          },
        }}
        fullWidth
        variant={variant}
        intent={intent ?? finalDefaultIntent}
        color={color ?? finalDefaultColor}
        size={size}
        disabled={disabled}
        iconName={iconName}
        iconPlacement={iconPlacement}
        loading={type === 'submit' && isSubmitting}
      >
        {children}
      </Button>
    </Flex.Item>
  )
}

FormActionButton.displayName = 'Form.ActionButton'
