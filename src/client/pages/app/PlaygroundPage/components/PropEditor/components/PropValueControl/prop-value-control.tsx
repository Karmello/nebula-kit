import { Input, Button, Text, Spacer, Select } from 'lib/components'
import { Breakpoint } from 'lib/definitions'
import { ICONS } from 'lib/icons/lucide'

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
      else if (value !== '' && !Number.isNaN(Number(value))) newValue = Number(value)
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
      <Text>{bp ? `${activeProp} (${bp})` : activeProp}</Text>
      <Spacer blockSize="5px" />
      {['CSS', 'ReactNode', 'string', 'number'].includes(prop.options[0]) ? (
        <Input
          tagAttrs={{
            placeholder: prop.options[0] === 'ReactNode' ? 'value' : prop.options[0].toLowerCase(),
          }}
          value={value}
          onChange={onChange}
          endSlot={
            <Button
              iconName="close"
              tagAttrs={{ onClick: () => onChange('') }}
              intent={{ base: 'secondary', lg: 'tertiary' }}
            />
          }
          intent={{ base: 'secondary', lg: 'tertiary' }}
        />
      ) : null}
      {prop.options[0] === 'boolean' ? (
        <Select
          value={value}
          onChange={onChange}
          intent={{ base: 'secondary', lg: 'tertiary' }}
          itemBorderIntent={{ base: 'tertiary', lg: 'muted' }}
        >
          <Select.Option value="">...</Select.Option>
          <Select.Option value="true">true</Select.Option>
          <Select.Option value="false">false</Select.Option>
        </Select>
      ) : null}
      {prop.options[0] === 'IconName' ? (
        <Select
          value={value}
          onChange={onChange}
          intent={{ base: 'secondary', lg: 'tertiary' }}
          itemBorderIntent={{ base: 'tertiary', lg: 'muted' }}
        >
          <Select.Option value="">...</Select.Option>
          {Object.keys(ICONS).map(iconName => (
            <Select.Option key={iconName} value={iconName}>
              {iconName}
            </Select.Option>
          ))}
        </Select>
      ) : null}
      {!['CSS', 'ReactNode', 'string', 'number', 'boolean', 'IconName'].includes(prop.options[0]) ? (
        <Select
          value={value}
          onChange={onChange}
          scrollAlign="center"
          intent={{ base: 'secondary', lg: 'tertiary' }}
          itemBorderIntent={{ base: 'tertiary', lg: 'muted' }}
        >
          <Select.Option value="">...</Select.Option>
          {prop.options.map(option => (
            <Select.Option key={option} value={option}>
              {option}
            </Select.Option>
          ))}
        </Select>
      ) : null}
    </>
  )
}
