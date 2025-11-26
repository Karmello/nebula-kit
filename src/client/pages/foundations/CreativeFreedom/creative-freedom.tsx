import { Box, Spacer, Text } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Text>
        Building a UI library isn't about handing people finished "pictures". It's about giving them the brush
        and the paint. When you create components that are too high-level, too prescriptive or too
        opinionated, you're effectively locking developers inside your own idea of what a dashboard, a section
        or a layout should look like. It might look nice in your demo, but the moment someone tries to build
        their own thing, they're fighting your decisions instead of building with your tools. A component that
        decides too much is no longer a component, it's a cage.
      </Text>
      <Spacer />
      <Text>
        A good design system lives much closer to the ground. It offers primitives, not finished templates. It
        gives developers the same kind of freedom that LEGO gives kids: a small set of reliable, predictable,
        stackable pieces that can shape anything from a spaceship to a castle. When the building blocks are
        simple and well-defined, creativity expands instead of shrinking. Components like Box, Flex, Text and
        the other foundational pieces in NebulaKit are powerful precisely because they don't impose a vision.
        They empower one. They let people compose a layout, choose a rhythm and create meaning through
        structure rather than through pre-baked opinions.
      </Text>
      <Spacer />
      <Text>
        Every time you feel the temptation to build a massive all-in-one convenience component, that's usually
        a signal that you're climbing too far up the abstraction ladder. These kinds of components look
        impressive on the surface, but they age badly and they fracture quickly. Real-world apps are always
        slightly different from whatever the "example" version is supposed to be. When developers reach for a
        library, they shouldn't feel constrained. They should feel like they've been handed tools that make
        them faster without telling them what to build. A design system succeeds when it quietly disappears
        into the background and lets the product shine through.
      </Text>
      <Text>
        In the end, the role of NebulaKit isn't to provide tightly controlled experiences, but to create an
        environment where developers can actually build their own. It doesn't paint the picture for them. It
        gives them the canvas, the palette and the ability to paint anything they want.
      </Text>
    </Box>
  )
}
