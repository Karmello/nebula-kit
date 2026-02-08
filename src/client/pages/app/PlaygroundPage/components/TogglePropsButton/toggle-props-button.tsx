import { Button } from 'lib/components'

import { usePlaygroundStore } from '../../store'

export const TogglePropsButton = () => {
  const displayProps = usePlaygroundStore(state => state.displayProps)
  const setDisplayProps = usePlaygroundStore(state => state.setDisplayProps)

  return (
    <Button
      size="xs"
      tagAttrs={{
        onClick: () => setDisplayProps(!displayProps),
      }}
    >
      {displayProps ? 'Props table: ON' : 'Props table: OFF'}
    </Button>
  )
}
