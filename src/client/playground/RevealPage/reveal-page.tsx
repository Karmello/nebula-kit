import { PlaygroundConfigurator, PlaygroundScenario } from 'client/components'
import { EXAMPLE_LONG_TEXT } from 'client/constants'
import { Paragraph, Reveal } from 'lib/components'

export const RevealPage = () => {
  return (
    <PlaygroundConfigurator surfaceConfigProps={['size', 'disabled']} hasSurfaceInterface>
      <PlaygroundScenario props>
        <Reveal title="Title">
          <Paragraph>{EXAMPLE_LONG_TEXT}</Paragraph>
        </Reveal>
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
