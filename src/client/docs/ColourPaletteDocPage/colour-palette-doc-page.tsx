import { capitalCase } from 'change-case'

import { Box, FlexGroup, Section } from 'lib/components'
import { Colors } from 'lib/enums'
import { Color } from 'lib/types'

const COLOR_GROUP_NAMES = [...new Set(Object.values(Colors).map(s => s.split('-')[0]))]

export const ColourPaletteDocPage = () => {
  return COLOR_GROUP_NAMES.map(name => (
    <Section
      key={name}
      headingText={capitalCase(name)}
      iconName="arrow right"
      iconColor="blue-3"
      scrollIntoView
      surfaceProps={{ size: 'l' }}
    >
      <FlexGroup
        flexContainerProps={{ flexDirection: 'row', hGapSize: 'xs-micro' }}
        flexItemProps={{ flex: 1 }}
      >
        {Object.keys(Colors)
          .filter(color => color.includes(name))
          .map(color => (
            <Box
              key={color}
              surfaceProps={{ backgroundColor: color as Color, padding: 'xs-micro' }}
              nativeDivProps={{ style: { height: '50px' } }}
            />
          ))}
      </FlexGroup>
    </Section>
  ))
}
