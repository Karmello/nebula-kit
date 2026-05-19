import { useNavigateTo } from 'client/hooks'
import { PageKey } from 'client/definitions'
import { Box, Button, Link, Section, Spacer, Text, Grid } from 'lib/components'

export const Principles = () => {
  const navigateTo = useNavigateTo()

  return (
    <>
      <Grid gridTemplateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: '1fr' }} gap="lg">
        <Section heading="JSX first" color="green" intent="primary" iconName="code">
          <Text intent="neutral">
            JSX is the primary development flow. Styling happens through structured props instead of constant CSS authoring, while
            preserving familiar CSS concepts underneath.
          </Text>
        </Section>
        <Section heading="Composition and inheritance" color="green" intent="primary" iconName="rectangle-circle">
          <Text intent="neutral">
            Pure composition drives all component behavior. Functionality is never duplicated. Composed functionality flows
            through prop inheritance, not redefinition.
          </Text>
        </Section>
        <Section heading="Enforcing HTML semantics" color="green" intent="primary" iconName="file-code">
          <Text intent="neutral">
            Semantic HTML is part of the component contract. Components preserve structure and meaning by default.
          </Text>
        </Section>
        <Section heading="Orthogonal styling engine" color="green" intent="primary" iconName="atom">
          <Text intent="neutral">
            Styling concerns are separated and scoped to prevent interference. Each styling dimension stays isolated. Performance
            is a property of the architecture, not an added optimization.
          </Text>
        </Section>
        <Section heading="Unified rendering models" color="green" intent="primary" iconName="paintbrush">
          <Text intent="neutral">
            The mechanisms for drawing visual output and handling responsiveness are each driven by their own explicit model,
            ensuring consistent behavior across the system.
          </Text>
        </Section>
        <Section heading="Resistant to entropy" color="green" intent="primary" iconName="shield-check">
          <Text intent="neutral">
            System constraints minimize UI entropy and optimize for long-term consistency, keeping products stable as they grow.
          </Text>
        </Section>
      </Grid>
      <Spacer blockSize="lg" />
      <Box textAlign="center">
        <Link
          href={`${PageKey.foundations}/overview/philosophy/jsx-first`}
          onClick={() => {
            navigateTo(`${PageKey.foundations}/overview/philosophy/jsx-first`)
          }}
        >
          <Button size="sm" color="green" intent="primary">
            Read more
          </Button>
        </Link>
      </Box>
    </>
  )
}
