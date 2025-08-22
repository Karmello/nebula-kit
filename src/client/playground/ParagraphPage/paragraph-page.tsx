import { Paragraph } from 'lib/components'
import { PARAGRAPH_EXAMPLE_TEXT } from 'client/constants'
import { PlaygroundConfigurator, PlaygroundScenario } from 'client/components'

export const ParagraphPage = () => {
  return (
    <PlaygroundConfigurator surfaceConfigProps={['size', 'color', 'disabled']} hasSurfaceInterface>
      <PlaygroundScenario props>
        <Paragraph>{PARAGRAPH_EXAMPLE_TEXT}</Paragraph>
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
