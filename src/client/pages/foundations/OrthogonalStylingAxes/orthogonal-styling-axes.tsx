import { useNavigateTo } from 'client/hooks'
import { Box, Text, Flex, Link } from 'lib/components'

export default () => {
  const navigateTo = useNavigateTo()

  return (
    <Box maxInlineSize="55rem">
      <Flex flexDirection="column" gap="sm">
        <Text>
          NebulaKit resolves visual styles using five orthogonal axes:
          <Text tag="span" bold space="start">
            theme
          </Text>
          ,
          <Text tag="span" bold space="start">
            brand
          </Text>
          ,
          <Text tag="span" bold space="start">
            color
          </Text>
          ,
          <Text tag="span" bold space="both">
            variant
          </Text>
          and
          <Text tag="span" bold space="start">
            intent
          </Text>
          . Theme and brand define the visual environment. They can be applied globally or locally. Any Box can establish a local
          theme or brand boundary, and the nearest defined boundary is inherited by descendants. Only drawable Boxes participate
          in rendering, so they are the elements that actually consume theme and brand when drawing. Color, variant and intent are
          always local. They describe how a specific drawable surface presents itself within that environment. Each axis operates
          independently, so changing one never changes the meaning or behavior of the others.
        </Text>
        <Link
          href="/foundations/concepts/styling-system/styling-axes"
          onClick={() => {
            navigateTo('/foundations/concepts/styling-system/styling-axes')
          }}
        >
          <Text iconName="external-link" iconPlacement="right" intent="primary" color="blue">
            More on the topic
          </Text>
        </Link>
      </Flex>
    </Box>
  )
}
