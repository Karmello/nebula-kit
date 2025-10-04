import { pascalCase } from 'change-case'

import { Box, Flex, Section } from 'lib/components'
import { COLORS } from 'lib/definitions'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Flex flexDirection="column" gap={10} alignItems="stretch">
        {COLORS.map(colorName => {
          return (
            <Section key={colorName} heading={pascalCase(colorName)}>
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
