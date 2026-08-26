import { useState } from 'react'
import { sentenceCase } from 'change-case'

import { Box, Button, NEB_LENGTH, Select, Spacer, Switch, Text } from 'lib/components'
import { BOX_COLORS, BOX_INTENTS, BOX_VARIANTS } from 'lib/components/core/Box/constants'
import type { BoxVariant } from 'lib/components/core/Box/types'

const STATES = ['rest', 'selected', 'disabled', 'loading'] as const

type State = (typeof STATES)[number]

export default () => {
  const [variant, setVariant] = useState<BoxVariant>('ghost')
  const [elevated, setElevated] = useState<boolean>(false)
  const [state, setState] = useState<State>('rest')

  return (
    <>
      <Text>
        Intents and variants combined through Button components, illustrating the system's full
        color spectrum in practice.
      </Text>
      <Spacer />
      <Box display="flex" flexWrap="wrap" columnGap={NEB_LENGTH.px_016} rowGap={NEB_LENGTH.px_008}>
        <Box>
          <Text bold intent="primary">
            Variant
          </Text>
          <Select
            value={variant}
            onChange={value => setVariant(value as BoxVariant)}
            inlineSize="140px"
            scale="sm"
          >
            {BOX_VARIANTS.map(variant => (
              <Select.Option value={variant}>{sentenceCase(variant)}</Select.Option>
            ))}
          </Select>
        </Box>
        <Box>
          <Text bold intent="primary">
            State
          </Text>
          <Select
            value={state}
            onChange={value => setState(value as State)}
            inlineSize="130px"
            scale="sm"
          >
            {STATES.map(state => (
              <Select.Option value={state}>{sentenceCase(state)}</Select.Option>
            ))}
          </Select>
        </Box>
        <Box>
          <Text bold intent="primary">
            Elevated
          </Text>
          <Switch checked={elevated} onChange={setElevated} scale="sm" />
        </Box>
      </Box>
      <Spacer blockSize={NEB_LENGTH.px_048} />
      <Box overflowX="auto">
        <Box
          display="grid"
          gridTemplateColumns={`repeat(${BOX_INTENTS.length}, 1fr)`}
          gap={NEB_LENGTH.px_008}
        >
          {BOX_COLORS.map(color => {
            return BOX_INTENTS.map(intent => {
              return (
                <Box key={`${color}_${intent}`}>
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
                </Box>
              )
            })
          })}
        </Box>
      </Box>
    </>
  )
}
