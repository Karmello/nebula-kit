import { ActionSurface as ActionSurfaceBase } from './action-surface'

import { ActionSurfaceHeading, ActionSurfaceDescription } from './slots'

export const ActionSurface = Object.assign(ActionSurfaceBase, {
  Heading: ActionSurfaceHeading,
  Description: ActionSurfaceDescription,
})

export * from './definitions'
export * from './slots'
