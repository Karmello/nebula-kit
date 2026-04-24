import { Select } from 'lib/components'

import { PRESETS } from './definitions'
import { usePlaygroundStore } from '../../store'

export const PredefinedExamples = () => {
  const components = usePlaygroundStore(state => state.components)
  const activeComponent = usePlaygroundStore(state => state.activeComponent)
  const setPropField = usePlaygroundStore(state => state.setPropField)

  if (!PRESETS[activeComponent]) return null

  const allProps = components[activeComponent].props

  return (
    <Select
      size="xs"
      staticLabel="Preset"
      inlineSize="100px"
      value=""
      onChange={value => {
        Object.keys(allProps).forEach(propName => {
          setPropField(activeComponent, propName, 'value', allProps[propName].defaultValue)
        })

        if (value === 'reset') return

        const props = PRESETS[activeComponent][Number(value)]

        Object.keys(props).forEach(propName => {
          setPropField(activeComponent, propName, 'value', props[propName as never])
        })
      }}
    >
      {PRESETS[activeComponent].map((_, index) => {
        return (
          <Select.Option key={index} value={String(index)}>
            Example {index + 1}
          </Select.Option>
        )
      })}
      <Select.Option value="reset">Reset</Select.Option>
    </Select>
  )
}
