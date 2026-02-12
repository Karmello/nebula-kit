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
    <Box padding={{ base: '20px', lg: '50px' }} paddingTop="0px">
      <Flex
        flexDirection={{ base: 'column', lg: 'row' }}
        justifyContent="center"
        rowGap="80px"
        columnGap={{ base: '50px', xl: '100px' }}
      >
        <Flex.Item flex="2">
          <About />
          <Spacer blockSize="60px" />
          <Text typography="h1" color="purple" intent="primary" bold>
            NebulaKit
          </Text>
          <Divider />
          <Spacer blockSize="20px" />
          <Hero />
          <Divider marginBlock="30px" />
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
          <Spacer blockSize="70px" />
          <Principles />
        </Flex.Item>
      </Flex>
      <Spacer blockSize="80px" />
      <Families />
    </Box>
  )
}
