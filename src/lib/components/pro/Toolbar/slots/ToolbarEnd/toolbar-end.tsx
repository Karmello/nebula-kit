import { Grid } from 'lib/index.core'
import { ToolbarEndProps } from 'lib/index.pro'

export const ToolbarEnd = ({ children, tagAttrs, tagRef }: ToolbarEndProps) => {
  return (
    <Grid.Item
      tagAttrs={{
        ...tagAttrs,
        style: {
          minInlineSize: 0,
          ...tagAttrs?.style,
        },
      }}
      tagRef={tagRef}
      gridRow="1 / 2"
      gridColumn="4 / 5"
      alignSelf="center"
    >
      {children}
    </Grid.Item>
  )
}

ToolbarEnd.displayName = 'Toolbar.End'
