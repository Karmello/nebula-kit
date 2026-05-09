import { Spacer, Text } from 'lib/components'

import { DEFAULT_FORM_LABEL_INTENT, FormLabelProps } from './definitions'

export const FormLabel = ({
  // Text
  children,
  tagAttrs,
  tagRef,
  bold,
  iconName,
  iconPlacement,
  intent = DEFAULT_FORM_LABEL_INTENT,
  color,
  noWrap,
  textAlign,
  truncate,
}: FormLabelProps) => {
  return (
    <>
      <Text
        tag="label"
        tagAttrs={tagAttrs}
        tagRef={tagRef}
        typography="small"
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
      <Spacer blockSize="2xs" />
    </>
  )
}

FormLabel.displayName = 'Form.Label'
