import { ComponentMeta } from 'client/definitions'

import { type AppFrameProps } from '../../AppFrame/definitions'
import { GRID_PROPS_META } from '../../Grid/meta/props'

const APP_FRAME_PROPS_META: ComponentMeta<AppFrameProps>['props'] = {
  children: {
    ...GRID_PROPS_META.children,
    isRequired: true,
    options: ['AppFrame.Header', 'AppFrame.Main', 'AppFrame.Footer'],
    description: 'AppFrame.Footer is optional, the rest is required.',
  },
  tagAttrs: GRID_PROPS_META.tagAttrs,
  tagRef: GRID_PROPS_META.tagRef,
  stickyHeader: {
    options: ['boolean'],
    defaultValue: 'false',
    isRequired: false,
    isResponsive: false,
    description: 'Keeps the header fixed at the top of the viewport.',
  },
}

export { APP_FRAME_PROPS_META }
