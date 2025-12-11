import { Box, Button, Flex, MarkerList, Section, Spacer, Text } from 'lib/components'
import { BOX_INTENTS, BoxIntent } from 'lib/components/core/base/Box/definitions'

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
      <Flex flexDirection="column" alignItems="stretch" gap="50px">
        <Text typography="lead">
          Intents and variants available in the system, showing how semantic roles combine with visual styles
          across components.
        </Text>
        <Section heading="Solid variant">
          <Text>Filled surface, strong emphasis.</Text>
          <Spacer blockSize="30px" />
          <Flex flexWrap="wrap" gap="7px">
            {BOX_INTENTS.map(intent => {
              return (
                <Button key={intent} variant="solid" intent={intent}>
                  {intent}
                </Button>
              )
            })}
          </Flex>
        </Section>
        <Section heading="Outline variant">
          <Text>Border only, background matches the app's surface.</Text>
          <Spacer blockSize="30px" />
          <Flex flexWrap="wrap" gap="6px">
            {BOX_INTENTS.map(intent => {
              return (
                <Button key={intent} variant="outline" intent={intent}>
                  {intent}
                </Button>
              )
            })}
          </Flex>
        </Section>
        <Section heading="Soft outline variant">
          <Text>Border only, background matches the app's surface, text matches the border.</Text>
          <Spacer blockSize="30px" />
          <Flex flexWrap="wrap" gap="6px">
            {BOX_INTENTS.map(intent => {
              return (
                <Button key={intent} variant="soft-outline" intent={intent}>
                  {intent}
                </Button>
              )
            })}
          </Flex>
        </Section>
        <Section heading="Ghost variant">
          <Text>Text only, background and border match the app's surface.</Text>
          <Spacer blockSize="30px" />
          <Flex flexWrap="wrap" gap="6px">
            {BOX_INTENTS.map(intent => {
              return (
                <Button key={intent} variant="ghost" intent={intent}>
                  {intent}
                </Button>
              )
            })}
          </Flex>
        </Section>
        <Section heading="Intents">
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
