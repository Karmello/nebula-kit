import { Box, NEB_LENGTH, Reveal, Text } from 'lib/components'

export const About = () => {
  return (
    <Reveal scale="sm" intent="tertiary" label="Read me" color="red">
      <Box padding={NEB_LENGTH.px_016}>
        <Text>
          This website is built entirely with NebulaKit components. It serves as both documentation
          and a live showcase of the system in use. Every layout, interaction and styling decision
          you see here is produced by the same APIs available to developers using NebulaKit. By
          exploring the site, you can see how the components, patterns and constraints of the system
          behave in a real application.
        </Text>
      </Box>
    </Reveal>
  )
}
