import { Box, NEB_LENGTH, Text } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Box display="flex" flexDirection="column" gap={NEB_LENGTH.px_016}>
        <Text>
          When you see a NebulaKit component rendered on the screen, you can be certain that the
          <Text tag="span" bold space="both">
            Box
          </Text>
          component is doing the work under the hood. Every visible surface is drawn through this
          single primitive. Variants, intents and color decisions are all encoded into that
          component and resolved in one place.
        </Text>
        <Text>
          <Text tag="span" bold space="end">
            Box
          </Text>
          acts like a rectangle on a canvas. It is a single, unified mechanism responsible for
          painting every visual element in your application. This unification makes the entire
          system more coherent and creates a clear sense that every component is crafted from the
          same material.
        </Text>
      </Box>
    </Box>
  )
}
