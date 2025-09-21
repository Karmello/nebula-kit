import { ComponentMeta } from 'client/definitions'
import { MarkerListOwnProps, MarkerListStyle } from 'lib/components/elements/MarkerList/definitions'

const MARKER_LIST_PROPS_META: ComponentMeta<MarkerListOwnProps>['props'] = {
  listStyle: {
    options: MarkerListStyle as unknown as string[],
    defaultValue: MarkerListStyle[0],
    isRequired: false,
    isResponsive: false,
    description: 'Defines the style of the markers used for list items.',
  },
}

export { MARKER_LIST_PROPS_META }
