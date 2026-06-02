import { BOX_META } from 'lib/components/core/Box/meta'
import { CALLOUT_CONFIG, CALLOUT_STATUSES, CalloutStatus, DEFAULT_CALLOUT_STATUS } from 'lib/components/core/Callout'
import { Button } from 'lib/index.core'
import { SnackbarProps, useSnackbar } from 'lib/index.pro'
import { ComponentMeta } from 'client/definitions'

import {
  DEFAULT_SNACKBAR_AUTO_CLOSE_DELAY,
  DEFAULT_SNACKBAR_CLOSE_ON_OUTSIDE_CLICK,
  DEFAULT_SNACKBAR_INLINE_SIZE,
  DEFAULT_SNACKBAR_PLACEMENT,
  SNACKBAR_PLACEMENTS,
  SnackbarPlacement,
  UseSnackbarShowArgs,
} from './definitions'

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

export const SNACKBAR_META = {
  Snackbar: {
    overview: {
      bundle: 'pro',
      title: 'Floating message container for transient status notifications, anchored to the viewport.',
      features: [
        'displays short, non-intrusive status messages without affecting page layout',
        'appears above the UI and automatically hides after a configurable duration',
        'supports six viewport placement regions',
      ],
      guidelines: [
        'Snackbar must wrap the application root and should be rendered once at the top level',
        'managed by a provider and controlled via the "useSnackbar" hook',
      ],
      composedOf: ['Flex', 'Box', 'Callout', 'Button', 'Slide'],
      hooks: ['useSnackbar'],
    },
    props: {
      autoCloseDelay: {
        options: ['number'],
        defaultValue: String(DEFAULT_SNACKBAR_AUTO_CLOSE_DELAY),
        description: 'Time in milliseconds after which the snackbar closes automatically.',
      },
      children: {
        options: ['ReactElement'],
        isRequired: true,
        description: 'Root application content wrapped by the Snackbar provider instance.',
      },
      closeOnOutsideClick: {
        options: ['boolean'],
        defaultValue: String(DEFAULT_SNACKBAR_CLOSE_ON_OUTSIDE_CLICK),
        description: 'Closes the snackbar when the user clicks outside of its surface.',
      },
      inlineSize: {
        ...BOX_META.Box.props.inlineSize,
        defaultValue: String(DEFAULT_SNACKBAR_INLINE_SIZE),
        description: 'Logical inline size of the snackbar container.',
      },
      placement: {
        options: SNACKBAR_PLACEMENTS,
        defaultValue: String(DEFAULT_SNACKBAR_PLACEMENT),
        description: 'Defines the default viewport placement for snackbars.',
      },
    },
    examples: [
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
          <SnackbarWrapper
            status="info"
            content="This is an informational message that highlights something worth your attention."
          />
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
    ],
    changelog: {
      '0.2.3': ['released'],
    },
  } as ComponentMeta<SnackbarProps>,
  useSnackbar: {
    overview: {
      bundle: 'pro',
      name: 'useSnackbar.show()',
      title: 'Programmatic API for triggering snackbar messages.',
      guidelines: [
        'must be used within a Snackbar provider context',
        'if a Snackbar is already visible, additional calls are ignored',
      ],
    },
    examples: [
      {
        code: `const { show } = useSnackbar()

show({
  status: 'info',
  content: 'This is an informational message that highlights something worth your attention.',
})`,
        skip: true,
      },
    ],
    props: {
      content: {
        options: ['string'],
        isRequired: true,
        description: 'Message text content displayed in the snackbar.',
      },
      heading: {
        options: ['string'],
        description: 'Overrides default heading of the snackbar message.',
      },
      placement: {
        options: SNACKBAR_PLACEMENTS,
        defaultValue: DEFAULT_SNACKBAR_PLACEMENT,
        description: 'Overrides the default placement for the opened snackbar.',
      },
      status: {
        options: CALLOUT_STATUSES,
        defaultValue: DEFAULT_CALLOUT_STATUS,
        isRequired: true,
        description: 'Defines the message type of the snackbar.',
      },
    },
  } as ComponentMeta<UseSnackbarShowArgs>,
}
