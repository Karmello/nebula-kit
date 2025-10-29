import { ComponentMeta } from 'client/definitions'
import { Button, Link, LinkProps, Text } from 'lib/components'

const LINK_EXAMPLES_META: ComponentMeta<LinkProps>['examples'] = [
  {
    jsx: (
      <Link href="https://google.com">
        <Button intent="info">Click me</Button>
      </Link>
    ),
    description: 'Using Link to make Button navigate to the provided URL.',
  },
  {
    jsx: (
      <Link href="https://google.com" target="_blank">
        <Button iconName="external-link" intent="info" />
      </Link>
    ),
    description: 'Using Link to make Button open an external page in a new tab.',
  },
  {
    jsx: (
      <Link
        href="https://google.com"
        onClick={() => {
          // call to your custom navigation method
        }}
      >
        <Button iconName="arrow-right" iconPosition="right" intent="info">
          Go to page
        </Button>
      </Link>
    ),
    code: `<Link
  href="https://google.com"
  onClick={() => {
    // call to your custom navigation method
  }}
>
  <Button iconName="arrow-right" iconPosition="right" intent="info">
    Go to page
  </Button>
</Link>`,
    description:
      'When onClick handler is provided, Link automatically calls e.preventDefault(), allowing you to handle navigation manually.',
  },
  {
    jsx: (
      <Link href="https://google.com" target="_blank">
        <Text intent="info">Click me</Text>
      </Link>
    ),
    description: 'Using Link to make Text open an external page in a new tab.',
  },
]

export { LINK_EXAMPLES_META }
