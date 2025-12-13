import { Button, Segment } from 'lib/components'

import { usePlaygroundStore } from '../../store'

export const ViewSwitch = () => {
  const { view, setView } = usePlaygroundStore()

  return (
    <Segment>
      <Segment.Item>
        <Button
          size="sm"
          color="blue"
          intent={view === 'canvas' ? 'primary' : 'tertiary'}
          tagAttrs={{
            onClick: () => setView('canvas'),
          }}
        >
          Canvas view
        </Button>
      </Segment.Item>
      <Segment.Item>
        <Button
          size="sm"
          color="blue"
          intent={view === 'props' ? 'primary' : 'tertiary'}
          tagAttrs={{
            onClick: () => setView('props'),
          }}
        >
          Props view
        </Button>
      </Segment.Item>
    </Segment>
  )
}
