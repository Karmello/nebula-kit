import { Paragraph } from 'lib/components'
import { Box } from 'lib-2/components'
import { PlaygroundConfigurator, PlaygroundScenario } from 'client/components'
import { EXAMPLE_LONG_TEXT } from 'client/constants'

export const BoxPage = () => {
  return (
    <PlaygroundConfigurator
      surfaceConfigProps={['padding', 'backgroundColor', 'disabled']}
      hasSurfaceInterface
    >
      <PlaygroundScenario title="Default" props>
        <Box>new Box</Box>
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
