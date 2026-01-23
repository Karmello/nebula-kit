import { Input, Button, Text, Spacer, Select } from 'lib/components'
import { BOX_INTENTS } from 'lib/components/core/base/Box'
import { Breakpoint, COLORS, ICON_NAMES } from 'lib/definitions'

import { usePlaygroundStore } from '../../../../store'

const PROPS_OPTIONS_FOR_INPUT = ['CSS', 'ReactNode', 'string', 'number']
const PROPS_OPTIONS_FOR_BOOLEAN = ['boolean']
const PROPS_OPTIONS_FOR_SELECT = ['IconName', 'BoxColor', 'BoxIntent'] as const

const SELECT_DATA_MAP: Record<(typeof PROPS_OPTIONS_FOR_SELECT)[number], readonly string[]> = {
  IconName: ICON_NAMES,
  BoxColor: COLORS,
  BoxIntent: BOX_INTENTS,
}

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
      <Text>{bp ? `${activeProp} [${bp}]` : activeProp}</Text>
      <Spacer blockSize="5px" />
      {PROPS_OPTIONS_FOR_INPUT.includes(prop.options[0]) ? (
        <Input
          placeholder={prop.options[0] === 'ReactNode' ? 'value' : prop.options[0].toLowerCase()}
          value={value}
          onChange={onChange}
          endAffix={props => (
            <Button {...props} iconName="close" tagAttrs={{ onClick: () => onChange('') }} />
          )}
          intent={{ base: 'secondary', lg: 'tertiary' }}
        />
      ) : null}
      {PROPS_OPTIONS_FOR_BOOLEAN.includes(prop.options[0]) ? (
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
      {PROPS_OPTIONS_FOR_SELECT.includes(prop.options[0] as (typeof PROPS_OPTIONS_FOR_SELECT)[number]) ? (
        <Select
          value={value}
          onChange={onChange}
          intent={{ base: 'secondary', lg: 'tertiary' }}
          itemBorderIntent={{ base: 'tertiary', lg: 'muted' }}
        >
          <Select.Option value="">...</Select.Option>
          {SELECT_DATA_MAP[prop.options[0] as (typeof PROPS_OPTIONS_FOR_SELECT)[number]].map(value => (
            <Select.Option key={value} value={value}>
              {value}
            </Select.Option>
          ))}
        </Select>
      ) : null}
      {![...PROPS_OPTIONS_FOR_INPUT, ...PROPS_OPTIONS_FOR_BOOLEAN, ...PROPS_OPTIONS_FOR_SELECT].includes(
        prop.options[0]
      ) ? (
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
