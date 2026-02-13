import { Box, Text, Flex } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Flex flexDirection="column" gap="15px">
        <Text>
          When you see a NebulaKit component rendered on the screen, you can be certain that the Box component
          is doing the work under the hood. Every visible surface is drawn through this single primitive.
          Variants, intents and color decisions are all encoded into that component and resolved in one place.
        </Text>
        <Text>
          Box acts like a rectangle on a canvas. It is a single, unified mechanism responsible for painting
          every visual element in your application. This unification makes the entire system more coherent and
          creates a clear sense that every component is crafted from the same material.
        </Text>
      </Flex>
    </Box>
  )
}
