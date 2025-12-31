import { ComponentMeta } from 'client/definitions'
import { BreadcrumbProps, Breadcrumb } from 'lib/components'

const BREADCRUMB_EXAMPLES_META: ComponentMeta<BreadcrumbProps>['examples'] = [
  {
    jsx: (
      <Breadcrumb
        tree={[
          {
            value: 'page',
            label: 'Page',
            children: [
              {
                value: 'category',
                label: 'Category',
                children: [
                  {
                    value: 'item',
                    label: 'Item',
                    children: [
                      { value: 'overview', label: 'Overview' },
                      { value: 'props', label: 'Props' },
                    ],
                  },
                ],
              },
            ],
          },
        ]}
      />
    ),
    description:
      'Breadcrumb in uncontrolled mode, where selection state is managed internally and navigation levels are revealed progressively based on user interaction.',
    sandBoxWithNoPadding: true,
  },
]

export { BREADCRUMB_EXAMPLES_META }
