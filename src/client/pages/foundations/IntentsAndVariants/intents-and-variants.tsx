import { Box, Button, Flex, MarkerList, MarkerListItem, Section, Spacer, Text } from 'lib/components'
import { BoxIntent } from 'lib/components/base/Box/definitions'

const INTENTS_INFO_MAP: Record<BoxIntent, string> = {
  primary: 'main call-to-action or highlight',
  secondary: 'supporting action, less emphasis than primary',
  tertiary: 'subtle, lowest emphasis action',
  neutral: 'surface without meaning, default tone',
  inverse: 'flips contrast relative to context',
  success: 'positive or completed state',
  info: 'informative, non-critical highlight',
  warning: 'cautionary or attention-needed',
  danger: 'destructive or error state',
  highlight: 'draws focus to key content or elements without implying urgency or status',
}

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Flex flexDirection="column" alignItems="stretch" gap={25}>
        <Text typography="lead">
          Intents and variants available in the system, showing how semantic roles combine with visual styles
          across components.
        </Text>
        <Section heading="Solid variant">
          <Text>Filled surface, strong emphasis.</Text>
          <Spacer blockSize={15} />
          <Flex flexWrap="wrap" gap={3}>
            {BoxIntent.map(intent => {
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
          <Spacer blockSize={15} />
          <Flex flexWrap="wrap" gap={3}>
            {BoxIntent.map(intent => {
              return (
                <Button key={intent} variant="outline" intent={intent}>
                  {intent}
                </Button>
              )
            })}
          </Flex>
        </Section>
        <Section heading="Ghost variant">
          <Text>Minimal, blends into background.</Text>
          <Spacer blockSize={15} />
          <Flex flexWrap="wrap" gap={3}>
            {BoxIntent.map(intent => {
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
              <MarkerListItem key={intent}>
                <Text bold>{intent}</Text>
                <Text>&nbsp;- {INTENTS_INFO_MAP[intent as BoxIntent]}</Text>
              </MarkerListItem>
            ))}
          </MarkerList>
        </Section>
      </Flex>
    </Box>
  )
}
