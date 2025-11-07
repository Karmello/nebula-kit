import { Text } from 'lib/components'

import { DEFAULT_FORM_LABEL_INTENT, FormLabelProps } from './definitions'

export const FormLabel = ({
  // Text
  children,
  tagAttrs,
  tagRef,
  bold,
  iconName,
  iconPosition,
  intent = DEFAULT_FORM_LABEL_INTENT,
  noWrap,
  textAlign,
  truncate,
}: FormLabelProps) => {
  return (
    <Text
      tag="label"
      tagAttrs={tagAttrs}
      tagRef={tagRef}
      bold={bold}
      iconName={iconName}
      iconPosition={iconPosition}
      intent={intent}
      noWrap={noWrap}
      textAlign={textAlign}
      truncate={truncate}
    >
      {children}
    </Text>
  )
}

FormLabel.displayName = 'Form.Label'
