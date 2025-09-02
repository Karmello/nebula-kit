import classNames from 'classnames'

import { Box, BoxProps } from 'lib/components'
import { Slot } from 'lib/definitions'
import { withPrefix } from 'lib/helpers'

import '../../app-frame.scss'

export const Main = ({
  elemProps,
  ...rest
}: Pick<
  BoxProps<'main'>,
  | 'children'
  | 'elemProps'
  | 'elemRef'
  | 'intent'
  | 'blockSize'
  | 'minBlockSize'
  | 'maxBlockSize'
  | 'padding'
  | 'paddingInline'
  | 'paddingBlock'
  | 'paddingTop'
  | 'paddingRight'
  | 'paddingBottom'
  | 'paddingLeft'
>) => {
  return (
    <Box
      borderRadius={0}
      {...rest}
      elem="main"
      elemProps={{
        ...elemProps,
        className: classNames(withPrefix('app-frame-main'), elemProps?.className),
      }}
    />
  )
}

Main.slotName = Slot.main
