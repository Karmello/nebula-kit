import { sentenceCase } from 'change-case'

import { useAppStore } from 'client/store'
import { Box, Flex, Select, Spacer, Text } from 'lib/components'
import { COLORS } from 'lib/definitions'
import { useCurrentTheme } from 'lib/hooks'

export default () => {
  const brand = useAppStore(state => state.brand)
  const setBrand = useAppStore(state => state.setBrand)

  const theme = useCurrentTheme()

  const arr = Array.from({ length: 15 }, (v, k) => k)
  if (theme === 'dark') arr.reverse()

  return (
    <>
      <Text typography="lead">All color palettes defined in the system.</Text>
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
              <Text scale="compact">{`--neb-${brand}-${n + 1}`}</Text>
              <Box
                drawable
                variant="outline"
                intent="muted"
                tagAttrs={{ style: { backgroundColor: `var(--neb-${brand}-${n + 1})` } }}
                blockSize="50px"
              />
            </Flex.Item>
          )
        })}
      </Flex>
    </>
  )
}
