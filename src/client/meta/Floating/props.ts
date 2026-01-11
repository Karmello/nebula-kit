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
    options: ['ReactNode'],
    isRequired: true,
    description:
      'Rendered floating content. Floating does not render any DOM of its own and only provides placement resolution for its children.',
  },
  offset: {
    options: ['CSS'],
    description:
      'Defines the distance between the anchor element and the floating content along the placement axis.',
  },
  onResolve: {
    options: ['({ placement, blockSize? }) => void'],
    description:
      'Callback invoked when Floating resolves placement or layout constraints. Receives the resolved placement and optional block size limits derived from available space.',
  },
  placement: {
    options: PORTAL_PLACEMENTS as never,
    description: 'Specifies the preferred placement of the floating content relative to the anchor.',
  },
  floatingBlockSize: {
    options: ['CSS'],
    description:
      'Expected block size of the floating content. Used to compute available vertical space and expose layout limits (such as blockSize) without enforcing the actual rendered size.',
  },
  floatingInlineSize: {
    options: ['CSS'],
    description:
      'Expected inline size of the floating content. Used to evaluate horizontal overflow and adjust alignment when resolving placement.',
  },
  viewportPadding: {
    options: ['CSS'],
    description:
      'Defines the minimum distance the floating content must keep from the viewport edges when resolving available space.',
  },
}

export { FLOATING_PROPS_META }
