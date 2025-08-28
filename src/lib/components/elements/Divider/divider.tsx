import { Box, BoxOwnProps } from 'lib/components'
import { scale, withPrefix } from 'lib/helpers'
import { ScaleValue } from 'lib/definitions'

export type DividerOwnProps = {
  intent?: BoxOwnProps['intent']
  thickness?: ScaleValue | string
}

export const Divider = ({ intent = 'tertiary', thickness = 1 }: DividerOwnProps) => {
  return (
    <Box
      className={withPrefix('divider')}
      as="hr"
      variant="solid"
      intent={intent}
      inlineSize="100%"
      blockSize={scale(thickness)}
    />
  )
}
