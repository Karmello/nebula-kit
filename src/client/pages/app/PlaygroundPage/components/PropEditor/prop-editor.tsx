import { Flex } from 'lib/components'
import { BREAKPOINTS } from 'lib/definitions'

import { usePlaygroundStore } from '../../store'
import { PropValueControl } from './components'

export const PropEditor = () => {
  const { components, activeComponent } = usePlaygroundStore()

  if (!activeComponent || !components[activeComponent].activeProp) {
    return null
  }

  const { props, activeProp } = components[activeComponent]
  const prop = props[activeProp]

  return (
    <>
      {typeof prop.value !== 'object' ? (
        <PropValueControl />
      ) : (
        <Flex flexDirection="column" alignItems="stretch" rowGap="15px">
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
