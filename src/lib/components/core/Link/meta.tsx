import { Button, IconButton, Image, Link, LinkProps, Text } from 'lib/index.core'
import { ComponentMeta } from 'client/definitions'

import { DEFAULT_LINK_TARGET, LINK_TARGETS } from './definitions'

export const LINK_META = {
  Link: {
    overview: {
      bundle: 'core',
      title: 'Wrapper that makes components navigable.',
      description:
        "Link makes its child navigable while ensuring valid and accessible HTML. By default, Link wraps its content with an anchor element. For Button and Text components, it instead replaces the underlying tag with <a> to avoid invalid nested interactions. When an onClick handler is provided, Link automatically prevents the browser's default navigation behavior, allowing you to handle routing or custom logic manually.",
      features: [
        'makes any wrapped content navigable via a single API',
        'automatically chooses the correct HTML structure under the hood',
        'supports href and target for standard link behavior',
      ],
      exposedTags: ['a'],
    },
    examples: [
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
          <Link href="https://google.com" target="_blank">
            <Image src="/imgs/town.webp" display="inline-block" inlineSize="300px" />
          </Link>
        ),
      },
    ],
    props: {
      children: {
        options: ['ReactNode'],
        isRequired: true,
        description: 'Single child component to be wrapped.',
      },
      href: {
        options: ['string'],
        isRequired: true,
        description: 'Destination URL.',
      },
      target: {
        options: LINK_TARGETS,
        defaultValue: DEFAULT_LINK_TARGET,
        description: 'Specifies where to open the linked document, following the standard HTML target attribute behavior.',
      },
      onClick: {
        options: ['e => void'],
        description: 'Callback fired when the component is clicked. Automatically prevents default navigation when provided.',
      },
    },
    changelog: {
      '0.4.0': ['changed behavior to wrap content by default and only clone when required to ensure valid HTML'],
      '0.2.3': ['released'],
    },
  } satisfies ComponentMeta<LinkProps>,
}
