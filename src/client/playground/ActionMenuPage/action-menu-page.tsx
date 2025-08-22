import { ActionMenu, PopoverOptionType } from 'lib/components'
import { PlaygroundScenario, PlaygroundConfigurator } from 'client/components'

const OPTIONS: PopoverOptionType[] = [
  { value: 'new', text: 'New', iconName: 'write' },
  { value: 'open', text: 'Open', iconName: 'share square' },
  { value: 'save', text: 'Save', iconName: 'check' },
  { value: 'close', text: 'Close', iconName: 'close' },
]

export const ActionMenuPage = () => {
  return (
    <PlaygroundConfigurator surfaceConfigProps={['size', 'disabled']} hasSurfaceInterface>
      <PlaygroundScenario title="Default" props>
        <ActionMenu options={OPTIONS} onChoose={() => null} />
      </PlaygroundScenario>
      <PlaygroundScenario title="Custom icon" props>
        <ActionMenu options={OPTIONS} onChoose={() => null} iconName="ellipsis horizontal" />
      </PlaygroundScenario>
      <PlaygroundScenario title="Label" props>
        <ActionMenu options={OPTIONS} onChoose={() => null} label="Menu" />
      </PlaygroundScenario>
      <PlaygroundScenario title="Right position" props>
        <ActionMenu
          options={OPTIONS}
          onChoose={() => null}
          label="Menu"
          surfaceProps={{ openDirection: 'right' }}
        />
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
