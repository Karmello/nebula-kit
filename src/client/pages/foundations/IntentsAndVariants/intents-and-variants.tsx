import { Box, Button, Flex, MarkerList, MarkerListItem, Section, Spacer, Text } from 'lib/components'
import { BoxIntent } from 'lib/components/base/Box/definitions'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Flex flexDirection="column" alignItems="stretch" gap={25}>
        <Text typography="lead">
          Intents and variants available in the system, showing how semantic roles combine with visual styles
          across components.
        </Text>
        <Section headingText="Intents">
          <MarkerList>
            <MarkerListItem>
              <Text bold>{BoxIntent[0]}</Text>
              <Text>&nbsp;- surface without meaning, default tone</Text>
            </MarkerListItem>
            <MarkerListItem>
              <Text bold>{BoxIntent[1]}</Text>
              <Text>&nbsp;- main call-to-action or highlight</Text>
            </MarkerListItem>
            <MarkerListItem>
              <Text bold>{BoxIntent[2]}</Text>
              <Text>&nbsp;- supporting action, less emphasis than primary</Text>
            </MarkerListItem>
            <MarkerListItem>
              <Text bold>{BoxIntent[3]}</Text>
              <Text>&nbsp;- subtle, lowest emphasis action</Text>
            </MarkerListItem>
            <MarkerListItem>
              <Text bold>{BoxIntent[4]}</Text>
              <Text>&nbsp;- positive or completed state</Text>
            </MarkerListItem>
            <MarkerListItem>
              <Text bold>{BoxIntent[5]}</Text>
              <Text>&nbsp;- informative, non-critical highlight</Text>
            </MarkerListItem>
            <MarkerListItem>
              <Text bold>{BoxIntent[6]}</Text>
              <Text>&nbsp;- cautionary or attention-needed</Text>
            </MarkerListItem>
            <MarkerListItem>
              <Text bold>{BoxIntent[7]}</Text>
              <Text>&nbsp;- destructive or error state</Text>
            </MarkerListItem>
            <MarkerListItem>
              <Text bold>{BoxIntent[8]}</Text>
              <Text>&nbsp;- contrast against app's surface</Text>
            </MarkerListItem>
          </MarkerList>
        </Section>
        <Section headingText="Ghost variant">
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
        <Section headingText="Outline variant">
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
        <Section headingText="Solid variant">
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
      </Flex>
    </Box>
  )
}
