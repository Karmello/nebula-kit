import { ComponentMeta } from 'client/definitions'
import { FloatingProps } from 'lib/components'
import { PORTAL_PLACEMENTS } from 'lib/components/core/utility/Portal'

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
  offset: {
    options: ['CSS'],
    description:
      'Defines the distance between the anchor element and the floating content along the placement axis.',
  },
  onResolve: {
    options: [],
  },
  placement: {
    options: PORTAL_PLACEMENTS as never,
    description: 'Specifies the preferred placement of the floating content relative to the anchor.',
  },
  floatingBlockSize: {
    options: [],
  },
  floatingInlineSize: {
    options: [],
  },
  viewportPadding: {
    options: ['CSS'],
    description:
      'Defines the minimum distance the floating content must keep from the viewport edges when resolving available space.',
  },
}

export { FLOATING_PROPS_META }
