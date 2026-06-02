import { Spacer, Text, WithIcon } from 'lib/components'

import { DEFAULT_FORM_HINT_COLOR, DEFAULT_FORM_HINT_INTENT, FormHintProps } from './definitions'

export const FormHint = ({
  // Text
  children,
  tagAttrs,
  tagRef,
  bold,
  intent = DEFAULT_FORM_HINT_INTENT,
  color = DEFAULT_FORM_HINT_COLOR,
  noWrap,
  truncate,
  // WithIcon
  iconName,
  iconPlacement,
}: FormHintProps) => {
  return (
    <>
      <Spacer blockSize="2xs" />
      <WithIcon iconName={iconName} iconPlacement={iconPlacement}>
        <Text
          tag="span"
          tagAttrs={tagAttrs}
          tagRef={tagRef}
          typography="small"
          bold={bold}
          intent={intent}
          color={color}
          noWrap={noWrap}
          truncate={truncate}
        >
          {children}
        </Text>
      </WithIcon>
    </>
  )
}

FormHint.displayName = 'Form.Hint'
