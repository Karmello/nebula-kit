import { Box, Button, Grid, Link, Section, Spacer, Text } from 'lib/components'
import { useNavigateTo } from 'client/services'
import meta from 'client/meta'

type Props = {
  plan: 'free' | 'pro'
}

const CORE_DATA = Object.keys(meta)
  .filter(key => meta[key][key].overview.plan === 'free')
  .map(key => ({
    name: key,
    title: meta[key][key].overview.title,
  }))

const PRO_DATA = Object.keys(meta)
  .filter(key => meta[key][key].overview.plan === 'pro')
  .map(key => ({
    name: key,
    title: meta[key][key].overview.title,
  }))

export const ComponentsBundlePage = ({ plan }: Props) => {
  const navigateTo = useNavigateTo()

  return (
    <Box paddingTop={15} paddingInline={{ base: 20, lg: 50 }}>
      <Section
        heading={plan === 'free' ? 'Core components bundle' : 'Pro components bundle'}
        intent="neutral"
      >
        {plan === 'free' ? (
          <Text>All components available for free.</Text>
        ) : (
          <Text>Come with the paid plans.</Text>
        )}
        <Spacer blockSize={50} />
        <Grid
          gridTemplateColumns={{
            base: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
            xl: 'repeat(4, 1fr)',
          }}
          gap={20}
        >
          {(plan === 'free' ? CORE_DATA : PRO_DATA).map(item => (
            <Section
              key={item.name}
              heading={item.name}
              size="sm"
              variant="outline"
              borderIntent="tertiary"
              intent="primary"
              interactive
            >
              <Text intent="neutral">{item.title}</Text>
            </Section>
          ))}
        </Grid>
        <Spacer blockSize={50} />
        <Link
          href={plan === 'free' ? '/pricing/pro' : '/pricing/core'}
          onClick={() => {
            navigateTo(plan === 'free' ? '/pricing/pro' : '/pricing/core')
          }}
        >
          <Button size="sm" intent="highlight">
            {plan === 'free' ? 'Pro bundle' : 'Core bundle'}
          </Button>
        </Link>
      </Section>
    </Box>
  )
}
