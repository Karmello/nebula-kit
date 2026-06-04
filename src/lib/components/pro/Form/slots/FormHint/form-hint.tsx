import { Spacer, Text, Title } from 'lib/index.core'
import { FormHintProps } from 'lib/index.pro'

import { DEFAULT_FORM_HINT_COLOR, DEFAULT_FORM_HINT_INTENT } from './definitions'

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
  // Title
  iconName,
  iconPlacement,
}: FormHintProps) => {
  return (
    <>
      <Spacer blockSize="2xs" />
      <Title iconName={iconName} iconPlacement={iconPlacement}>
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
      </Title>
    </>
  )
}

FormHint.displayName = 'Form.Hint'
