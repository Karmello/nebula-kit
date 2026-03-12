import { useNavigateTo } from 'client/hooks'
import { PageKey } from 'client/definitions'
import { Box, Button, Link, Section, Spacer, Text, Grid } from 'lib/components'

export const Principles = () => {
  const navigateTo = useNavigateTo()

  return (
    <>
      <Grid gridTemplateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: '1fr' }} gap="30px">
        <Section heading="JSX first" color="green" intent="primary" iconName="code">
          <Text intent="neutral">JSX is the primary development flow. CSS exists only as an internal implementation detail.</Text>
        </Section>
        <Section heading="Built on composition" color="green" intent="primary" iconName="rectangle-circle">
          <Text intent="neutral">Pure composition drives all component behavior. Functionality is never duplicated.</Text>
        </Section>
        <Section heading="Inheriting props" color="green" intent="primary" iconName="share-2">
          <Text intent="neutral">Composed functionality flows through prop inheritance, not redefinition.</Text>
        </Section>
        <Section heading="Enforcing semantics" color="green" intent="primary" iconName="file-code">
          <Text intent="neutral">Semantic HTML is part of the component contract.</Text>
        </Section>
        <Section heading="Orthogonal styling axes" color="green" intent="primary" iconName="atom">
          <Text intent="neutral">Styling concerns are separated and scoped to prevent interference.</Text>
        </Section>
        <Section heading="Unified drawing model" color="green" intent="primary" iconName="paintbrush">
          <Text intent="neutral">All visual output is produced through a single drawing model.</Text>
        </Section>
        <Section heading="Unified responsiveness" color="green" intent="primary" iconName="tablet-smartphone">
          <Text intent="neutral">Responsive behavior follows a single explicit model.</Text>
        </Section>
        <Section heading="Resistant to entropy" color="green" intent="primary" iconName="shield-check">
          <Text intent="neutral">System constraints minimize UI entropy and optimize for long-term consistency.</Text>
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
          <Button size="sm" color="green" intent="secondary">
            Read more
          </Button>
        </Link>
      </Box>
    </>
  )
}
