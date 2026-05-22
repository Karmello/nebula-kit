import { usePlaygroundStore } from 'client/store'
import { Flex } from 'lib/components'
import { BREAKPOINTS } from 'lib/definitions'

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
        <Flex flexDirection="column" alignItems="stretch" rowGap="sm">
          {BREAKPOINTS.map(bp => (
            <Flex.Item key={bp}>
              <PropValueControl bp={bp} />
            </Flex.Item>
          ))}
        </Flex>
      )}
    </>
  )
}
