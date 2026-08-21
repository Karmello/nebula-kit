import { Fragment } from 'react'

import { Box, NEB_LENGTH, Spacer, Table, Text } from 'lib/components'
import { TEXT_TYPOGRAPHY, TextTypography } from 'lib/components/core/Text'
import { TYPOGRAPHY_MAP } from 'lib/constants'

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
        Typography defines the set of semantic text styles used across the system. Each typography
        preset combines font size, line height and structural intent to create consistent reading
        rhythm and visual hierarchy throughout the UI. Typography values are exposed as reusable CSS
        custom properties, allowing the same styles to be referenced directly in custom layouts,
        markdown content and external components outside the NebulaKit primitives.
      </Text>
      <Spacer blockSize={NEB_LENGTH.px_048} />
      <Table paddingBlock={NEB_LENGTH.px_012} paddingInline={NEB_LENGTH.px_016}>
        <Table.Header>
          <Table.HeaderRow>
            <Table.HeaderCell>Typography</Table.HeaderCell>
            <Table.HeaderCell>CSS token names</Table.HeaderCell>
            <Table.HeaderCell>Resolved value</Table.HeaderCell>
          </Table.HeaderRow>
        </Table.Header>
        <Table.Body>
          {Object.keys(TYPOGRAPHY_MAP).map(key => {
            const fontSize: string = (TYPOGRAPHY_MAP[key as never] as any).fontSize
            const lineHeight: string = (TYPOGRAPHY_MAP[key as never] as any).lineHeight

            return (
              <Table.Row key={key}>
                <Table.Cell>
                  <Text bold intent="primary">
                    {key}
                  </Text>
                </Table.Cell>
                <Table.Cell>
                  <Text italic noWrap>
                    {`--neb-typography-${key}-font-size`},
                  </Text>
                  <Text italic noWrap>{`--neb-typography-${key}-line-height`}</Text>
                </Table.Cell>
                <Table.Cell>
                  <Text>{fontSize},</Text>
                  <Text>{lineHeight}</Text>
                </Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
      <Spacer blockSize={NEB_LENGTH.px_096} />
      <Box
        display="grid"
        gridTemplateColumns={{
          base: '1fr',
          md: 'max-content minmax(0, 1fr)',
        }}
        columnGap={NEB_LENGTH.px_048}
      >
        {TEXT_TYPOGRAPHY.map(typography => (
          <Fragment key={typography}>
            <Text intent="primary" bold>
              {typography}
            </Text>
            <Box drawable variant="outline" intent="muted" marginBottom={NEB_LENGTH.px_024}>
              <Text intent="neutral" typography={typography}>
                {MAP[typography]}
              </Text>
            </Box>
          </Fragment>
        ))}
      </Box>
    </Box>
  )
}
