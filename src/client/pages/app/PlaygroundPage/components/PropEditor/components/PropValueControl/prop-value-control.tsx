import { sentenceCase } from 'change-case'

import { DOCS_CSS_LABEL, PLAYGROUND_ARRAY_DATA_MAP, PLAYGROUND_CONTROLS_MAP, PlaygroundProp } from 'client/definitions'
import { usePlaygroundStore } from 'client/store'
import { Input, Button, Text, Spacer, Select } from 'lib/components'
import { Breakpoint } from 'lib/definitions'

export const PropValueControl = ({ bp }: { bp?: Breakpoint }) => {
  const components = usePlaygroundStore(state => state.components)
  const activeComponent = usePlaygroundStore(state => state.activeComponent)
  const setPropField = usePlaygroundStore(state => state.setPropField)

  const activeProp = components[activeComponent].activeProp
  const prop = components[activeComponent].props[activeProp]

  let value = ''

  if (prop.value !== undefined) {
    if (typeof prop.value === 'object') {
      if (prop.value[bp] !== undefined) {
        value = String(prop.value[bp])
      }
    } else {
      value = String(prop.value)
    }
  }

  const onChange = (value: string) => {
    if (typeof prop.value === 'object') {
      const newValue = { ...prop.value }
      if (value !== '') {
        newValue[bp] = value
      } else {
        delete newValue[bp]
      }
      setPropField(activeComponent, activeProp, 'value', newValue)
    } else {
      let newValue
      if (value === 'true') newValue = true
      else if (value === 'false') newValue = false
      else if (value !== '' && !Number.isNaN(Number(value))) newValue = Number(value)
      else newValue = value
      setPropField(activeComponent, activeProp, 'value', newValue !== '' ? newValue : undefined)
    }
  }

  return (
    <>
      <Text bold>{bp ? `${activeProp} [${bp}]` : sentenceCase(activeProp)}</Text>
      <Spacer blockSize="2xs" />

      {PLAYGROUND_CONTROLS_MAP[activeProp as PlaygroundProp].type === 'string' ? (
        <Input
          placeholder="..."
          value={value}
          onChange={onChange}
          endAffix={props => <Button {...props} iconName="close" tagAttrs={{ onClick: () => onChange('') }} />}
        />
      ) : null}

      {PLAYGROUND_CONTROLS_MAP[activeProp as PlaygroundProp].type === 'boolean' ? (
        <Select value={value} onChange={onChange}>
          <Select.Option value="">...</Select.Option>
          <Select.Option value="true">true</Select.Option>
          <Select.Option value="false">false</Select.Option>
        </Select>
      ) : null}

      {PLAYGROUND_CONTROLS_MAP[activeProp as PlaygroundProp].type === 'array' ? (
        <Select value={value} onChange={onChange} scrollAlign="center">
          <Select.Option value="">...</Select.Option>
          {(PLAYGROUND_ARRAY_DATA_MAP[prop.options[0]] || prop.options.filter(o => o !== DOCS_CSS_LABEL)).map(option => (
            <Select.Option key={option} value={option}>
              {option}
            </Select.Option>
          ))}
        </Select>
      ) : null}
    </>
  )
}
