import { Button, IconButton, Image, Link, Text } from 'lib/index.core'
import { type Example } from 'client/definitions'

export const LINK_EXAMPLES: Example[] = [
  {
    jsx: (
      <Link href="https://google.com">
        <Button intent="primary">Click me</Button>
      </Link>
    ),
    description: 'Using Link to make Button navigate to the provided URL.',
  },
  {
    jsx: (
      <Link href="https://google.com" target="_blank">
        <IconButton iconName="external-link" intent="primary" />
      </Link>
    ),
    description: 'Using Link to make IconButton open an external page in a new tab.',
  },
  {
    jsx: (
      <Link
        href="https://google.com"
        onClick={() => {
          // call to your custom navigation method
        }}
      >
        <Button iconName="arrow-right" iconPlacement="right" intent="primary">
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
        <Text intent="primary">Click me</Text>
      </Link>
    ),
    description: 'Using Link to make Text open an external page in a new tab.',
  },
  {
    description: 'Using Link together with Image.',
    jsx: (
      <Link href="https://google.com" target="_blank" composeMode="wrap">
        <Image src="/imgs/town.webp" display="inline-block" inlineSize="300px" />
      </Link>
    ),
  },
]
