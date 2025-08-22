import { PlaygroundConfigurator, PlaygroundScenario } from 'client/components'
import { LABEL_EXAMPLE_TEXT } from 'client/constants'
import { Label } from 'lib/components'

export const LabelPage = () => {
  return (
    <PlaygroundConfigurator surfaceConfigProps={['size', 'color', 'disabled']} hasSurfaceInterface>
      <PlaygroundScenario props>
        <Label>{LABEL_EXAMPLE_TEXT}</Label>
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
