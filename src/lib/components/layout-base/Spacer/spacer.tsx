import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'
import { ResponsiveProp, ScaleValue } from 'lib/definitions'

export type SpacerOwnProps = {
  size?: ResponsiveProp<ScaleValue | string>
}

export const Spacer = ({ size = 2 }: SpacerOwnProps) => {
  return (
    <Box
      elemProps={{ className: withPrefix('spacer'), role: 'presentation', 'aria-hidden': 'true' }}
      variant="ghost"
      blockSize={size}
    />
  )
}
