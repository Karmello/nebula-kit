import { useNavigateTo } from 'client/hooks'
import { PageKey } from 'client/definitions'
import meta from 'client/meta'
import { Box, Button, Flex, Grid, Link, Section, Spacer, Text } from 'lib/components'

type Props = {
  bundle: 'core' | 'pro'
}

const CORE_DATA = Object.keys(meta)
  .filter(key => meta[key][key].overview.bundle === 'core')
  .map(key => ({
    name: key,
    title: meta[key][key].overview.title,
  }))

const PRO_DATA = Object.keys(meta)
  .filter(key => meta[key][key].overview.bundle === 'pro')
  .map(key => ({
    name: key,
    title: meta[key][key].overview.title,
  }))

export const ComponentsBundlePage = ({ bundle }: Props) => {
  const navigateTo = useNavigateTo()

  return (
    <Box paddingTop={15} paddingInline={{ base: 20, lg: 50 }}>
      <Section heading={bundle === 'core' ? 'Core bundle' : 'Pro bundle'} iconName="package">
        <Flex alignItems="center" columnGap={50} flexWrap="wrap" justifyContent="space-between">
          {bundle === 'core' ? (
            <Text>All components available for free.</Text>
          ) : (
            <Text>Comes with the paid plans.</Text>
          )}
          <Link href={PageKey.pricing} onClick={() => navigateTo(PageKey.pricing)}>
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
          {(bundle === 'core' ? CORE_DATA : PRO_DATA).map(item => (
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
            href={bundle === 'core' ? PageKey.pricingPro : PageKey.pricingCore}
            onClick={() => {
              navigateTo(bundle === 'core' ? PageKey.pricingPro : PageKey.pricingCore)
            }}
          >
            <Button size="sm" color="amber" iconName="package">
              {bundle === 'core' ? 'Pro bundle' : 'Core bundle'}
            </Button>
          </Link>
        </Flex>
      </Section>
    </Box>
  )
}
