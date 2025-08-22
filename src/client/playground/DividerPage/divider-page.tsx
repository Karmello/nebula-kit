import { PlaygroundArea, PlaygroundConfigurator, PlaygroundScenario } from 'client/components'
import { Divider, DividerProps } from 'lib/components'
import { Sizes } from 'lib/enums'
import type { Size } from 'lib/types'

const DividerWrapper = ({ size }: DividerProps) => {
  return (
    <PlaygroundArea style={{ width: '100%' }}>
      <Divider size={size as Size} />
    </PlaygroundArea>
  )
}

DividerWrapper.displayName = 'Divider'

export const DividerPage = () => {
  return (
    <PlaygroundConfigurator scrollTopButton>
      {Object.keys(Sizes).map(size => (
        <PlaygroundScenario key={size} title={size} props>
          <DividerWrapper size={size as Size} />
        </PlaygroundScenario>
      ))}
    </PlaygroundConfigurator>
  )
}
