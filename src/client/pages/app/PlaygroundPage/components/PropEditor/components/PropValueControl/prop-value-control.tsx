import { Input, Button, Text, Spacer, Select } from 'lib/components'
import { Breakpoint } from 'lib/definitions'

import { usePlaygroundStore } from '../../../../store'

export const PropValueControl = ({ bp }: { bp?: Breakpoint }) => {
  const { components, activeComponent, setPropField, getActiveSlot } = usePlaygroundStore()

  const activeSlot = getActiveSlot()

  const isSlot = activeSlot && activeSlot !== 'root'

  const activeProp = isSlot ? components[activeSlot].activeProp : components[activeComponent].activeProp

  const prop = isSlot
    ? components[activeSlot].props[activeProp]
    : components[activeComponent].props[activeProp]

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
      setPropField(isSlot ? activeSlot : activeComponent, activeProp, 'value', newValue)
    } else {
      let newValue
      if (value === 'true') newValue = true
      else if (value === 'false') newValue = false
      else newValue = value
      setPropField(
        isSlot ? activeSlot : activeComponent,
        activeProp,
        'value',
        newValue !== '' ? newValue : undefined
      )
    }
  }

  return (
    <>
      <Text bold>{bp ? `${activeProp} (${bp})` : activeProp}</Text>
      <Spacer blockSize="3px" />
      {['CSS', 'ReactNode', 'string'].includes(prop.options[0]) ? (
        <Input
          tagAttrs={{
            placeholder: prop.options[0] === 'ReactNode' ? 'string' : prop.options[0].toLowerCase(),
          }}
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
      {!['CSS', 'ReactNode', 'string', 'boolean'].includes(prop.options[0]) ? (
        <Select value={value} onChange={onChange}>
          {prop.options.map(option => (
            <Select.Option value={option}>{option}</Select.Option>
          ))}
        </Select>
      ) : null}
    </>
  )
}
