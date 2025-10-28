import { getCopyrightInfo } from 'client/helpers'
import { Footer, MarkerList, Spacer, Text } from 'lib/components'

export const AppFooter = () => {
  return (
    <Footer paddingBlock={15} paddingInline={25} paddingBottom={{ base: 15, lg: 35 }}>
      <Footer.Section>
        <Text bold>Project</Text>
        <Spacer blockSize={10} />
        <Text>v0.0.1</Text>
      </Footer.Section>
      <Footer.Section>
        <Text bold>Contact</Text>
        <Spacer blockSize={10} />
        <Text>nebulakit@gmail.com</Text>
      </Footer.Section>
      <Footer.Section>
        <Text bold>Legal</Text>
        <Spacer blockSize={10} />
        <MarkerList>
          <MarkerList.Item>
            <Text>License</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>Terms of Use</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>Privacy</Text>
          </MarkerList.Item>
        </MarkerList>
        <Spacer />
        <Text typography="caption" intent="primary">
          {getCopyrightInfo()}
        </Text>
      </Footer.Section>
    </Footer>
  )
}
