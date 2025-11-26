import { ComponentMeta } from 'client/definitions'
import { FocusTrapProps } from 'lib/components'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'

const FOCUS_TRAP_PROPS_META: ComponentMeta<FocusTrapProps>['props'] = {
  active: {
    options: ['boolean'],
    isRequired: true,
    description: 'Enables or disables the focus trap.',
  },
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
    description: 'Content whose focus is controlled by the trap.',
  },
  onClose: {
    options: ['() => void'],
    description: 'Called when the user attempts to exit the trapped region (ESC key or clicking outside).',
  },
  tagRef: {
    ...HTML_TAG_PROPS_META.tagRef,
    isRequired: true,
    description: 'Ref to the DOM element that the trap should contain focus within.',
  },
}

export { FOCUS_TRAP_PROPS_META }
