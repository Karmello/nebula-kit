import { Box, Icon, NEB_LENGTH, Spacer, Text, Tooltip } from 'lib/components'
import { type IconName } from 'lib/components/core/Icon/types'
import { ICONS } from 'lib/icons/lucide'

export default () => {
  return (
    <>
      <Box maxInlineSize="55rem">
        <Text>
          All icons available in the NebulaKit system, presented as a curated subset of the Lucide
          icon set for use across components and interfaces.
        </Text>
      </Box>
      <Spacer blockSize={NEB_LENGTH.px_048} />
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent={{ base: 'center', xl: 'flex-start' }}
        gap={NEB_LENGTH.px_008}
      >
        {Object.keys(ICONS).map(iconName => (
          <Tooltip key={iconName} content={iconName} minInlineSize={0} maxInlineSize={300}>
            <Box
              tagAttrs={{ style: { lineHeight: 0 } }}
              drawable
              variant="outline"
              intent="tertiary"
              padding={NEB_LENGTH.px_016}
            >
              <Icon
                name={iconName as IconName}
                size={NEB_LENGTH.px_032}
                intent="primary"
                color="blue"
              />
            </Box>
          </Tooltip>
        ))}
      </Box>
    </>
  )
}
