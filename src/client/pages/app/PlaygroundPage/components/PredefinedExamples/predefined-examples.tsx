import { PLAYGROUND_PRESETS } from 'client/definitions'
import { Select } from 'lib/components'

import { usePlaygroundStore } from '../../store'

export const PredefinedExamples = () => {
  const components = usePlaygroundStore(state => state.components)
  const activeComponent = usePlaygroundStore(state => state.activeComponent)
  const setPropField = usePlaygroundStore(state => state.setPropField)

  if (!PLAYGROUND_PRESETS[activeComponent]) return null

  const allProps = components[activeComponent].props

  return (
    <Select
      size="xs"
      staticLabel={`${activeComponent} presets`}
      inlineSize="175px"
      value=""
      onChange={value => {
        Object.keys(allProps).forEach(propName => {
          setPropField(activeComponent, propName, 'value', allProps[propName].defaultValue)
        })

        const { props } = PLAYGROUND_PRESETS[activeComponent][Number(value)]

        Object.keys(props).forEach(propName => {
          setPropField(activeComponent, propName, 'value', props[propName as never])
        })
      }}
    >
      {PLAYGROUND_PRESETS[activeComponent].map(({ name }, index) => {
        return (
          <Select.Option key={index} value={String(index)}>
            {name}
          </Select.Option>
        )
      })}
    </Select>
  )
}
