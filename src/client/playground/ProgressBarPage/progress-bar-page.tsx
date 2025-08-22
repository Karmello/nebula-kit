import { PlaygroundScenario, PlaygroundConfigurator } from 'client/components'
import { ProgressBar } from 'lib/components'

export const ProgressBarPage = () => {
  return (
    <PlaygroundConfigurator surfaceConfigProps={['size', 'backgroundColor']} hasSurfaceInterface>
      <PlaygroundScenario title="Default" props>
        <ProgressBar value={5} total={100} />
      </PlaygroundScenario>
      <PlaygroundScenario title="Value as percentage" props>
        <ProgressBar value={50} total={100} valueAsPercentage />
      </PlaygroundScenario>
      <PlaygroundScenario title="With name" props>
        <ProgressBar name="Your score" value={100} total={100} valueAsPercentage />
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
