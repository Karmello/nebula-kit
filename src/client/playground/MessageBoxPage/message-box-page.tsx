import { PlaygroundConfigurator, PlaygroundScenario } from 'client/components'
import { EXAMPLE_SHORT_TEXT, EXAMPLE_LONG_TEXT } from 'client/constants'
import { MessageBox, Paragraph } from 'lib/components'

export const MessageBoxPage = () => {
  return (
    <PlaygroundConfigurator surfaceConfigProps={['padding', 'size', 'backgroundColor']} hasSurfaceInterface>
      <PlaygroundScenario title="Default" props>
        <MessageBox headingText={EXAMPLE_SHORT_TEXT}>
          <Paragraph>{EXAMPLE_LONG_TEXT}</Paragraph>
        </MessageBox>
      </PlaygroundScenario>
      <PlaygroundScenario title="With icon" props>
        <MessageBox headingText={EXAMPLE_SHORT_TEXT} iconName="bell">
          <Paragraph>{EXAMPLE_LONG_TEXT}</Paragraph>
        </MessageBox>
      </PlaygroundScenario>
      <PlaygroundScenario title="Closable" props>
        <MessageBox headingText={EXAMPLE_SHORT_TEXT} iconName="bell" closable>
          <Paragraph>{EXAMPLE_LONG_TEXT}</Paragraph>
        </MessageBox>
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
