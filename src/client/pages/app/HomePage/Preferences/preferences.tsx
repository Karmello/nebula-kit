import { sentenceCase } from 'change-case'

import { Button, Flex, Segment, Select, Text } from 'lib/components'
import { COLORS, THEMES } from 'lib/constants'
import { useAppStore } from 'client/store'

export const Preferences = () => {
  const theme = useAppStore(state => state.theme)
  const setTheme = useAppStore(state => state.setTheme)
  const brand = useAppStore(state => state.brand)
  const setBrand = useAppStore(state => state.setBrand)

  return (
    <Flex flexWrap="wrap" rowGap="md" columnGap="sm" justifyContent="center">
      <Flex.Item>
        <Text bold>Theme</Text>
        <Segment>
          {THEMES.map(key => (
            <Segment.Item key={key}>
              <Button intent={key === theme ? 'inverse' : 'tertiary'} size="sm" onClick={() => setTheme(key)}>
                {sentenceCase(key)}
              </Button>
            </Segment.Item>
          ))}
        </Segment>
      </Flex.Item>
      <Flex.Item>
        <Text bold>Brand</Text>
        <Select value={brand} onChange={setBrand} inlineSize="150px" size="sm">
          {COLORS.map(brand => (
            <Select.Option value={brand}>{sentenceCase(brand)}</Select.Option>
          ))}
        </Select>
      </Flex.Item>
    </Flex>
  )
}
