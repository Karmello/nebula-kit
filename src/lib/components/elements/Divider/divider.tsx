import { Box, BoxOwnProps } from 'lib/components'
import { scale, withPrefix } from 'lib/helpers'
import { ScaleValue } from 'lib/definitions'

import './divider.scss'

export type DividerOwnProps = {
  intent?: BoxOwnProps['intent']
  thickness?: ScaleValue | string
}

export const Divider = ({ intent = 'tertiary', thickness = 1 }: DividerOwnProps) => {
  return (
    <Box
      elem="hr"
      elemProps={{
        className: withPrefix('divider'),
      }}
      variant="solid"
      intent={intent}
      blockSize={scale(thickness)}
    />
  )
}
