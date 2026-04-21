import { useNavigateTo } from 'client/hooks'
import { PageKey } from 'client/definitions'
import { Box, Button, Link, Section, Spacer, Text, Grid } from 'lib/components'

export const Principles = () => {
  const navigateTo = useNavigateTo()

  return (
    <>
      <Grid gridTemplateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: '1fr' }} gap="30px">
        <Section heading="JSX first" color="green" intent="primary" iconName="code">
          <Text intent="neutral">
            JSX is the primary development flow. CSS exists as an internal implementation detail. Customization happens directly
            through props without switching contexts.
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
            Styling concerns are separated and scoped to prevent interference. Each styling dimension operates independently
            within its own context.
          </Text>
        </Section>
        <Section heading="Unified models" color="green" intent="primary" iconName="paintbrush">
          <Text intent="neutral">
            The drawing mechanism producing visual output and the responsiveness mechanism are each driven by a single explicit
            model. This keeps behavior consistent across different states and breakpoints.
          </Text>
        </Section>
        <Section heading="Resistant to entropy" color="green" intent="primary" iconName="shield-check">
          <Text intent="neutral">
            System constraints minimize UI entropy and optimize for long-term consistency. This keeps the system stable as
            applications grow.
          </Text>
        </Section>
      </Grid>
      <Spacer blockSize="40px" />
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
