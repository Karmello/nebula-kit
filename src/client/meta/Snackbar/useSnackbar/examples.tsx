import { ComponentMeta } from 'client/definitions'
import { SnackbarProps } from 'lib/components'

const USE_SNACKBAR_EXAMPLES_META: ComponentMeta<SnackbarProps>['examples'] = [
  {
    code: `const { show } = useSnackbar()

show({
  status: 'info',
  content: 'This is an informational message that highlights something worth your attention.',
})`,
    skip: true,
  },
]

export { USE_SNACKBAR_EXAMPLES_META }
