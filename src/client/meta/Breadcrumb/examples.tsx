import { ComponentMeta } from 'client/definitions'
import { BreadcrumbProps, Breadcrumb } from 'lib/components'

const tree = [
  {
    label: 'Electronics',
    value: 'electronics',
    children: [
      {
        label: 'Computers',
        value: 'computers',
        children: [
          { label: 'Laptops', value: 'laptops' },
          { label: 'Desktops', value: 'desktops' },
        ],
      },
      {
        label: 'Phones',
        value: 'phones',
        children: [
          { label: 'Smartphones', value: 'smartphones' },
          { label: 'Accessories', value: 'phone-accessories' },
        ],
      },
    ],
  },
  {
    label: 'Home & Living',
    value: 'home',
    children: [
      {
        label: 'Furniture',
        value: 'furniture',
        children: [
          { label: 'Sofas', value: 'sofas' },
          { label: 'Tables', value: 'tables' },
        ],
      },
      {
        label: 'Kitchen',
        value: 'kitchen',
        children: [
          { label: 'Cookware', value: 'cookware' },
          { label: 'Appliances', value: 'appliances' },
        ],
      },
    ],
  },
]

const BREADCRUMB_EXAMPLES_META: ComponentMeta<BreadcrumbProps>['examples'] = [
  {
    jsx: <Breadcrumb tree={tree} />,
    description:
      'Breadcrumb in uncontrolled mode, where selection state is managed internally and navigation levels are revealed progressively based on user interaction.',
    sandBoxWithNoPadding: true,
  },
]

export { BREADCRUMB_EXAMPLES_META }
