import { Text } from 'lib/components'

import {
  ActionSurfaceDescriptionProps,
  DEFAULT_ACTION_SURFACE_DESCRIPTION_CLAMP_LINES,
  DEFAULT_ACTION_SURFACE_DESCRIPTION_INTENT,
  DEFAULT_ACTION_SURFACE_DESCRIPTION_TYPOGRAPHY,
} from './definitions'

export const ActionSurfaceDescription = ({
  children,
  clampLines = DEFAULT_ACTION_SURFACE_DESCRIPTION_CLAMP_LINES,
  color,
  intent = DEFAULT_ACTION_SURFACE_DESCRIPTION_INTENT,
  italic,
  tagAttrs,
  tagRef,
  truncate,
  typography = DEFAULT_ACTION_SURFACE_DESCRIPTION_TYPOGRAPHY,
}: ActionSurfaceDescriptionProps) => {
  return (
    <Text
      tag="span"
      clampLines={clampLines}
      color={color}
      intent={intent}
      italic={italic}
      tagAttrs={tagAttrs}
      tagRef={tagRef}
      truncate={truncate}
      typography={typography}
    >
      {children}
    </Text>
  )
}

ActionSurfaceDescription.displayName = 'ActionSurface.Description'
