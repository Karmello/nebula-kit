import { Box, Divider, Flex, Spacer, Text } from 'lib/components'

import { About } from './About'
import { Families } from './Families'
import { Hero } from './Hero'
import { Ortho } from './Ortho'
import { Preferences } from './Preferences'
import { Principles } from './Principles'
import { Video } from './Video'

export const HomePage = () => {
  return (
    <Box padding={{ base: '24px', lg: '48px' }} paddingTop="4px">
      <Flex
        flexDirection={{ base: 'column', lg: 'row' }}
        justifyContent="center"
        rowGap="64px"
        columnGap={{ base: '50px', xl: '100px' }}
      >
        <Flex.Item flex="2">
          <About />
          <Spacer blockSize={{ base: '48px', lg: '48px' }} />
          <Text typography="h1" color="blue" intent="primary" bold>
            NebulaKit
          </Text>
          <Divider />
          <Spacer blockSize="24px" />
          <Hero />
          <Divider marginBlock="48px" />
          <Video />
        </Flex.Item>
        <Flex.Item flex="1">
          <Flex
            alignItems="center"
            alignContent="center"
            columnGap="48px"
            rowGap="48px"
            justifyContent="center"
            flexDirection={{ base: 'column', md: 'row-reverse' }}
          >
            <Flex.Item>
              <Preferences />
            </Flex.Item>
            <Flex.Item>
              <Ortho />
            </Flex.Item>
          </Flex>
          <Spacer blockSize="64px" />
          <Principles />
        </Flex.Item>
      </Flex>
      <Spacer blockSize="96px" />
      <Families />
    </Box>
  )
}
