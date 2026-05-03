import { Box, Divider, Flex, Spacer, Text } from 'lib/components'

import { About } from './About'
import { Hero } from './Hero'
import { Principles } from './Principles'
import { Ortho } from './Ortho'
import { Preferences } from './Preferences'
import { Video } from './Video'
import { Families } from './Families'

export const HomePage = () => {
  return (
    <Box padding={{ base: 'md', lg: 'xl' }} paddingTop="0px">
      <Flex
        flexDirection={{ base: 'column', lg: 'row' }}
        justifyContent="center"
        rowGap="80px"
        columnGap={{ base: '50px', xl: '100px' }}
      >
        <Flex.Item flex="2">
          <About />
          <Spacer blockSize={{ base: 'lg', lg: 'xl' }} />
          <Text typography="h1" color="blue" intent="primary" bold>
            NebulaKit
          </Text>
          <Divider />
          <Spacer blockSize="md" />
          <Hero />
          <Divider marginBlock="lg" />
          <Video />
        </Flex.Item>
        <Flex.Item flex="1">
          <Flex
            alignItems="center"
            alignContent="center"
            columnGap="50px"
            rowGap="50px"
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
          <Spacer blockSize="xl" />
          <Principles />
        </Flex.Item>
      </Flex>
      <Spacer blockSize="xl" />
      <Families />
    </Box>
  )
}
