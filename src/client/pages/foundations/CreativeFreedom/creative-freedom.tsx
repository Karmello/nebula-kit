import { Box, Spacer, Text } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Text>
        Building a UI library isn't like handing people finished pictures. It's like giving them the brush and
        the paint.
      </Text>
      <Spacer />
      <Text>
        When you create components that are too high-level, too prescriptive or too opinionated, you're
        effectively locking developers inside your own idea of what a dashboard, a section or a layout should
        look like. It might look nice in the demo, but the moment someone tries to build their own thing,
        they're fighting your decisions instead of building with your tools. A component that decides too much
        is no longer a component, it's a cage.
      </Text>
      <Spacer />
      <Text>
        A good design system lives much closer to the ground. It offers primitives, not finished templates. It
        gives developers the same kind of freedom that LEGO gives kids - a small set of reliable, predictable,
        stackable pieces that can shape anything from a spaceship to a castle. When the building blocks are
        simple and well-defined, creativity expands instead of shrinking. Components like Box, Flex, Text and
        the other foundational pieces in NebulaKit are powerful precisely because they don't impose a vision.
        They empower one. NebulaKit gives you strong, predictable foundations without locking you into
        pre-built UI templates. It defines how components behave, not what your interface should look like.
      </Text>
      <Spacer />
      <Text>
        Every time you feel the temptation to build a massive all-in-one convenience component, it's a sign
        you're climbing too far up the abstraction ladder. These components look great in a showcase, but real
        products rarely match the assumptions baked into them. As soon as a team needs something slightly
        different, the abstraction stops helping and starts getting in the way. When developers reach for a
        library, they shouldn't feel constrained. They should feel like they've been handed tools that make
        them faster without being told what their UI must look like. A design system succeeds when it quietly
        disappears into the background and lets the product shine through.
      </Text>
      <Spacer />
      <Text>
        NebulaKit doesn't dictate the final product. It provides a consistent environment where your own
        design decisions can thrive. It doesn't paint the picture for you. It gives you the canvas, the
        palette and the room to create anything you want.
      </Text>
    </Box>
  )
}
