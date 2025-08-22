import { Heading } from 'lib/components'
import { HEADING_EXAMPLE_TEXT } from 'client/constants'
import { PlaygroundConfigurator, PlaygroundScenario } from 'client/components'

export const HeadingPage = () => {
  return (
    <PlaygroundConfigurator surfaceConfigProps={['size', 'color', 'disabled']} hasSurfaceInterface>
      <PlaygroundScenario props>
        <Heading>{HEADING_EXAMPLE_TEXT}</Heading>
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
