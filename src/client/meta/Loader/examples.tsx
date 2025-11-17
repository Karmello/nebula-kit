import { ComponentMeta } from 'client/definitions'
import { Loader, LoaderProps } from 'lib/components'

const LOADER_EXAMPLES_META: ComponentMeta<LoaderProps>['examples'] = [
  {
    description: 'Default loader.',
    jsx: <Loader />,
  },
  {
    description: 'Custom loader.',
    jsx: <Loader size="lg" intent="secondary" color="blue" />,
  },
]

export { LOADER_EXAMPLES_META }
