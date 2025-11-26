import { useNavigateTo } from 'client/hooks'
import { PageKey } from 'client/definitions'
import meta from 'client/meta'
import { Box, Button, Flex, Grid, Link, Section, Spacer, Text } from 'lib/components'

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
      <Section heading={plan === 'free' ? 'Core bundle' : 'Pro bundle'} iconName="package">
        <Flex alignItems="center" columnGap={50} flexWrap="wrap" justifyContent="space-between">
          {plan === 'free' ? (
            <Text>All components available for free.</Text>
          ) : (
            <Text>Comes with the paid plans.</Text>
          )}
          <Link href={`/${PageKey.pricing}`} onClick={() => navigateTo(`/${PageKey.pricing}`)}>
            <Button size="sm" variant="ghost" intent="primary" color="blue" iconName="arrow-left">
              Back to Pricing page
            </Button>
          </Link>
        </Flex>
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
              variant="soft-outline"
              borderIntent="tertiary"
              color="blue"
              intent="primary"
            >
              <Text intent="neutral">{item.title}</Text>
            </Section>
          ))}
        </Grid>
        <Spacer blockSize={50} />
        <Flex justifyContent="center">
          <Link
            href={plan === 'free' ? '/pricing/pro' : '/pricing/core'}
            onClick={() => {
              navigateTo(plan === 'free' ? '/pricing/pro' : '/pricing/core')
            }}
          >
            <Button size="sm" color="amber" iconName="package">
              {plan === 'free' ? 'Pro bundle' : 'Core bundle'}
            </Button>
          </Link>
        </Flex>
      </Section>
    </Box>
  )
}
