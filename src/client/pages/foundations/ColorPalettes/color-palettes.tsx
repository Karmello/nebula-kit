import { sentenceCase } from 'change-case'

import { useAppStore } from 'client/store'
import { Box, Flex, Select, Spacer, Text, Tooltip } from 'lib/components'
import { BoxColor } from 'lib/components/core/base/Box'
import { COLORS } from 'lib/definitions'

export default () => {
  const brand = useAppStore(state => state.brand)
  const setBrand = useAppStore(state => state.setBrand)

  return (
    <>
      <Text typography="lead">All color palettes defined in the system.</Text>
      <Spacer />
      <Text bold>Brand</Text>
      <Select
        value={brand}
        onClosed={value => {
          if (value !== undefined) setBrand(value as BoxColor)
        }}
        inlineSize="150px"
        size="sm"
        scrollAlign="center"
      >
        {COLORS.map(brand => (
          <Select.Option value={brand}>{sentenceCase(brand)}</Select.Option>
        ))}
      </Select>
      <Spacer blockSize="80px" />
      <Flex flexDirection={{ base: 'column', md: 'row' }} alignContent="stretch" alignItems="stretch">
        {Array.from({ length: 15 }, (v, k) => {
          return (
            <Flex.Item key={k} flexGrow="1">
              <Box
                tagAttrs={{ style: { backgroundColor: `var(--neb-${brand}-${k + 1})` } }}
                blockSize={{ base: '75px', md: '225px' }}
              />
            </Flex.Item>
          )
        })}
      </Flex>
    </>
  )
}
