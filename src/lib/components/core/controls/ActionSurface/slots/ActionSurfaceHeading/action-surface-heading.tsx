import { Text } from 'lib/components'

import {
  ActionSurfaceHeadingProps,
  DEFAULT_ACTION_SURFACE_HEADING_BOLD,
  DEFAULT_ACTION_SURFACE_HEADING_TRUNCATE,
  DEFAULT_ACTION_SURFACE_HEADING_TYPOGRAPHY,
} from './definitions'

export const ActionSurfaceHeading = ({
  children,
  bold = DEFAULT_ACTION_SURFACE_HEADING_BOLD,
  clampLines,
  color,
  customSvgIcon,
  iconName,
  iconPlacement,
  intent,
  tagAttrs,
  tagRef,
  truncate = DEFAULT_ACTION_SURFACE_HEADING_TRUNCATE,
  typography = DEFAULT_ACTION_SURFACE_HEADING_TYPOGRAPHY,
}: ActionSurfaceHeadingProps) => {
  return (
    <Text
      tag="span"
      bold={bold}
      clampLines={clampLines}
      color={color}
      customSvgIcon={customSvgIcon}
      iconName={iconName}
      iconPlacement={iconPlacement}
      intent={intent}
      tagAttrs={tagAttrs}
      tagRef={tagRef}
      truncate={truncate}
      typography={typography}
    >
      {children}
    </Text>
  )
}

ActionSurfaceHeading.displayName = 'ActionSurface.Heading'
