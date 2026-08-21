import { Box, Button, Grid, Link, NEB_LENGTH, Section, Spacer, Text } from 'lib/components'
import { PageKey } from 'client/definitions'
import { useNavigateTo } from 'client/hooks'

import { CORE_DATA, PRO_DATA } from './definitions'

type Props = {
  bundle: 'core' | 'pro'
}

export const ComponentsBundlePage = ({ bundle }: Props) => {
  const navigateTo = useNavigateTo()

  return (
    <Box
      paddingTop={NEB_LENGTH.px_016}
      paddingInline={{ base: NEB_LENGTH.px_024, lg: NEB_LENGTH.px_048 }}
    >
      <Section
        size="lg"
        heading={
          bundle === 'core'
            ? `Core bundle (${CORE_DATA.length})`
            : `Pro bundle (${PRO_DATA.length})`
        }
        iconName="package"
      >
        <Box
          display="flex"
          alignItems="center"
          columnGap={NEB_LENGTH.px_048}
          flexWrap="wrap"
          justifyContent="space-between"
        >
          {bundle === 'core' ? (
            <Text>All components available for free.</Text>
          ) : (
            <Text>Comes with the paid plans.</Text>
          )}
          <Link href={PageKey.pricing} onClick={() => navigateTo(PageKey.pricing)}>
            <Button scale="sm" variant="ghost" intent="primary" color="blue" iconName="arrow-left">
              Back to Pricing page
            </Button>
          </Link>
        </Box>
        <Spacer blockSize={NEB_LENGTH.px_048} />
        <Grid
          gridTemplateColumns={{
            base: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
            xl: 'repeat(4, 1fr)',
          }}
          gap={NEB_LENGTH.px_016}
        >
          {(bundle === 'core' ? CORE_DATA : PRO_DATA).map(item => (
            <Section
              key={item.name}
              heading={item.name}
              size="md"
              variant="soft-outline"
              color="blue"
              intent="secondary"
              headingIntent="primary"
              iconName="box"
            >
              <Text intent="neutral">{item.title}</Text>
            </Section>
          ))}
        </Grid>
        <Spacer blockSize={NEB_LENGTH.px_048} />
        <Box display="flex" justifyContent="center">
          <Link
            href={bundle === 'core' ? PageKey.pricingPro : PageKey.pricingCore}
            onClick={() => {
              navigateTo(bundle === 'core' ? PageKey.pricingPro : PageKey.pricingCore)
            }}
          >
            <Button scale="sm" color="amber" iconName="package">
              {bundle === 'core' ? 'Pro bundle' : 'Core bundle'}
            </Button>
          </Link>
        </Box>
      </Section>
    </Box>
  )
}
