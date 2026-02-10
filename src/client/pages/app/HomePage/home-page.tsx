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
          <Text typography="h1" color="purple" intent="primary">
            NebulaKit
          </Text>
          <Divider />
          <Spacer blockSize="20px" />
          <Hero />
          <Divider marginBlock="50px" />
          <Flex
            alignItems="center"
            alignContent="center"
            columnGap="70px"
            rowGap="55px"
            justifyContent={{ base: 'center', lg: 'flex-start' }}
            flexDirection={{ base: 'column-reverse', md: 'row' }}
          >
            <Flex.Item>
              <Ortho />
            </Flex.Item>
            <Flex.Item>
              <Preferences />
            </Flex.Item>
          </Flex>
          <Video />
        </Flex.Item>
        <Flex.Item flex="1">
          <Principles />
        </Flex.Item>
      </Flex>
      <Spacer blockSize="80px" />
      <Families />
    </Box>
  )
}
