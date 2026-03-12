import { Box, Text, Flex } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Flex flexDirection="column" gap="15px">
        <Text>
          NebulaKit is one person's idea. It is the result of almost ten years of experimenting with user interfaces across
          different programming languages and frontend technologies. The framework is shaped by the problems encountered during
          that time, not by theory, but by practice.
        </Text>
        <Text>
          The main goal of NebulaKit is to provide a system that takes some of the uncomfortable UI decisions off your plate and
          lets you focus on writing application-specific logic. Much like a database client that gives you power without exposing
          every internal knob, NebulaKit is designed to make your life easier by handling certain hard decisions internally and
          exposing only a controlled level of customization.
        </Text>
        <Text>
          Experience has shown that the more knobs a UI system exposes, the more distraction it introduces into the development
          process. Libraries often provide extensive configuration options, only for users to discover that there are only a few
          well-behaving combinations that actually work in real-world UI scenarios. Instead of exposing every possible option,
          NebulaKit makes those configuration decisions upfront so you don't have to think about them repeatedly.
        </Text>
        <Text>
          Visual taste that follows accessibility best practices is baked into the system by default. This includes themes,
          variants, intents, color palettes, sizes and related decisions. Customization is possible, but only to a certain extent.
          You can bend the system enough to achieve satisfying results while still keeping it healthy. NebulaKit is intentionally
          opinionated, with strong defaults that reflect best practices and are designed to simply work.
        </Text>
        <Text>
          A number of high-level decisions define what the system is. These include making JSX the primary development workflow,
          treating CSS primarily as an internal implementation detail, enforcing strict composition rules, keeping component APIs
          simple through prop inheritance, enforcing proper HTML semantics at the component level and separating styling concerns
          into independent axes. Together, these decisions shape the overall feel and behavior of NebulaKit.
        </Text>
        <Text>
          NebulaKit exposes a set of powerful primitives with expressive prop APIs, allowing users to build their own components
          when needed. While the system will continue to grow with more ready-made components - especially those that are complex
          or difficult to implement correctly - the primitives are the foundation. They are meant to be composed like building
          blocks, enabling many different combinations that form more complex structures.
        </Text>
        <Text>
          The future is impossible to predict, but it is unlikely that NebulaKit will ever support high-level templates. The focus
          is placed on increasing the intelligence of individual primitives rather than providing large, prebuilt views. Users are
          expected to build those views themselves by understanding how each piece of functionality works. NebulaKit does not aim
          to hide developer concerns, but to teach how to handle them in a structured and sustainable way.
        </Text>
      </Flex>
    </Box>
  )
}
