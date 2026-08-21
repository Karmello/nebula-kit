import { sentenceCase } from 'change-case'

import { Box, Button, NEB_LENGTH, Segment, Select, Text } from 'lib/components'
import { BOX_COLORS } from 'lib/components/core/Box/constants'
import { NEBKIT_PROVIDER_THEMES } from 'lib/components/core/NebkitProvider/constants'
import { useAppStore } from 'client/store'

export const Preferences = () => {
  const theme = useAppStore(state => state.theme)
  const setTheme = useAppStore(state => state.setTheme)
  const brand = useAppStore(state => state.brand)
  const setBrand = useAppStore(state => state.setBrand)

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      rowGap={NEB_LENGTH.px_024}
      columnGap={NEB_LENGTH.px_016}
      justifyContent="center"
    >
      <Box>
        <Text bold>Theme</Text>
        <Segment>
          {NEBKIT_PROVIDER_THEMES.map(key => (
            <Segment.Item key={key}>
              <Button
                intent={key === theme ? 'inverse' : 'tertiary'}
                scale="sm"
                onClick={() => setTheme(key)}
              >
                {sentenceCase(key)}
              </Button>
            </Segment.Item>
          ))}
        </Segment>
      </Box>
      <Box>
        <Text bold>Brand</Text>
        <Select value={brand} onChange={setBrand} inlineSize="150px" size="sm">
          {BOX_COLORS.map(brand => (
            <Select.Option value={brand}>{sentenceCase(brand)}</Select.Option>
          ))}
        </Select>
      </Box>
    </Box>
  )
}
