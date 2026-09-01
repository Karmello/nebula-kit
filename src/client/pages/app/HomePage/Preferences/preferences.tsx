import { sentenceCase } from 'change-case'

import { Box, Button, NEB_LENGTH, Select, Text } from 'lib/components'
import { BOX_COLORS } from 'lib/components/core/Box/constants'
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
        <Button
          theme={theme === 'light' ? 'global-flipped' : undefined}
          scale="sm"
          tagAttrs={{
            onClick: () => setTheme('light'),
            style: {
              borderTopRightRadius: NEB_LENGTH.px_000,
              borderBottomRightRadius: NEB_LENGTH.px_000,
            },
          }}
        >
          {sentenceCase('Light')}
        </Button>
        <Button
          theme={theme === 'dark' ? 'global-flipped' : undefined}
          scale="sm"
          tagAttrs={{
            onClick: () => setTheme('dark'),
            style: {
              borderTopLeftRadius: NEB_LENGTH.px_000,
              borderBottomLeftRadius: NEB_LENGTH.px_000,
            },
          }}
        >
          {sentenceCase('Dark')}
        </Button>
      </Box>
      <Box>
        <Text bold>Brand</Text>
        <Select value={brand} onChange={setBrand} inlineSize="150px" scale="sm">
          {BOX_COLORS.map(brand => (
            <Select.Option value={brand}>{sentenceCase(brand)}</Select.Option>
          ))}
        </Select>
      </Box>
    </Box>
  )
}
