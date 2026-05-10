import { Fragment } from 'react'

import { Box, Grid, Spacer, Table, Text } from 'lib/components'
import { TEXT_TYPOGRAPHY, TextTypography } from 'lib/components/core/base/Text'
import { TYPOGRAPHY_TOKENS } from 'lib/definitions'

const MAP: Record<TextTypography, string> = {
  body: 'Default text for reading and general content. Balanced for legibility and rhythm across devices.',
  lead: 'Introductory paragraph style - larger and more open than body text, used to draw focus at the start of a section.',
  small:
    'Reduced body text for secondary content. Used for descriptions, helper text or supporting copy that remains part of the reading flow.',
  caption:
    'Smallest text size for annotations and metadata. Used for labels, figure captions, timestamps or compact UI notes outside the main content flow.',
  h6: 'Upper-body style bridging headings and text. Works for lead-ins, callouts or compact hero banners.',
  h5: 'Small heading for titles within dense layouts - sidebars, tables or summary lines.',
  h4: 'Mid-level heading often used in cards, panels or feature blocks. Balances presence and compactness.',
  h3: 'Sub-section heading used to organize content within sections while keeping hierarchy clear.',
  h2: 'Primary section heading beneath the hero. Strong visual anchor for major content groups.',
  h1: 'Large display style used for page titles or hero sections. Commands attention without needing extra decoration.',
}

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Text>
        Typography defines the set of semantic text styles used across the system. Each typography preset combines font size, line
        height and structural intent to create consistent reading rhythm and visual hierarchy throughout the UI. Typography values
        are exposed as reusable CSS custom properties, allowing the same styles to be referenced directly in custom layouts,
        markdown content and external components outside the NebulaKit primitives.
      </Text>
      <Spacer blockSize="xl" />
      <Table paddingBlock="10px" paddingInline="15px">
        <Table.Header>
          <Table.HeaderRow>
            <Table.HeaderCell>Typography</Table.HeaderCell>
            <Table.HeaderCell>CSS token names</Table.HeaderCell>
            <Table.HeaderCell>Resolved value</Table.HeaderCell>
          </Table.HeaderRow>
        </Table.Header>
        <Table.Body>
          {Object.keys(TYPOGRAPHY_TOKENS).map(key => {
            const fontSize: string = (TYPOGRAPHY_TOKENS[key as never] as any).fontSize.replace('var(', '').replace(')', '')

            const lineHeight: string = (TYPOGRAPHY_TOKENS[key as never] as any).lineHeight.replace('var(', '').replace(')', '')

            return (
              <Table.Row key={key}>
                <Table.Cell>
                  <Text bold intent="primary">
                    {key}
                  </Text>
                </Table.Cell>
                <Table.Cell>
                  <Text italic>{fontSize}</Text>
                  <Text italic>{lineHeight}</Text>
                </Table.Cell>
                <Table.Cell>
                  <Text>{getComputedStyle(document.documentElement).getPropertyValue(fontSize)}</Text>
                  <Text>{getComputedStyle(document.documentElement).getPropertyValue(lineHeight)}</Text>
                </Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
      <Spacer blockSize="3xl" />
      <Grid
        gridTemplateColumns={{
          base: '1fr',
          md: 'max-content minmax(0, 1fr)',
        }}
        columnGap="lg"
      >
        {TEXT_TYPOGRAPHY.map(typography => (
          <Fragment key={typography}>
            <Text intent="primary" bold>
              {typography}
            </Text>
            <Box drawable variant="outline" intent="muted" marginBottom="md">
              <Text intent="neutral" typography={typography}>
                {MAP[typography]}
              </Text>
            </Box>
          </Fragment>
        ))}
      </Grid>
    </Box>
  )
}
