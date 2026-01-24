import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import './ortho.scss'

type Placement = 'top' | 'right' | 'bottom' | 'left'

const Dot = () => {
  return <Box tagAttrs={{ className: withPrefix('dot') }} />
}

const ArrowTriangle = ({ placement }: { placement: Placement }) => {
  return <Box tagAttrs={{ className: classNames(withPrefix('arrow-triangle'), placement) }} />
}

const ArrowLine = ({ placement }: { placement: Placement }) => {
  return <Box tagAttrs={{ className: classNames(withPrefix('arrow-line'), placement) }} />
}

export const Ortho = () => {
  return (
    <Box tagAttrs={{ className: withPrefix('ortho') }}>
      <Box tagAttrs={{ className: withPrefix('ortho-inner') }}>
        <Dot />
        <ArrowTriangle placement="top" />
        <ArrowTriangle placement="right" />
        <ArrowTriangle placement="bottom" />
        <ArrowTriangle placement="left" />
        <ArrowLine placement="top" />
        <ArrowLine placement="right" />
        <ArrowLine placement="bottom" />
        <ArrowLine placement="left" />
      </Box>
    </Box>
  )
}
