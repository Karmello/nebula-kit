import { Box, Text, Flex, Link } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Flex flexDirection="column" gap="15px">
        <Text>
          Frontend projects don't fail suddenly, they decay gradually. Well-defined conventions inside a project are usually not
          enough to stop it. Copy-paste, exceptions, overrides and "just this once" decisions accumulate. Entropy increases unless
          something actively resists it. UI libraries exist to slow it down, but most of them don't do as much as they could to
          limit its impact. If you've ever looked at a mature codebase and thought "how did we end up here?" - you've seen UI
          entropy in action.
        </Text>
        <Text>
          Entropy is not a bug, it's a law. No UI system can eliminate it completely. The difference between systems is how
          clearly they shape it and how well they slow it down as projects grow. UI library constraints are not limitations, they
          introduce structure and clarity. Systems that hold up over time are the ones where those constraints are built in, not
          just documented or expected.
        </Text>
        <Text>
          NebulaKit is a library that treats these problems as system-level constraints, not matters of convention, documentation
          or discipline. In NebulaKit, these rules are enforced by the component architecture itself, not left to best practices
          or team agreements. Semantic correctness is part of the component contract. Responsive behavior follows a single
          explicit model. Shared behavior is composed instead of duplicated. Component APIs reflect how things are built. Styling
          concerns are separated and scoped so they do not interfere with each other.
        </Text>
        <Text>
          NebulaKit lets frontend projects grow over time, add more features and involve more developers without relying on
          everyone remembering rules or enforcing them manually.
        </Text>
        <Link href="https://dev.to/karmello/design-systems-and-the-problem-of-ui-entropy-e3c" target="_blank">
          <Text iconName="external-link" iconPlacement="right" intent="primary" color="blue">
            More on the topic
          </Text>
        </Link>
      </Flex>
    </Box>
  )
}
