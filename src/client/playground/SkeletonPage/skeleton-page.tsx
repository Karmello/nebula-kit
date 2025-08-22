import { Skeleton } from 'lib/components'
import { PlaygroundConfigurator, PlaygroundScenario } from 'client/components'

export const SkeletonPage = () => {
  return (
    <PlaygroundConfigurator surfaceConfigProps={['size']}>
      <PlaygroundScenario title="Default" props>
        <Skeleton />
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
