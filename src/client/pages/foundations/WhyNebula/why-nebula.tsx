import { Box, NEB_LENGTH, Spacer, Text } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Text>
        A nebula is the space between chaos and creation - a cloud of scattered elements slowly forming structure, gravity pulling
        fragments into order. NebulaKit was born from that same idea.
      </Text>
      <Spacer blockSize={NEB_LENGTH.px_016} />
      <Text>
        In the early stages of any interface, there's motion everywhere - new components, new layouts, new intentions. Without
        structure, it all drifts apart. NebulaKit gives that motion a center. Each primitive is a particle, small and clear in its
        purpose. Together they compose larger shapes - predictable, balanced, alive. The system doesn't fight complexity, it
        organizes it. Like a nebula collapsing into a star, everything here begins loosely connected and ends in clarity. From Box
        to Flex to Grid, every layer follows the same gravitational rules. Design and code settle into the same orbit. NebulaKit
        isn't named for what it looks like, but for what it does - it turns scattered parts into structure and structure into
        light.
      </Text>
      <Spacer blockSize={NEB_LENGTH.px_016} />
      <Text>
        For developers, that means predictability and freedom existing side by side. You build faster not because the library does
        more, but because it behaves the same everywhere. Every element, no matter how small, fits into the same architecture -
        order from chaos, by design. And just like real nebula, this one was born from what came before. Older frameworks burned
        bright, then scattered their patterns and lessons into the air. From that dust, NebulaKit formed - smaller, steadier and
        shaped by everything those systems left behind. Not a reinvention, but a refinement born from their collapse.
      </Text>
    </Box>
  )
}
