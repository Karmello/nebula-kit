import { ComponentMeta } from 'client/definitions'
import { BreadcrumbProps, Breadcrumb } from 'lib/components'

const BREADCRUMB_EXAMPLES_META: ComponentMeta<BreadcrumbProps>['examples'] = [
  {
    jsx: <Breadcrumb items={['Page', 'Category', 'Item', 'Section']} />,
    description: 'Basic breadcrumb',
    sandBoxWithNoPadding: true,
  },
]

export { BREADCRUMB_EXAMPLES_META }
