import { Button, Segment } from 'lib/components'

import { usePlaygroundStore } from '../../store'

export const PropsViewSwitch = () => {
  const { view, activeComponent, getActiveComponentSlotNames, getActiveSlot, setActiveSlot } =
    usePlaygroundStore()
  if (view === 'canvas' || !activeComponent) return null

  const slotNames = getActiveComponentSlotNames()
  if (!slotNames.length) return null

  const activeSlot = getActiveSlot()

  return (
    <Segment>
      <Segment.Item>
        <Button
          size="sm"
          color="blue"
          intent={activeSlot === 'root' ? 'primary' : 'tertiary'}
          tagAttrs={{
            onClick: () => setActiveSlot('root'),
          }}
        >
          Root
        </Button>
      </Segment.Item>
      {slotNames.map(name => (
        <Segment.Item key={name}>
          <Button
            size="sm"
            color="blue"
            intent={activeSlot === name ? 'primary' : 'tertiary'}
            tagAttrs={{
              onClick: () => setActiveSlot(name),
            }}
          >
            {name.split('.')[1]}
          </Button>
        </Segment.Item>
      ))}
    </Segment>
  )
}
