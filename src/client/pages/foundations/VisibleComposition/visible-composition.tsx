import { Box, Spacer, Text } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Text>
        NebulaKit is built to teach composition through use. Components are not opaque abstractions with
        arbitrary APIs - they are assemblies of existing primitives and that structure is intentionally
        visible in the props they expose. When a component accepts flexDirection, it is because Flex is part
        of its construction. When it accepts sizing props, it is because Box participates in its layout. The
        API reflects reality.
      </Text>
      <Spacer />
      <Text>
        This approach creates a shared vocabulary across the entire system. The same capability is always
        exposed under the same name, regardless of where it appears. There are no semantic aliases and no
        renamed concepts. One prop means one thing, everywhere. As a result, learning NebulaKit is cumulative:
        understanding one component makes the next one immediately more predictable.
      </Text>
      <Spacer />
      <Text>
        Composition in NebulaKit is not something you discover by reading source code - it is something you
        infer directly from the API. Prop inheritance acts as a map of how components are built. Seeing
        familiar props on different components signals how they relate and which primitives they are composed
        from. This makes the system legible even at higher levels of abstraction.
      </Text>
      <Spacer />
      <Text>
        By showing composition instead of hiding it, NebulaKit avoids prop soup and special cases. New
        components do not introduce new mental models, they reuse existing ones. The library grows by stacking
        known building blocks, not by inventing new vocabularies. What changes is scale, not understanding.
      </Text>
    </Box>
  )
}
