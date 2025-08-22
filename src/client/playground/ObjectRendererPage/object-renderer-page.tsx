import { PlaygroundConfigurator, PlaygroundScenario } from 'client/components'
import { ObjectRenderer } from 'lib/components'

import { EXAMPLE_OBJECT_DATA } from 'client/constants'

export const ObjectRendererPage = () => {
  return (
    <PlaygroundConfigurator scrollTopButton>
      <PlaygroundScenario title="An empty object" props>
        <ObjectRenderer data={{}} />
      </PlaygroundScenario>
      <PlaygroundScenario title="Complex data" props>
        <ObjectRenderer data={EXAMPLE_OBJECT_DATA} />
      </PlaygroundScenario>
      <PlaygroundScenario title="Double quotes" props>
        <ObjectRenderer data={EXAMPLE_OBJECT_DATA} quotes="double" />
      </PlaygroundScenario>
      <PlaygroundScenario title="Larger tab size" props>
        <ObjectRenderer data={EXAMPLE_OBJECT_DATA} tabSize="l" />
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
