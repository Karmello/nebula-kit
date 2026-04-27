import { useState, useEffect } from 'react'
import { sentenceCase } from 'change-case'

import { Box, Button, Grid, Select, Spacer, Text, Switch, Flex } from 'lib/components'
import { BOX_VARIANTS, BOX_INTENTS, BoxVariant, BoxSurface, BOX_SURFACES } from 'lib/components/core/base/Box/definitions'
import { COLORS } from 'lib/definitions'

export default () => {
  const [variant, setVariant] = useState<BoxVariant>('solid')
  const [surface, setSurface] = useState<BoxSurface | 'base'>('base')
  const [selected, setSelected] = useState<boolean>(false)
  const [disabled, setDisabled] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    if (surface !== 'base') {
      setDisabled(false)
      setLoading(false)
    }
  }, [surface])

  useEffect(() => {
    if (selected) {
      setDisabled(false)
      setLoading(false)
    }
  }, [selected])

  useEffect(() => {
    if (disabled) {
      setSurface('base')
      setSelected(false)
      setLoading(false)
    }
  }, [disabled])

  useEffect(() => {
    if (loading) {
      setSurface('base')
      setSelected(false)
      setDisabled(false)
    }
  }, [loading])

  return (
    <>
      <Text>
        Intents and variants combined through Button components, illustrating the system's full color spectrum in practice.
      </Text>
      <Spacer />
      <Flex flexWrap="wrap" columnGap="15px" rowGap="10px">
        <Flex.Item>
          <Text bold intent="primary">
            Variant
          </Text>
          <Select
            value={variant}
            onChange={value => setVariant(value as BoxVariant)}
            inlineSize="150px"
            size="sm"
            scrollAlign="center"
          >
            {BOX_VARIANTS.map(variant => (
              <Select.Option value={variant}>{sentenceCase(variant)}</Select.Option>
            ))}
          </Select>
        </Flex.Item>
        <Flex.Item>
          <Text bold intent="primary">
            Surface
          </Text>
          <Select
            value={surface}
            onChange={value => setSurface(value as BoxSurface)}
            inlineSize="150px"
            size="sm"
            scrollAlign="center"
          >
            {['base', ...BOX_SURFACES].map(surface => (
              <Select.Option value={surface}>{sentenceCase(surface)}</Select.Option>
            ))}
          </Select>
        </Flex.Item>
        <Flex.Item>
          <Text bold intent="primary">
            Selected
          </Text>
          <Switch checked={selected} onChange={setSelected} />
        </Flex.Item>
        <Flex.Item>
          <Text bold intent="primary">
            Disabled
          </Text>
          <Switch checked={disabled} onChange={setDisabled} />
        </Flex.Item>
        <Flex.Item>
          <Text bold intent="primary">
            Loading
          </Text>
          <Switch checked={loading} onChange={setLoading} />
        </Flex.Item>
      </Flex>
      <Spacer blockSize="50px" />
      <Box overflowX="auto">
        <Grid gridTemplateColumns={`repeat(${BOX_INTENTS.length}, 1fr)`} gap="7px">
          {COLORS.map(color => {
            return BOX_INTENTS.map(intent => {
              return (
                <Grid.Item key={`${color}_${intent}`}>
                  <Button
                    color={color}
                    variant={variant}
                    intent={intent}
                    fullWidth
                    disabled={disabled}
                    loading={loading}
                    surface={surface !== 'base' ? surface : undefined}
                    selected={selected}
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
