import { Box, Button, Flex, MarkerList, MarkerListItem, Section, Spacer, Text } from 'lib/components'
import { BOX_INTENTS, BoxIntent } from 'lib/components/base/Box/definitions'

const INTENTS_INFO_MAP: Record<BoxIntent, string> = {
  neutral: 'surface without meaning, default tone',
  muted: 'calm, low-contrast tone used for understated surfaces or background accents',
  tertiary: 'subtle, lowest emphasis action',
  secondary: 'supporting action, less emphasis than primary',
  primary: 'main call-to-action or highlight',
  inverse: 'flips contrast relative to context',
  highlight: 'draws focus to key content or elements without implying urgency or status',
  success: 'positive or completed state',
  info: 'informative, non-critical highlight',
  warning: 'cautionary or attention-needed',
  danger: 'destructive or error state',
}

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Flex flexDirection="column" alignItems="stretch" gap={50}>
        <Text typography="lead">
          Intents and variants available in the system, showing how semantic roles combine with visual styles
          across components.
        </Text>
        <Section heading="Solid variant">
          <Text>Filled surface, strong emphasis.</Text>
          <Spacer blockSize={30} />
          <Flex flexWrap="wrap" gap={6}>
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
          <Spacer blockSize={30} />
          <Flex flexWrap="wrap" gap={6}>
            {BOX_INTENTS.map(intent => {
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
          <Spacer blockSize={30} />
          <Flex flexWrap="wrap" gap={6}>
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
