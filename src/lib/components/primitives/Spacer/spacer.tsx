import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'
import { ResponsiveProp, ScaleValue } from 'lib/definitions'

type SpacerAxis = 'block' | 'inline'

export type SpacerOwnProps = {
  /** Amount of space to insert, from the scale or a custom value */
  size?: ResponsiveProp<ScaleValue | string>
  /** Axis along which the space is applied: 'block' (vertical) or 'inline' (horizontal) */
  axis?: SpacerAxis
}

/** Spacer is a primitive for inserting fixed, responsive gaps between elements. It uses logical sizing (blockSize/inlineSize) so spacing adapts to writing modes, and renders as a purely presentational element (aria-hidden, role="presentation"). Use it for ad-hoc whitespace; for structured layouts prefer Stack, Flex or Flow. */
export const Spacer = ({ size = 2, axis = 'block', ...rest }: SpacerOwnProps) => {
  return (
    <Box
      role="presentation"
      aria-hidden="true"
      className={withPrefix('spacer')}
      blockSize={axis === 'block' ? size : undefined}
      inlineSize={axis === 'inline' ? size : undefined}
      style={{ display: axis === 'block' ? 'block' : 'inline-block' }}
      {...rest}
    />
  )
}
