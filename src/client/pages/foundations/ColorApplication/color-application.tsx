import { useState } from 'react'
import { sentenceCase } from 'change-case'

import { Box, Button, Grid, Select, Spacer, Text } from 'lib/components'
import { BOX_VARIANTS, BOX_INTENTS, BoxVariant } from 'lib/components/core/base/Box/definitions'
import { COLORS } from 'lib/definitions'

export default () => {
  const [variant, setVariant] = useState<BoxVariant>('solid')

  return (
    <>
      <Text typography="lead">
        Intents and variants combined through Button components, illustrating the system's full color spectrum
        in practice.
      </Text>
      <Spacer />
      <Text bold>Variant</Text>
      <Select
        value={variant}
        onChange={value => setVariant(value as BoxVariant)}
        inlineSize="140px"
        size="sm"
        scrollAlign="center"
      >
        {BOX_VARIANTS.map(variant => (
          <Select.Option value={variant}>{sentenceCase(variant)}</Select.Option>
        ))}
      </Select>
      <Spacer blockSize="50px" />
      <Box overflowX="auto">
        <Grid gridTemplateColumns="repeat(6, 1fr)" gap="7px">
          {COLORS.map(color => {
            return BOX_INTENTS.map(intent => {
              return (
                <Grid.Item key={`${color}_${intent}`}>
                  <Button color={color} variant={variant} intent={intent} fullWidth>
                    {intent} {color}
                  </Button>
                </Grid.Item>
              )
            })
          })}
        </Grid>
      </Box>
    </>
  )
}
