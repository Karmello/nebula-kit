import { Box, Flex, Section, Text } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Flex flexDirection="column" gap={30}>
        <Text typography="lead">
          All typography styles defined, including headings, body text, and supporting text levels.
        </Text>
        <Section heading="Body (16px, 1.6)">
          <Text typography="body">
            Default text for reading and general content. Balanced for legibility and rhythm across devices.
          </Text>
        </Section>
        <Section heading="Lead (18px, 1.6)">
          <Text typography="lead">
            Introductory paragraph style - larger and more open than body text, used to draw focus at the
            start of a section.
          </Text>
        </Section>
        <Section heading="Secondary (14px, 1.5)">
          <Text typography="secondary">
            Supporting text such as captions under headings, helper descriptions, or muted details.
          </Text>
        </Section>
        <Section heading="Tertiary (14px, 1.5)">
          <Text typography="tertiary">
            Low-contrast text for metadata or subtle status indicators; visually lighter than secondary.
          </Text>
        </Section>
        <Section heading="Caption (12px, 1.4)">
          <Text typography="caption">
            Smallest text size for labels, figure notes, or compact UI elements.
          </Text>
        </Section>
        <Section heading="Heading 6 (20px, 1.3)">
          <Text typography="h6">
            Upper-body style bridging headings and text. Works for lead-ins, callouts, or compact hero
            banners.
          </Text>
        </Section>
        <Section heading="Heading 5 (24px, 1.3)">
          <Text typography="h5">
            Small heading for titles within dense layouts - sidebars, tables, or summary lines.
          </Text>
        </Section>
        <Section heading="Heading 4 (30px, 1.25)">
          <Text typography="h4">
            Mid-level heading often used in cards, panels, or feature blocks. Balances presence and
            compactness.
          </Text>
        </Section>
        <Section heading="Heading 3 (36px, 1.25)">
          <Text typography="h3">
            Sub-section heading used to organize content within sections while keeping hierarchy clear.
          </Text>
        </Section>
        <Section heading="Heading 2 (48px, 1.2)">
          <Text typography="h2">
            Primary section heading beneath the hero. Strong visual anchor for major content groups.
          </Text>
        </Section>
        <Section heading="Heading 1 (60px, 1.1)">
          <Text typography="h1">
            Large display style used for page titles or hero sections. Commands attention without needing
            extra decoration.
          </Text>
        </Section>
      </Flex>
    </Box>
  )
}
