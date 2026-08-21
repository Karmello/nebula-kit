import { sentenceCase } from 'change-case'

import { Box, Flex, NEB_LENGTH, Select, Spacer, Text } from 'lib/components'
import { BOX_COLORS } from 'lib/components/core/Box/constants'
import { useAppStore } from 'client/store'

export default () => {
  const brand = useAppStore(state => state.brand)
  const setBrand = useAppStore(state => state.setBrand)

  const arr = Array.from({ length: 26 }, (v, k) => k)

  return (
    <Box maxInlineSize={{ lg: '55rem' }}>
      <Text>All color palettes defined in the system.</Text>
      <Spacer />
      <Text bold>Brand</Text>
      <Select value={brand} onChange={setBrand} inlineSize="150px" size="sm">
        {BOX_COLORS.map(brand => (
          <Select.Option value={brand}>{sentenceCase(brand)}</Select.Option>
        ))}
      </Select>
      <Spacer blockSize={NEB_LENGTH.px_048} />
      <Flex flexDirection="column" alignItems="stretch" rowGap={NEB_LENGTH.px_016}>
        {arr.map(n => {
          return (
            <Flex.Item key={n} flexGrow="1">
              <Text typography="small">{`Step ${n}`}</Text>
              <Spacer blockSize={NEB_LENGTH.px_002} />
              <Box
                drawable
                variant="outline"
                intent="muted"
                brand={brand}
                tagAttrs={{ style: { backgroundColor: `hsl(var(--h) var(--s) var(--l-${n}))` } }}
                blockSize={NEB_LENGTH.px_048}
              />
            </Flex.Item>
          )
        })}
      </Flex>
      <Spacer blockSize={NEB_LENGTH.px_016} />
    </Box>
  )
}
