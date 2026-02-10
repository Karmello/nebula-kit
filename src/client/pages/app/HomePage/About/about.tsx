import { Box, Reveal, Text } from 'lib/components'

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
      </Box>
    </Reveal>
  )
}
