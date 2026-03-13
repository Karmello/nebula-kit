import { Box, Reveal, Spacer, Text } from 'lib/components'

export const About = () => {
  return (
    <Reveal size="sm" intent="tertiary" label="About the website">
      <Box padding="15px">
        <Text>
          This website is built entirely with NebulaKit components. It serves as both documentation and a live showcase of the
          system in use. Every layout, interaction and styling decision you see here is produced by the same APIs available to
          developers using NebulaKit. By exploring the site, you can see how the components, patterns and constraints of the
          system behave in a real application.
        </Text>
        <Spacer blockSize="10px" />
        <Text>
          The website reflects how NebulaKit is intended to be used in practice. Some surfaces inherit the active brand, while
          others define their color locally for semantic or contextual reasons.
        </Text>
      </Box>
    </Reveal>
  )
}
