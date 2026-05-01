import { useNavigateTo } from 'client/hooks'
import { PageKey } from 'client/definitions'
import { Box, Button, Flex, Grid, Link, Section, Spacer, Text } from 'lib/components'

import { CORE_DATA, PRO_DATA } from './definitions'

type Props = {
  bundle: 'core' | 'pro'
}

export const ComponentsBundlePage = ({ bundle }: Props) => {
  const navigateTo = useNavigateTo()

  return (
    <Box paddingTop="15px" paddingInline={{ base: '20px', lg: '50px' }}>
      <Section
        heading={bundle === 'core' ? `Core bundle (${CORE_DATA.length})` : `Pro bundle (${PRO_DATA.length})`}
        iconName="package"
      >
        <Flex alignItems="center" columnGap="50px" flexWrap="wrap" justifyContent="space-between">
          {bundle === 'core' ? <Text>All components available for free.</Text> : <Text>Comes with the paid plans.</Text>}
          <Link href={PageKey.pricing} onClick={() => navigateTo(PageKey.pricing)}>
            <Button size="sm" variant="ghost" intent="primary" color="blue" iconName="arrow-left">
              Back to Pricing page
            </Button>
          </Link>
        </Flex>
        <Spacer blockSize="50px" />
        <Grid
          gridTemplateColumns={{
            base: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
            xl: 'repeat(4, 1fr)',
          }}
          gap="20px"
        >
          {(bundle === 'core' ? CORE_DATA : PRO_DATA).map(item => (
            <Section
              key={item.name}
              heading={item.name}
              size="sm"
              variant="soft-outline"
              color="blue"
              intent="primary"
              iconName="box"
            >
              <Text intent="neutral">{item.title}</Text>
            </Section>
          ))}
        </Grid>
        <Spacer blockSize="50px" />
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
