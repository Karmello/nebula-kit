import { getCopyrightInfo } from 'client/helpers'
import { Footer, MarkerList, Spacer, Text } from 'lib/components'

export const AppFooter = () => {
  return (
    <Footer paddingBlock={15} paddingInline={25} paddingBottom={{ base: 15, lg: 35 }}>
      <Footer.Section>
        <Text scale="compact" bold>
          Project
        </Text>
        <Spacer blockSize={10} />
        <Text scale="compact">v0.0.1</Text>
      </Footer.Section>
      <Footer.Section>
        <Text scale="compact" bold>
          Contact
        </Text>
        <Spacer blockSize={10} />
        <Text scale="compact">nebulakit@gmail.com</Text>
      </Footer.Section>
      <Footer.Section>
        <Text scale="compact" bold>
          Legal
        </Text>
        <Spacer blockSize={10} />
        <MarkerList>
          <MarkerList.Item>
            <Text scale="compact">License</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text scale="compact">Terms of Use</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text scale="compact">Privacy</Text>
          </MarkerList.Item>
        </MarkerList>
        <Spacer />
        <Text scale="compact" typography="caption" intent="primary">
          {getCopyrightInfo()}
        </Text>
      </Footer.Section>
    </Footer>
  )
}
