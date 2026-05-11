import { Box } from 'lib/components'

import { ActionSurfaceProps, ActionSurfaceTag } from './definitions'

export const ActionSurface = <T extends ActionSurfaceTag = 'button'>({
  // HtmlTag
  tag,
  tagAttrs,
  tagRef,
  // own
  title,
}: ActionSurfaceProps<T>) => {
  return <Box tag={tag} tagAttrs={tagAttrs} tagRef={tagRef} />
}

ActionSurface.displayName = 'ActionSurface'
