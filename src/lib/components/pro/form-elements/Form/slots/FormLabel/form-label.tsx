import { Text, Spacer, WithIcon } from 'lib/components'

import { DEFAULT_FORM_LABEL_INTENT, FormLabelProps } from './definitions'

export const FormLabel = ({
  // Text
  children,
  tagAttrs,
  tagRef,
  bold,
  iconName,
  intent = DEFAULT_FORM_LABEL_INTENT,
  color,
  noWrap,
  textAlign,
  truncate,
  // WithIcon
  iconPlacement,
}: FormLabelProps) => {
  return (
    <>
      <WithIcon iconPlacement={iconPlacement}>
        <Text
          tag="label"
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
      <Spacer blockSize="xs" />
    </>
  )
}

FormLabel.displayName = 'Form.Label'
