import { Box, NEB_LENGTH } from 'lib/components'
import { BREAKPOINTS } from 'lib/constants'
import { usePlaygroundStore } from 'client/store'

import { PropValueControl } from './components'

export const PropEditor = () => {
  const components = usePlaygroundStore(state => state.components)
  const activeComponent = usePlaygroundStore(state => state.activeComponent)

  const prop = components[activeComponent].props[components[activeComponent].activeProp]

  if (!prop) return null

  return (
    <>
      {typeof prop.value !== 'object' ? (
        <PropValueControl />
      ) : (
        <Box display="flex" flexDirection="column" alignItems="stretch" rowGap={NEB_LENGTH.px_016}>
          {BREAKPOINTS.map(bp => (
            <Box key={bp}>
              <PropValueControl bp={bp} />
            </Box>
          ))}
        </Box>
      )}
    </>
  )
}
