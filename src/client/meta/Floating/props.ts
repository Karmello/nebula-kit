import { ComponentMeta } from 'client/definitions'
import { FloatingProps } from 'lib/components'
import {
  DEFAULT_FLOATING_OFFSET,
  DEFAULT_FLOATING_PLACEMENT,
  DEFAULT_FLOATING_VIEWPORT_PADDING,
  FLOATING_PLACEMENTS,
} from 'lib/components/pro/overlays/Floating'

const FLOATING_PROPS_META: ComponentMeta<FloatingProps>['props'] = {
  anchorRef: {
    options: ['RefObject'],
    isRequired: true,
    description: 'Reference to an element the floating logic resolves placement relative to.',
  },
  children: {
    options: ['floating => ReactNode'],
    isRequired: true,
    description:
      'Render function that receives the resolved floating positioning data and returns the content.',
  },
  disabled: {
    options: ['boolean'],
    description:
      'Disables floating behavior and passes the placement through without applying positioning logic.',
  },
  offset: {
    options: ['CSS'],
    defaultValue: DEFAULT_FLOATING_OFFSET,
    description:
      'Defines the distance between the anchor element and the floating content along the placement axis.',
  },
  placement: {
    options: FLOATING_PLACEMENTS as never,
    defaultValue: DEFAULT_FLOATING_PLACEMENT,
    description: 'Specifies the preferred placement of the floating content relative to the anchor.',
  },
  viewportPadding: {
    options: ['CSS'],
    defaultValue: DEFAULT_FLOATING_VIEWPORT_PADDING,
    description:
      'Defines the minimum distance the floating content must keep from the viewport edges when resolving available space.',
  },
}

export { FLOATING_PROPS_META }
