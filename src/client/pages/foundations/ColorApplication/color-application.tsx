import { useState } from 'react'
import { sentenceCase } from 'change-case'

import { Box, Button, Flex,Grid, Select, Spacer, Switch, Text } from 'lib/components'
import { BOX_INTENTS, BOX_VARIANTS } from 'lib/components/core/Box/constants'
import { BoxVariant } from 'lib/components/core/Box/types'
import { COLORS } from 'lib/constants'

const STATES = ['rest', 'selected', 'disabled', 'loading'] as const

type State = (typeof STATES)[number]

export default () => {
  const [variant, setVariant] = useState<BoxVariant>('solid')
  const [elevated, setElevated] = useState<boolean>(false)
  const [state, setState] = useState<State>('rest')

  return (
    <>
      <Text>
        Intents and variants combined through Button components, illustrating the system's full color spectrum in practice.
      </Text>
      <Spacer />
      <Flex flexWrap="wrap" columnGap="sm" rowGap="xs">
        <Flex.Item>
          <Text bold intent="primary">
            Variant
          </Text>
          <Select value={variant} onChange={value => setVariant(value as BoxVariant)} inlineSize="140px" size="sm">
            {BOX_VARIANTS.map(variant => (
              <Select.Option value={variant}>{sentenceCase(variant)}</Select.Option>
            ))}
          </Select>
        </Flex.Item>
        <Flex.Item>
          <Text bold intent="primary">
            State
          </Text>
          <Select value={state} onChange={value => setState(value as State)} inlineSize="130px" size="sm">
            {STATES.map(state => (
              <Select.Option value={state}>{sentenceCase(state)}</Select.Option>
            ))}
          </Select>
        </Flex.Item>
        <Flex.Item>
          <Text bold intent="primary">
            Elevated
          </Text>
          <Switch checked={elevated} onChange={setElevated} />
        </Flex.Item>
      </Flex>
      <Spacer blockSize="lg" />
      <Box overflowX="auto">
        <Grid gridTemplateColumns={`repeat(${BOX_INTENTS.length}, 1fr)`} gap="xs">
          {COLORS.map(color => {
            return BOX_INTENTS.map(intent => {
              return (
                <Grid.Item key={`${color}_${intent}`}>
                  <Button
                    color={color}
                    variant={variant}
                    intent={intent}
                    fullWidth
                    elevated={elevated}
                    selected={state === 'selected'}
                    disabled={state === 'disabled'}
                    loading={state === 'loading'}
                  >
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
