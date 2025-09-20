import { Callout, Flex, Box } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Flex flexDirection="column" gap={20}>
        <Callout
          variant="outline"
          heading="Simplicity first"
          content="Nebula-kit avoids extra abstraction layers or over-engineering. Props map directly to CSS, components
      stay close to native HTML, and the system favors clarity over cleverness - while still giving you enough
      power to build functional, responsive interfaces."
        />
        <Callout
          variant="outline"
          heading="Composition over bloat"
          content="Nebula-kit favors creating small, named composites instead of stuffing more props into primitives. Each component keeps a focused role, while new combinations are captured in higher-level pieces. This keeps the system predictable, avoids “swiss-army knife” components, and shows clearly how simple blocks evolve into complex interfaces."
        />
      </Flex>
    </Box>
  )
}
