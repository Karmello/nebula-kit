import { Box, Button, Flex, MarkerList, NEB_LENGTH, Section, Spacer, Text } from 'lib/components'
import { BOX_INTENTS } from 'lib/components/core/Box/constants'
import { BoxIntent } from 'lib/components/core/Box/types'

const INTENTS_INFO_MAP: Record<BoxIntent, string> = {
  neutral: 'surface without meaning, default tone',
  muted: 'calm, low-contrast tone used for understated surfaces or background accents',
  tertiary: 'subtle, lowest emphasis action',
  secondary: 'supporting action, less emphasis than primary',
  primary: 'main call-to-action or highlight',
  inverse: 'flips contrast relative to context',
}

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Flex flexDirection="column" alignItems="stretch" gap={NEB_LENGTH.px_048}>
        <Text>
          Intents and variants available in the system, showing how semantic roles combine with visual styles across components.
        </Text>
        <Section heading="Solid variant" size="sm">
          <Text>Filled surface, strong emphasis.</Text>
          <Spacer blockSize={NEB_LENGTH.px_024} />
          <Flex flexWrap="wrap" gap={NEB_LENGTH.px_008}>
            {BOX_INTENTS.map(intent => {
              return (
                <Button key={intent} variant="solid" intent={intent}>
                  {intent}
                </Button>
              )
            })}
          </Flex>
        </Section>
        <Section heading="Outline variant" size="sm">
          <Text>Border only, background matches the app's surface.</Text>
          <Spacer blockSize={NEB_LENGTH.px_024} />
          <Flex flexWrap="wrap" gap={NEB_LENGTH.px_008}>
            {BOX_INTENTS.map(intent => {
              return (
                <Button key={intent} variant="outline" intent={intent}>
                  {intent}
                </Button>
              )
            })}
          </Flex>
        </Section>
        <Section heading="Soft outline variant" size="sm">
          <Text>Border only, background matches the app's surface, text matches the border.</Text>
          <Spacer blockSize={NEB_LENGTH.px_024} />
          <Flex flexWrap="wrap" gap={NEB_LENGTH.px_008}>
            {BOX_INTENTS.map(intent => {
              return (
                <Button key={intent} variant="soft-outline" intent={intent}>
                  {intent}
                </Button>
              )
            })}
          </Flex>
        </Section>
        <Section heading="Ghost variant" size="sm">
          <Text>Text only, background and border match the app's surface.</Text>
          <Spacer blockSize={NEB_LENGTH.px_024} />
          <Flex flexWrap="wrap" gap={NEB_LENGTH.px_008}>
            {BOX_INTENTS.map(intent => {
              return (
                <Button key={intent} variant="ghost" intent={intent}>
                  {intent}
                </Button>
              )
            })}
          </Flex>
        </Section>
        <Section heading="Intents" size="sm">
          <MarkerList>
            {Object.keys(INTENTS_INFO_MAP).map(intent => (
              <MarkerList.Item key={intent}>
                <Text bold>{intent}</Text>
                <Text>&nbsp;- {INTENTS_INFO_MAP[intent as BoxIntent]}</Text>
              </MarkerList.Item>
            ))}
          </MarkerList>
        </Section>
      </Flex>
    </Box>
  )
}
