import { Flex, Table, Text } from 'lib/components'
import { TEXT_TYPOGRAPHY, TEXT_TYPOGRAPHY_CONFIG, TextTypography } from 'lib/components/base/Text/definitions'

const MAP: Record<TextTypography, string> = {
  body: 'Default text for reading and general content. Balanced for legibility and rhythm across devices.',
  lead: 'Introductory paragraph style - larger and more open than body text, used to draw focus at the start of a section.',
  secondary: 'Supporting text such as captions under headings, helper descriptions or muted details.',
  tertiary: 'Low-contrast text for metadata or subtle status indicators; visually lighter than secondary.',
  caption: 'Smallest text size for labels, figure notes or compact UI elements.',
  h6: 'Upper-body style bridging headings and text. Works for lead-ins, callouts or compact hero banners.',
  h5: 'Small heading for titles within dense layouts - sidebars, tables or summary lines.',
  h4: 'Mid-level heading often used in cards, panels or feature blocks. Balances presence and compactness.',
  h3: 'Sub-section heading used to organize content within sections while keeping hierarchy clear.',
  h2: 'Primary section heading beneath the hero. Strong visual anchor for major content groups.',
  h1: 'Large display style used for page titles or hero sections. Commands attention without needing extra decoration.',
}

export default () => {
  return (
    <Flex flexDirection="column" gap={40}>
      <Text typography="lead">All typography styles defined in the system.</Text>
      {TEXT_TYPOGRAPHY.map(typography => (
        <Table key={typography}>
          <Table.Caption>
            <Text intent="primary" bold underline iconName="arrow-right">
              {typography}
            </Text>
          </Table.Caption>
          <Table.Header>
            <Table.HeaderRow>
              <Table.HeaderCell minInlineSize="25%">
                Tag: {TEXT_TYPOGRAPHY_CONFIG[typography].tag}
              </Table.HeaderCell>
              <Table.HeaderCell minInlineSize="25%">
                Font size: {TEXT_TYPOGRAPHY_CONFIG[typography].fontSize}
              </Table.HeaderCell>
              <Table.HeaderCell minInlineSize="25%">
                Line height: {TEXT_TYPOGRAPHY_CONFIG[typography].lineHeight}
              </Table.HeaderCell>
              <Table.HeaderCell minInlineSize="25%">
                Icon size: {TEXT_TYPOGRAPHY_CONFIG[typography].iconSize}
              </Table.HeaderCell>
            </Table.HeaderRow>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell colSpan={4}>
                <Text typography={typography}>{MAP[typography]}</Text>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      ))}
    </Flex>
  )
}
