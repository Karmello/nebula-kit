import { Spacer, Text, WithIcon } from 'lib/index.core'
import { FormLabelProps } from 'lib/index.pro'

import { DEFAULT_FORM_LABEL_INTENT } from './definitions'

export const FormLabel = ({
  // Text
  children,
  tagAttrs,
  tagRef,
  bold,
  intent = DEFAULT_FORM_LABEL_INTENT,
  color,
  noWrap,
  truncate,
  // WithIcon
  iconName,
  iconPlacement,
}: FormLabelProps) => {
  return (
    <>
      <WithIcon iconName={iconName} iconPlacement={iconPlacement}>
        <Text
          tag="label"
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
      <Spacer blockSize="2xs" />
    </>
  )
}

FormLabel.displayName = 'Form.Label'
