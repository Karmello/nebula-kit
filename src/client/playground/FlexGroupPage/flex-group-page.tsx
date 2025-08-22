import { PlaygroundConfigurator, PlaygroundScenario } from 'client/components'
import { Button, FlexGroup } from 'lib/components'

export const FlexGroupPage = () => {
  return (
    <PlaygroundConfigurator surfaceConfigProps={['size', 'disabled']}>
      <PlaygroundScenario title="Default" props>
        <FlexGroup flexContainerProps={{ overflowX: 'auto' }}>
          {Array.from({ length: 5 }, (v, k) => (
            <Button key={k}>Button {k + 1}</Button>
          ))}
        </FlexGroup>
      </PlaygroundScenario>
      <PlaygroundScenario title="Stacked on mobile" props>
        <FlexGroup flexContainerProps={{ stack: 'mobile' }}>
          {Array.from({ length: 5 }, (v, k) => (
            <Button key={k}>Button {k + 1}</Button>
          ))}
        </FlexGroup>
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
