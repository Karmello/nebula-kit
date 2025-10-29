import { ComponentMeta } from 'client/definitions'
import { ButtonLink, ButtonLinkProps } from 'lib/components'

const BUTTON_LINK_EXAMPLES_META: ComponentMeta<ButtonLinkProps>['examples'] = [
  {
    jsx: <ButtonLink href="https://google.com">Click me</ButtonLink>,
    description: 'ButtonLink that navigates to the URL provided through the href prop.',
  },
  {
    jsx: <ButtonLink href="https://google.com" target="_blank" iconName="external-link" />,
    description: 'ButtonLink in a form of icon that opens an external page in a new tab.',
  },
  {
    jsx: (
      <ButtonLink
        iconName="arrow-right"
        iconPosition="right"
        href="https://google.com"
        onClick={() => {
          // call to your custom navigation method
        }}
      >
        Go to page
      </ButtonLink>
    ),
    code: `<ButtonLink
  iconName="arrow-right"
  iconPosition="right"
  href="/path/to/your/page"
  onClick={() => {
    // call to your custom navigation method
  }}
>
  Go to page
</ButtonLink>`,
    description:
      'When onClick handler is provided, ButtonLink automatically calls e.preventDefault(), allowing you to handle navigation manually.',
  },
]

export { BUTTON_LINK_EXAMPLES_META }
