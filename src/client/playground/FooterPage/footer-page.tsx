import { PlaygroundConfigurator, PlaygroundScenario } from 'client/components'
import { Footer, Paragraph } from 'lib/components'

export const FooterPage = () => {
  return (
    <PlaygroundConfigurator>
      <PlaygroundScenario props>
        <Footer
          sections={[
            {
              heading: 'Section 1',
              content: (
                <>
                  <Paragraph surfaceProps={{ size: 's' }}>This is section 1.</Paragraph>
                  <Paragraph surfaceProps={{ size: 's' }}>This is section 1.</Paragraph>
                  <Paragraph surfaceProps={{ size: 's' }}>This is section 1.</Paragraph>
                </>
              ),
            },
            {
              heading: 'Section 2',
              content: (
                <>
                  <Paragraph surfaceProps={{ size: 's' }}>This is section 2.</Paragraph>
                  <Paragraph surfaceProps={{ size: 's' }}>This is section 2.</Paragraph>
                  <Paragraph surfaceProps={{ size: 's' }}>This is section 2.</Paragraph>
                </>
              ),
            },
            {
              heading: 'Section 3',
              content: (
                <>
                  <Paragraph surfaceProps={{ size: 's' }}>This is section 3.</Paragraph>
                  <Paragraph surfaceProps={{ size: 's' }}>This is section 3.</Paragraph>
                  <Paragraph surfaceProps={{ size: 's' }}>This is section 3.</Paragraph>
                </>
              ),
            },
          ]}
        />
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
