import { PlaygroundScenario, PlaygroundArea, PlaygroundConfigurator } from 'client/components'
import { FieldLabels } from 'lib/components'

export const FieldLabelsPage = () => {
  return (
    <PlaygroundConfigurator surfaceConfigProps={['size', 'disabled']} hasSurfaceInterface>
      <PlaygroundScenario title="Main" props>
        <FieldLabels label="Label text">
          <PlaygroundArea style={{ height: '45px' }} />
        </FieldLabels>
      </PlaygroundScenario>
      <PlaygroundScenario title="Main and info" props>
        <FieldLabels label="Label text" info="Info text">
          <PlaygroundArea style={{ height: '45px' }} />
        </FieldLabels>
      </PlaygroundScenario>
      <PlaygroundScenario title="Error" props>
        <FieldLabels label="Label text" info="Info text" error="error message">
          <PlaygroundArea style={{ height: '45px' }} />
        </FieldLabels>
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
