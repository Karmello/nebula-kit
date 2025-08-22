import { PlaygroundConfigurator, PlaygroundScenario } from 'client/components'
import { Stats } from 'lib/components'

const DATA_1 = [
  { label: 'users', value: '10' },
  { label: 'posts', value: '585' },
  { label: 'comments', value: '1007' },
]

const DATA_2 = [
  {
    label: 'Team A',
    value: (43 / 100).toString(),
  },
  {
    label: 'Team B',
    value: (57 / 100).toString(),
  },
]

export const StatsPage = () => {
  return (
    <PlaygroundConfigurator>
      <PlaygroundScenario title="Default" props>
        <Stats data={DATA_1} />
      </PlaygroundScenario>
      <PlaygroundScenario title="Values with commas" props>
        <Stats data={DATA_1} commas />
      </PlaygroundScenario>
      <PlaygroundScenario title="As percentage" props>
        <Stats data={DATA_2} asPercentage />
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
