import { AppFrame } from 'lib/components/core/AppFrame'
import { type DocExample } from 'client/definitions'

export const APP_FRAME_EXAMPLES: DocExample[] = [
  {
    description: 'Application view composed of header, main area and footer.',
    jsx: (
      <AppFrame>
        <AppFrame.Header>Header</AppFrame.Header>
        <AppFrame.Main>Main</AppFrame.Main>
        <AppFrame.Footer>
          <AppFrame.FooterSection>Footer section 1</AppFrame.FooterSection>
          <AppFrame.FooterSection>Footer section 2</AppFrame.FooterSection>
          <AppFrame.FooterSection>Footer section 3</AppFrame.FooterSection>
        </AppFrame.Footer>
      </AppFrame>
    ),
    sandBoxWithNoPadding: true,
  },
]
