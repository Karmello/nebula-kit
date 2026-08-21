import { Box, Divider, NEB_LENGTH, Spacer, Text } from 'lib/components'

import { About } from './About'
import { Families } from './Families'
import { Hero } from './Hero'
import { Ortho } from './Ortho'
import { Preferences } from './Preferences'
import { Principles } from './Principles'
import { Video } from './Video'

export const HomePage = () => {
  return (
    <Box
      padding={{ base: NEB_LENGTH.px_024, lg: NEB_LENGTH.px_048 }}
      paddingTop={NEB_LENGTH.px_004}
    >
      <Box
        display="flex"
        flexDirection={{ base: 'column', lg: 'row' }}
        justifyContent="center"
        rowGap={NEB_LENGTH.px_064}
        columnGap={{ base: NEB_LENGTH.px_048, xl: NEB_LENGTH.px_096 }}
      >
        <Box flex="2">
          <About />
          <Spacer blockSize={{ base: NEB_LENGTH.px_048, lg: NEB_LENGTH.px_048 }} />
          <Text typography="h1" color="blue" intent="primary" bold>
            NebulaKit
          </Text>
          <Divider />
          <Spacer blockSize={NEB_LENGTH.px_024} />
          <Hero />
          <Divider marginBlock={NEB_LENGTH.px_048} />
          <Video />
        </Box>
        <Box flex="1">
          <Box
            display="flex"
            alignItems="center"
            alignContent="center"
            columnGap={NEB_LENGTH.px_048}
            rowGap={NEB_LENGTH.px_048}
            justifyContent="center"
            flexDirection={{ base: 'column', md: 'row-reverse' }}
          >
            <Box>
              <Preferences />
            </Box>
            <Box>
              <Ortho />
            </Box>
          </Box>
          <Spacer blockSize={NEB_LENGTH.px_064} />
          <Principles />
        </Box>
      </Box>
      <Spacer blockSize={NEB_LENGTH.px_096} />
      <Families />
    </Box>
  )
}
