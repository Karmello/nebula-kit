import { ComponentMeta } from 'client/definitions'
import { Button, SnackbarProps, useSnackbar } from 'lib/components'
import { CALLOUT_CONFIG, CalloutStatus } from 'lib/components/core/feedback/Callout'
import { SnackbarPlacement } from 'lib/components/pro/feedback/Snackbar'

const SnackbarWrapper = ({
  status,
  content,
  heading,
  placement,
}: {
  status: CalloutStatus
  content: string
  heading?: string
  placement?: SnackbarPlacement
}) => {
  const { show } = useSnackbar()

  return (
    <Button
      tagAttrs={{
        onClick: () => {
          show({ status, content, heading, placement })
        },
      }}
      color={CALLOUT_CONFIG[status].color}
      intent="primary"
    >
      Open snackbar
    </Button>
  )
}

const SNACKBAR_EXAMPLES_META: ComponentMeta<SnackbarProps>['examples'] = [
  {
    code: `<Snackbar>
  <App />
</Snackbar>
`,
    skip: true,
  },
  {
    description: 'Informational snackbar at the bottom right (default).',
    jsx: (
      <SnackbarWrapper status="info" content="This is an informational message that highlights something worth your attention." />
    ),
    code: `const { show } = useSnackbar()
    \r
show({
  status: 'info',
  content: 'This is an informational message that highlights something worth your attention.',
})
`,
  },
  {
    description: 'Informational snackbar with custom heading at the bottom center.',
    jsx: (
      <SnackbarWrapper
        status="info"
        content="This is an informational message that highlights something worth your attention."
        heading="Important info"
        placement="bottom-center"
      />
    ),
    code: `const { show } = useSnackbar()
    \r
show({
  status: 'info',
  content: 'This is an informational message that highlights something worth your attention.',
  heading: 'Important info',
  placement: 'bottom-center'
})
`,
  },
  {
    description: 'Confirmational snackbar at the bottom left.',
    jsx: (
      <SnackbarWrapper
        status="success"
        content="This is a confirmation message that lets you know everything worked as expected."
        placement="bottom-left"
      />
    ),
    code: `const { show } = useSnackbar()
    \r
show({
  status: 'success',
  content: 'This is a confirmation message that lets you know everything worked as expected.',
  placement: 'bottom-center'
})
`,
  },
  {
    description: 'Cautionary snackbar at the top left.',
    jsx: (
      <SnackbarWrapper
        status="warning"
        content="This is a cautionary message that signals something you may want to review or adjust."
        placement="top-left"
      />
    ),
    code: `const { show } = useSnackbar()
    \r
show({
  status: 'warning',
  content: 'This is a cautionary message that signals something you may want to review or adjust.',
  placement: 'top-left'
})
`,
  },
  {
    description: 'Critical snackbar at the top center.',
    jsx: (
      <SnackbarWrapper
        status="error"
        content="This is an alert message that indicates an issue that needs your immediate attention."
        placement="top-center"
      />
    ),
    code: `const { show } = useSnackbar()
    \r
show({
  status: 'error',
  content: 'This is an alert message that indicates an issue that needs your immediate attention.',
  placement: 'top-center'
})
`,
  },
  {
    description: 'Critical snackbar with custom heading at the top right.',
    jsx: (
      <SnackbarWrapper
        status="error"
        content="This is an alert message that indicates an issue that needs your immediate attention."
        heading="Error !"
        placement="top-right"
      />
    ),
    code: `const { show } = useSnackbar()
    \r
show({
  status: 'error',
  content: 'This is an alert message that indicates an issue that needs your immediate attention.',
  heading: 'Error !',
  placement: 'top-right'
})
`,
  },
]

export { SNACKBAR_EXAMPLES_META }
