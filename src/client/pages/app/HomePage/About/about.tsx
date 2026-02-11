import { Box, Reveal, Spacer, Text } from 'lib/components'

export const About = () => {
  return (
    <Reveal size="sm" intent="tertiary" label="About the website">
      <Box padding="15px">
        <Text>
          This website is built entirely with NebulaKit components. It serves as both documentation and a live
          showcase of the system in real use. Every layout, interaction and styling decision you see here is
          produced by the same system APIs available to users. You can explore the components, patterns and
          constraints of the system by simply using the site.
        </Text>
        <Spacer blockSize="15px" />
        <Text>
          The site is structured like a real application. Some surfaces inherit the active brand, while others
          define their color locally for semantic or contextual reasons. This reflects how NebulaKit is
          intended to be used in practice - brand acts as a default, not a global paint bucket.
        </Text>
      </Box>
    </Reveal>
  )
}
