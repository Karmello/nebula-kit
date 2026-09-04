import { useState } from 'react'
import { sentenceCase } from 'change-case'

import { Box, NEB_LENGTH, Select, Spacer, Text } from 'lib/components'
import { BOX_COLORS } from 'lib/components/core/Box/constants'
import { DEFAULT_NEBKIT_PROVIDER_BRAND } from 'lib/components/core/NebkitProvider'

export default () => {
  const [brand, setBrand] = useState<(typeof BOX_COLORS)[number]>(DEFAULT_NEBKIT_PROVIDER_BRAND)

  const arr = Array.from({ length: 26 }, (v, k) => k)

  return (
    <Box maxInlineSize={{ lg: '55rem' }}>
      <Text>All color palettes defined in the system.</Text>
      <Spacer />
      <Text bold>Brand</Text>
      <Select
        value={brand}
        onChange={value => setBrand(value as (typeof BOX_COLORS)[number])}
        inlineSize="150px"
        scale="sm"
      >
        {BOX_COLORS.map(brand => (
          <Select.Option value={brand}>{sentenceCase(brand)}</Select.Option>
        ))}
      </Select>
      <Spacer blockSize={NEB_LENGTH.px_048} />
      <Box display="flex" flexDirection="column" alignItems="stretch" rowGap={NEB_LENGTH.px_016}>
        {arr.map(n => {
          return (
            <Box key={n} flexGrow="1">
              <Text typography="small">{`Step ${n}`}</Text>
              <Spacer blockSize={NEB_LENGTH.px_002} />
              <Box
                drawable
                // variant="outline"
                intent="muted"
                brand={brand}
                tagAttrs={{ style: { backgroundColor: `hsl(var(--h) var(--s) var(--l-${n}))` } }}
                blockSize={NEB_LENGTH.px_048}
              />
            </Box>
          )
        })}
      </Box>
      <Spacer blockSize={NEB_LENGTH.px_016} />
    </Box>
  )
}
