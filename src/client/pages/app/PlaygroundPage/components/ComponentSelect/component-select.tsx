import META from 'client/meta'
import { Select, Spacer, Text } from 'lib/components'

import { usePlaygroundStore } from '../../use-playground-store'

export const ComponentSelect = () => {
  const { componentName, setComponentName } = usePlaygroundStore()

  const componentNames = Object.keys(META)

  return (
    <>
      <Text>Component</Text>
      <Spacer blockSize="3px" />
      <Select
        value={componentName}
        onChange={setComponentName}
        inlineSize="225px"
        scrollAlign="center"
        visibleItemsCount={11}
      >
        {componentNames.map(name => (
          <Select.Option value={name}>{name}</Select.Option>
        ))}
      </Select>
    </>
  )
}
