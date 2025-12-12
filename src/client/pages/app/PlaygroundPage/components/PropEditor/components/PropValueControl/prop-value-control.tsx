import { Input, Button, Text, Spacer, Select } from 'lib/components'
import { Breakpoint } from 'lib/definitions'

import { usePlaygroundStore } from '../../../../store'

export const PropValueControl = ({ bp }: { bp?: Breakpoint }) => {
  const { components, activeComponent, setPropField } = usePlaygroundStore()

  const { props, activeProp } = components[activeComponent]
  const prop = props[activeProp]

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
      setPropField(activeComponent, activeProp, 'value', value !== '' ? value : undefined)
    }
  }

  return (
    <>
      <Text bold>{bp ? `Value (${bp})` : 'Value'}</Text>
      <Spacer blockSize="3px" />
      {['CSS', 'ReactNode'].includes(prop.options[0]) ? (
        <Input
          tagAttrs={{ placeholder: prop.options[0] }}
          value={value}
          onChange={onChange}
          endSlot={<Button iconName="close" tagAttrs={{ onClick: () => onChange('') }} />}
        />
      ) : null}
      {prop.options[0] === 'boolean' ? (
        <Select value={value} onChange={onChange}>
          <Select.Option value="true">true</Select.Option>
          <Select.Option value="false">false</Select.Option>
        </Select>
      ) : null}
      {!['CSS', 'ReactNode', 'boolean'].includes(prop.options[0]) ? (
        <Select value={value} onChange={onChange}>
          {prop.options.map(option => (
            <Select.Option value={option}>{option}</Select.Option>
          ))}
        </Select>
      ) : null}
    </>
  )
}
