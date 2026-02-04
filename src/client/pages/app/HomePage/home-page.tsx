import { sentenceCase } from 'change-case'

import { useNavigateTo } from 'client/hooks'
import { useAppStore } from 'client/store'
import { PageKey } from 'client/definitions'

import {
  Box,
  Divider,
  Flex,
  Button,
  Link,
  Section,
  Select,
  Spacer,
  Text,
  Segment,
  Grid,
  Switch,
} from 'lib/components'

import { NEBKIT_BORDER_RADIUS_SIZES } from 'lib/components/core/utility/NebkitProvider'
import { COLORS, THEMES } from 'lib/definitions'

import { Ortho } from './Ortho'

export const HomePage = () => {
  const navigateTo = useNavigateTo()

  const theme = useAppStore(state => state.theme)
  const setTheme = useAppStore(state => state.setTheme)
  const brand = useAppStore(state => state.brand)
  const setBrand = useAppStore(state => state.setBrand)
  const borderRadiusSize = useAppStore(state => state.borderRadiusSize)
  const setBorderRadiusSize = useAppStore(state => state.setBorderRadiusSize)
  const ripple = useAppStore(state => state.ripple)
  const setRipple = useAppStore(state => state.setRipple)

  return (
    <Box padding={{ base: '20px', lg: '50px' }} paddingTop="0px">
      <Section size="sm" intent="secondary" color="purple" variant="outline" heading="About the website">
        <Text>
          This website is built entirely with NebulaKit components. It serves as both documentation and a live
          showcase of the system in real use. Every layout, interaction and styling decision you see here is
          produced by the same system APIs available to users. You can explore the components, patterns and
          constraints of the system by simply using the site.
        </Text>
      </Section>
      <Spacer blockSize="75px" />
      <Flex
        flexDirection={{ base: 'column', lg: 'row' }}
        justifyContent="center"
        rowGap="80px"
        columnGap={{ base: '50px', xl: '100px' }}
      >
        <Flex.Item flex="2">
          <Text typography="h1" color="purple" intent="primary">
            NebulaKit
          </Text>
          <Divider />
          <Spacer blockSize="20px" />
          <Flex
            columnGap="25px"
            rowGap="50px"
            alignItems="center"
            flexDirection={{ base: 'column', md: 'row', lg: 'column', xl: 'row' }}
          >
            <Flex.Item>
              <Text typography="h6">
                React UI system built on composition and prop inheritance, with strict rules governing
                component appearance and behavior. Designed to reduce UI entropy and keep interfaces
                consistent and maintainable as products grow over time.
              </Text>
              <Spacer blockSize="30px" />
              <Flex gap="10px" flexWrap="wrap" justifyContent={{ base: 'center', md: 'flex-start' }}>
                <Link
                  href={PageKey.playground}
                  onClick={() => {
                    navigateTo(PageKey.playground)
                  }}
                >
                  <Button
                    color="purple"
                    intent="primary"
                    iconName="arrow-right"
                    iconPlacement="right"
                    size="sm"
                  >
                    Playground
                  </Button>
                </Link>
                <Link
                  href={`${PageKey.foundations}/overview/getting-started/installation`}
                  onClick={() => {
                    navigateTo(`${PageKey.foundations}/overview/getting-started/installation`)
                  }}
                >
                  <Button
                    variant="ghost"
                    color="purple"
                    intent="primary"
                    iconName="arrow-right"
                    iconPlacement="right"
                    size="sm"
                  >
                    Getting started
                  </Button>
                </Link>
              </Flex>
            </Flex.Item>
            <Flex.Item>
              <img
                src="/captain-nebula.webp"
                width="175px"
                height="175px"
                alt="Captain Nebula"
                fetchPriority="high"
              />
            </Flex.Item>
          </Flex>
          <Divider marginBlock="50px" />
          <Flex
            alignItems="center"
            alignContent="center"
            columnGap="70px"
            rowGap="55px"
            justifyContent={{ base: 'center', lg: 'flex-start' }}
            flexDirection={{ base: 'column-reverse', md: 'row' }}
          >
            <Flex.Item>
              <Ortho />
            </Flex.Item>
            <Flex.Item>
              <Flex flexWrap="wrap" rowGap="30px" columnGap="20px" justifyContent="center">
                <Flex.Item>
                  <Text bold>Theme</Text>
                  <Segment key={theme}>
                    {THEMES.map(key => (
                      <Segment.Item key={key}>
                        <Button
                          intent={key === theme ? 'inverse' : 'tertiary'}
                          size="sm"
                          tagAttrs={{ onClick: () => setTheme(key) }}
                        >
                          {sentenceCase(key)}
                        </Button>
                      </Segment.Item>
                    ))}
                  </Segment>
                </Flex.Item>
                <Flex.Item>
                  <Text bold>Brand</Text>
                  <Select value={brand} onChange={setBrand} inlineSize="150px" size="sm" scrollAlign="center">
                    {COLORS.map(brand => (
                      <Select.Option value={brand}>{sentenceCase(brand)}</Select.Option>
                    ))}
                  </Select>
                </Flex.Item>
                <Flex.Item>
                  <Text bold>Border radius</Text>
                  <Select
                    value={borderRadiusSize}
                    onChange={setBorderRadiusSize}
                    inlineSize="150px"
                    size="sm"
                    scrollAlign="center"
                  >
                    {NEBKIT_BORDER_RADIUS_SIZES.map(n => (
                      <Select.Option value={n}>{n}</Select.Option>
                    ))}
                  </Select>
                </Flex.Item>
                <Flex.Item>
                  <Text bold>Ripple</Text>
                  <Switch checked={ripple} onChange={setRipple} />
                </Flex.Item>
              </Flex>
            </Flex.Item>
          </Flex>
          <Spacer blockSize="90px" />
          <Box
            tag="iframe"
            tagAttrs={{
              src: 'https://www.youtube-nocookie.com/embed/WBTCswhSz6g?list=PLucbUGAh96p7hH87OY-C50iiCA7LAv_Ci',
              title: 'Responsive UI, driven by props',
              allow:
                'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
              allowFullScreen: true,
            }}
            maxInlineSize="700px"
            margin={{ base: '0 auto', lg: '0px' }}
            aspectRatio="16 / 9"
          />
          <Spacer blockSize="7px" />
          <Text intent="secondary" color="gray" italic scale="compact">
            Video hosted on YouTube. Playback may set cookies.
          </Text>
        </Flex.Item>
        <Flex.Item flex="1">
          <Grid gridTemplateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: '1fr' }} gap="35px">
            <Section heading="JSX first" color="red" intent="primary" iconName="code">
              <Text intent="neutral">
                JSX is the primary development flow. CSS exists only as an internal implementation detail.
              </Text>
            </Section>
            <Section heading="Built on composition" color="red" intent="primary" iconName="rectangleCircle">
              <Text intent="neutral">
                Pure composition drives all component behavior. Functionality is never duplicated.
              </Text>
            </Section>
            <Section heading="Inheriting props" color="red" intent="primary" iconName="share-2">
              <Text intent="neutral">
                Composed functionality flows through prop inheritance, not redefinition.
              </Text>
            </Section>
            <Section heading="Enforcing semantics" color="red" intent="primary" iconName="file-code">
              <Text intent="neutral">Semantic HTML is part of the component contract.</Text>
            </Section>
            <Section heading="Orthogonal styling axes" color="red" intent="primary" iconName="atom">
              <Text intent="neutral">Styling concerns are separated and scoped to prevent interference.</Text>
            </Section>
            <Section heading="Unified drawing model" color="red" intent="primary" iconName="paintbrush">
              <Text intent="neutral">All visual output is produced through a single drawing model.</Text>
            </Section>
            <Section
              heading="Unified responsiveness"
              color="red"
              intent="primary"
              iconName="tablet-smartphone"
            >
              <Text intent="neutral">Responsive behavior follows a single explicit model.</Text>
            </Section>
            <Section heading="Resistant to entropy" color="red" intent="primary" iconName="shield-check">
              <Text intent="neutral">
                System constraints minimize UI entropy and optimize for long-term consistency.
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
              <Button size="sm">Read more</Button>
            </Link>
          </Box>
        </Flex.Item>
      </Flex>
    </Box>
  )
}
