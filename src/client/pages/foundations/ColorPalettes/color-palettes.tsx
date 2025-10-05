import { pascalCase } from 'change-case'

import { Box, Flex, Section, Text } from 'lib/components'
import { COLORS } from 'lib/definitions'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Flex flexDirection="column" gap={30} alignItems="stretch">
        <Text typography="lead">All color palettes defined in the system.</Text>
        {COLORS.map(colorName => {
          return (
            <Section key={colorName} headingText={pascalCase(colorName)}>
              <Box overflowX="auto">
                <Flex flexDirection="row">
                  {Array.from({ length: 9 }, (v, k) => {
                    return (
                      <Flex.Item key={k} flex={1}>
                        <Box
                          variant="solid"
                          blockSize="100px"
                          borderRadius={0}
                          tagAttrs={{
                            style: {
                              backgroundColor: `var(--neb-${colorName}-${k + 1})`,
                            },
                          }}
                        />
                      </Flex.Item>
                    )
                  })}
                </Flex>
              </Box>
            </Section>
          )
        })}
      </Flex>
    </Box>
  )
}
