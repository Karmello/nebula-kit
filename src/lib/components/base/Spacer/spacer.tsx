import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'
import { ResponsiveProp, ScaleValue } from 'lib/definitions'

type SpacerAxis = 'block' | 'inline'

export type SpacerOwnProps = {
  size?: ResponsiveProp<ScaleValue | string>
  axis?: SpacerAxis
}

export const Spacer = ({ size = 2, axis = 'block', ...rest }: SpacerOwnProps) => {
  return (
    <Box
      role="presentation"
      aria-hidden="true"
      className={withPrefix('spacer')}
      variant="ghost"
      blockSize={axis === 'block' ? size : undefined}
      inlineSize={axis === 'inline' ? size : undefined}
      style={{ display: axis === 'block' ? 'block' : 'inline-block' }}
      {...rest}
    />
  )
}
