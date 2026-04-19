import { sentenceCase } from 'change-case'

import { useAppStore } from 'client/store'
import { Box, Flex, Select, Spacer, Text } from 'lib/components'
import { COLORS } from 'lib/definitions'

export default () => {
  const brand = useAppStore(state => state.brand)
  const setBrand = useAppStore(state => state.setBrand)

  const arr = Array.from({ length: 26 }, (v, k) => k)

  return (
    <Box maxInlineSize={{ lg: '55rem' }}>
      <Text>All color palettes defined in the system.</Text>
      <Spacer />
      <Text bold>Brand</Text>
      <Select value={brand} onChange={setBrand} inlineSize="150px" size="sm" scrollAlign="center">
        {COLORS.map(brand => (
          <Select.Option value={brand}>{sentenceCase(brand)}</Select.Option>
        ))}
      </Select>
      <Spacer blockSize="50px" />
      <Flex flexDirection="column" alignItems="stretch" rowGap="20px">
        {arr.map(n => {
          return (
            <Flex.Item key={n} flexGrow="1">
              <Text scale="compact">{`--neb-${brand}-${n}`}</Text>
              <Box
                drawable
                variant="outline"
                intent="tertiary"
                brand={brand}
                tagAttrs={{ style: { backgroundColor: `hsl(var(--h) var(--s) var(--l-${n}))` } }}
                blockSize="50px"
              />
            </Flex.Item>
          )
        })}
      </Flex>
      <Spacer blockSize="15px" />
    </Box>
  )
}
