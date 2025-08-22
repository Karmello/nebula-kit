import { Chip } from 'lib/components'
import { PlaygroundScenario, PlaygroundConfigurator } from 'client/components'

export const ChipPage = () => {
  return (
    <PlaygroundConfigurator surfaceConfigProps={['size', 'backgroundColor']} hasSurfaceInterface>
      <PlaygroundScenario title="Default" props>
        <Chip>Chip</Chip>
      </PlaygroundScenario>
      <PlaygroundScenario title="With an icon" props>
        <Chip iconProps={{ name: 'thumbs up' }}>Chip</Chip>
      </PlaygroundScenario>
      <PlaygroundScenario title="With a clickable icon" props>
        <Chip
          iconProps={{
            name: 'close',
            nativeElemProps: {
              onClick: () => {
                console.log('Chip close icon clicked')
                return
              },
            },
          }}
        >
          Chip
        </Chip>
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
