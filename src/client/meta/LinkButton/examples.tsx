import { ComponentMeta } from 'client/definitions'
import { LinkButton, LinkButtonProps } from 'lib/components/controls/LinkButton'

const LINK_BUTTON_EXAMPLES_META: ComponentMeta<LinkButtonProps>['examples'] = [
  {
    jsx: <LinkButton href="https://google.com" />,
    description:
      'By default, LinkButton renders IconButton with "arrow-right" icon and navigates to the URL provided through the href prop.',
  },
  {
    jsx: <LinkButton href="https://google.com" target="_blank" iconName="external-link" />,
    description: 'LinkButton that opens an external page in a new tab.',
  },
  {
    jsx: (
      <LinkButton
        href="https://google.com"
        onClick={() => {
          // call to your custom navigation method
        }}
        iconName="arrow-right"
      >
        Go to page
      </LinkButton>
    ),
    code: `<LinkButton
  href="/path/to/your/page"
  onClick={() => {
    // call to your custom navigation method
  }}
  iconName="arrow-right"
>
  Go to page
</LinkButton>`,
    description:
      'When onClick handler is provided, LinkButton automatically calls e.preventDefault(), allowing you to handle navigation manually.',
  },
]

export { LINK_BUTTON_EXAMPLES_META }
