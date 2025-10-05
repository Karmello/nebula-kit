import { Box, Flex, Icon, Spacer, Text } from 'lib/components'
import { IconName } from 'lib/definitions'
import { ICONS } from 'lib/icons/lucide'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Text typography="lead">
        All icons available in the NebulaKit system, presented as a curated subset of the Lucide icon set for
        use across components and interfaces.
      </Text>
      <Spacer blockSize={30} />
      <Flex flexWrap="wrap" gap={12}>
        {Object.keys(ICONS).map(iconName => (
          <Icon key={iconName} name={iconName as IconName} size={30} intent="success" />
        ))}
      </Flex>
    </Box>
  )
}
