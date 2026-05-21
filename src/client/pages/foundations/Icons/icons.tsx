import { Box, Flex, Icon, Spacer, Text, Tooltip } from 'lib/components'
import { IconName } from 'lib/definitions'
import { ICONS } from 'lib/icons/lucide'

export default () => {
  return (
    <>
      <Box maxInlineSize="55rem">
        <Text>
          All icons available in the NebulaKit system, presented as a curated subset of the Lucide icon set for use across
          components and interfaces.
        </Text>
      </Box>
      <Spacer blockSize="lg" />
      <Flex flexWrap="wrap" justifyContent={{ base: 'center', xl: 'flex-start' }} gap="xs">
        {Object.keys(ICONS).map(iconName => (
          <Tooltip key={iconName} content={iconName} minInlineSize={0} maxInlineSize={300}>
            <Box tagAttrs={{ style: { lineHeight: 0 } }} drawable variant="outline" intent="tertiary" padding="20px">
              <Icon name={iconName as IconName} size="30px" intent="primary" />
            </Box>
          </Tooltip>
        ))}
      </Flex>
    </>
  )
}
