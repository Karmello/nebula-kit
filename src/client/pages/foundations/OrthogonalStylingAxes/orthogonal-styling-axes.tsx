import { useNavigateTo } from 'client/hooks'
import { Box, Text, Flex, Link } from 'lib/components'

export default () => {
  const navigateTo = useNavigateTo()

  return (
    <Box maxInlineSize="55rem">
      <Flex flexDirection="column" gap="15px">
        <Text>
          NebulaKit resolves visual styles using five orthogonal axes: theme, brand, color, variant and
          intent. Theme and brand define the visual environment. They can be applied globally or locally and
          are inherited through the nearest drawable Box. Color, variant and intent are always local. They
          describe how a specific component presents itself within that environment. Each axis operates
          independently. Changing one never alters the meaning or behavior of the others. This separation
          keeps the system predictable, composable and easy to reason about as it grows.
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
