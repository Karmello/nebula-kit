import { Spacer, Text } from 'lib/components'

import { DEFAULT_FORM_HINT_COLOR, DEFAULT_FORM_HINT_INTENT, DEFAULT_FORM_HINT_SCALE, FormHintProps } from './definitions'

export const FormHint = ({
  // Text
  children,
  tagAttrs,
  tagRef,
  bold,
  iconName,
  iconPlacement,
  intent = DEFAULT_FORM_HINT_INTENT,
  color = DEFAULT_FORM_HINT_COLOR,
  noWrap,
  scale = DEFAULT_FORM_HINT_SCALE,
  textAlign,
  truncate,
}: FormHintProps) => {
  return (
    <>
      <Spacer blockSize="3px" />
      <Text
        tag="span"
        tagAttrs={tagAttrs}
        tagRef={tagRef}
        scale={scale}
        bold={bold}
        iconName={iconName}
        iconPlacement={iconPlacement}
        intent={intent}
        color={color}
        noWrap={noWrap}
        textAlign={textAlign}
        truncate={truncate}
      >
        {children}
      </Text>
    </>
  )
}

FormHint.displayName = 'Form.Hint'
