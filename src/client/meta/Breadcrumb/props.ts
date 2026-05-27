import { ComponentMeta } from 'client/definitions'
import { BreadcrumbProps } from 'lib/components'
import { BREADCRUMB_TAGS, DEFAULT_BREADCRUMB_INTENT } from 'lib/components/pro/Breadcrumb'
import { CONTROL_SIZES, DEFAULT_CONTROL_SIZE } from 'lib/definitions'

// import { DROPDOWN_LIST_PROPS_META } from '../DropdownList/props'
import { BOX_PROPS_META } from '../Box/props'

const BREADCRUMB_PROPS_META: ComponentMeta<BreadcrumbProps>['props'] = {
  // color: DROPDOWN_LIST_PROPS_META.color,
  // defaultPath: {
  //   options: ['string[]'],
  //   description: 'Initial breadcrumb path applied once to seed internal state when the component is uncontrolled.',
  // },
  // intent: {
  //   ...DROPDOWN_LIST_PROPS_META.intent,
  //   defaultValue: String(DEFAULT_BREADCRUMB_INTENT),
  //   description: 'Color tone applied to the list.',
  // },
  // onChange: {
  //   options: ['(path: string[]) => void'],
  //   description: 'Called when the user selects a value, receiving the updated breadcrumb path.',
  // },
  // path: {
  //   options: ['string[]'],
  //   description: 'Controls the active breadcrumb path, enabling fully controlled behavior.',
  // },
  // size: {
  //   options: CONTROL_SIZES,
  //   defaultValue: DEFAULT_CONTROL_SIZE,
  // },
  // tag: {
  //   ...BOX_PROPS_META.tag,
  //   options: BREADCRUMB_TAGS as never,
  // },
  // tagAttrs: BOX_PROPS_META.tagAttrs,
  // tagRef: BOX_PROPS_META.tagRef,
  // tree: {
  //   options: ['object[]'],
  //   isRequired: true,
  //   description: 'Hierarchical data source that defines the breadcrumb structure and available selections.',
  // },
}

export { BREADCRUMB_PROPS_META }
