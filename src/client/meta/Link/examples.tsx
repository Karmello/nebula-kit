import { ComponentMeta } from 'client/definitions'
import { Button, Link, LinkProps, Text } from 'lib/components'

const LINK_EXAMPLES_META: ComponentMeta<LinkProps>['examples'] = [
  {
    jsx: (
      <Link href="https://google.com">
        <Button color="blue" intent="primary">
          Click me
        </Button>
      </Link>
    ),
    description: 'Using Link to make Button navigate to the provided URL.',
  },
  {
    jsx: (
      <Link href="https://google.com" target="_blank">
        <Button iconName="external-link" color="blue" intent="primary" />
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
        <Button iconName="arrow-right" iconPlacement="right" color="blue" intent="primary">
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
  <Button iconName="arrow-right" iconPlacement="right" intent="info">
    Go to page
  </Button>
</Link>`,
    description:
      'When onClick handler is provided, Link automatically calls e.preventDefault(), allowing you to handle navigation manually.',
  },
  {
    jsx: (
      <Link href="https://google.com" target="_blank">
        <Text color="blue" intent="primary">
          Click me
        </Text>
      </Link>
    ),
    description: 'Using Link to make Text open an external page in a new tab.',
  },
]

export { LINK_EXAMPLES_META }
