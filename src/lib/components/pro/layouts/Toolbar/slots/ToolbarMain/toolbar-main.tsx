import classNames from 'classnames'

import { Grid, Resize } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { ToolbarMainProps } from './definitions'
import { useToolbarContext } from '../../ToolbarProvider'

export const ToolbarMain = ({ children, tagAttrs, tagRef }: ToolbarMainProps) => {
  const { switchAt, mainOpen, isSwitchAtHit } = useToolbarContext()

  return (
    <Grid.Item
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('toolbar-main'), tagAttrs?.className),
        style: {
          ...tagAttrs?.style,
          minInlineSize: 0,
        },
        inert: !isSwitchAtHit && !mainOpen,
      }}
      tagRef={tagRef}
      gridRow={{ base: '2 / 3', [String(switchAt)]: '1 / 2' }}
      gridColumn={{ base: '1 / -1', [String(switchAt)]: '3 / 4' }}
      alignSelf="center"
    >
      {!isSwitchAtHit ? (
        <Resize property="blockSize" visible={mainOpen}>
          {children}
        </Resize>
      ) : (
        children
      )}
    </Grid.Item>
  )
}

ToolbarMain.displayName = 'Toolbar.Main'
