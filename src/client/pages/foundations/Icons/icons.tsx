import { Box, Flex, Icon, Spacer, Text, Tooltip } from 'lib/components'
import { type IconName } from 'lib/components/core/Icon/types'
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
      <Spacer blockSize="48px" />
      <Flex flexWrap="wrap" justifyContent={{ base: 'center', xl: 'flex-start' }} gap="8px">
        {Object.keys(ICONS).map(iconName => (
          <Tooltip key={iconName} content={iconName} minInlineSize={0} maxInlineSize={300}>
            <Box tagAttrs={{ style: { lineHeight: 0 } }} drawable variant="outline" intent="tertiary" padding="16px">
              <Icon name={iconName as IconName} size="32px" intent="primary" color="blue" />
            </Box>
          </Tooltip>
        ))}
      </Flex>
    </>
  )
}
