import { pascalCase } from 'change-case'
import { Box, Button, Flex, MarkerList, MarkerListItem, Section, Text } from 'lib/components'
import { BoxVariant, BoxIntent } from 'lib/components/base/Box/definitions'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Flex flexDirection="column" alignItems="stretch" gap={25}>
        <Text>
          Variants and intents define the visual language of NebulaKit. All components build on these
          foundations, and this page lists every available option.
        </Text>
        {BoxVariant.map(variant => {
          return (
            <Section key={variant} heading={`${pascalCase(variant)} variant`}>
              <Flex flexWrap="wrap" gap={3}>
                {BoxIntent.map(intent => {
                  return (
                    <Button key={`${variant}_${intent}`} variant={variant} intent={intent} size="sm">
                      {intent}
                    </Button>
                  )
                })}
              </Flex>
            </Section>
          )
        })}
        <Section heading="Variants">
          <MarkerList listStyle="circle">
            <MarkerList.Item>
              <Text bold>{BoxVariant[0]}</Text>
              <Text>&nbsp;- filled surface, strong emphasis</Text>
            </MarkerList.Item>
            <MarkerList.Item>
              <Text bold>{BoxVariant[1]}</Text>
              <Text>&nbsp;- border only, no fill</Text>
            </MarkerList.Item>
            <MarkerList.Item>
              <Text bold>{BoxVariant[2]}</Text>
              <Text>&nbsp;- minimal, blends into background</Text>
            </MarkerList.Item>
          </MarkerList>
        </Section>
        <Section heading="Intents">
          <MarkerList listStyle="circle">
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
              <Text>&nbsp;- contrast against dark/light backgrounds</Text>
            </MarkerListItem>
          </MarkerList>
        </Section>
      </Flex>
    </Box>
  )
}
