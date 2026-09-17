import { Fragment } from 'react'

import { Box, NEB_LENGTH, Spacer, Text } from 'lib/components'
import { TEXT_TYPOGRAPHY, TextTypography } from 'lib/components/core/Text'

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
        rhythm and visual hierarchy throughout the UI.
      </Text>
      <Spacer blockSize={NEB_LENGTH.px_064} />
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
            <Box
              drawable
              borderMode="filled"
              intent="tertiary"
              marginBottom={NEB_LENGTH.px_024}
              padding={NEB_LENGTH.px_008}
            >
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
