import { Text, Spacer, WithIcon } from 'lib/components'

import { DEFAULT_FORM_HINT_COLOR, DEFAULT_FORM_HINT_INTENT, FormHintProps } from './definitions'

export const FormHint = ({
  // Text
  children,
  tagAttrs,
  tagRef,
  bold,
  iconName,
  intent = DEFAULT_FORM_HINT_INTENT,
  color = DEFAULT_FORM_HINT_COLOR,
  noWrap,
  textAlign,
  truncate,
  // WithIcon
  iconPlacement,
}: FormHintProps) => {
  return (
    <>
      <Spacer blockSize="2xs" />
      <WithIcon iconPlacement={iconPlacement}>
        <Text
          tag="span"
          tagAttrs={tagAttrs}
          tagRef={tagRef}
          typography="small"
          bold={bold}
          iconName={iconName}
          intent={intent}
          color={color}
          noWrap={noWrap}
          textAlign={textAlign}
          truncate={truncate}
        >
          {children}
        </Text>
      </WithIcon>
    </>
  )
}

FormHint.displayName = 'Form.Hint'
