import { ComponentMeta } from 'client/definitions'
import { Footer, FooterProps } from 'lib/components'

const FOOTER_EXAMPLES_META: ComponentMeta<FooterProps>['examples'] = [
  {
    jsx: (
      <Footer>
        <Footer.Section>Section 1</Footer.Section>
        <Footer.Section>Section 2</Footer.Section>
        <Footer.Section>Section 3</Footer.Section>
      </Footer>
    ),
    skip: true,
  },
  {
    description:
      'Displays three sections that stack on small screens and align horizontally from the medium breakpoint.',
    jsx: (
      <Footer switchAt="md" padding={15}>
        <Footer.Section>Section 1</Footer.Section>
        <Footer.Section>Section 2</Footer.Section>
        <Footer.Section>Section 3</Footer.Section>
      </Footer>
    ),
    sandBoxWithNoPadding: true,
  },
  {
    description: 'Displays three sections where the first one takes less space than the other two.',
    jsx: (
      <Footer switchAt="md" padding={15}>
        <Footer.Section flex={1}>Section 1</Footer.Section>
        <Footer.Section flex={3}>Section 2</Footer.Section>
        <Footer.Section flex={3}>Section 3</Footer.Section>
      </Footer>
    ),
    sandBoxWithNoPadding: true,
  },
]

export { FOOTER_EXAMPLES_META }
