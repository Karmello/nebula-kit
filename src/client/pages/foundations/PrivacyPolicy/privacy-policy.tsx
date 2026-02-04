import { Box, MarkerList, Spacer, Text } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Text>
        NebulaKit respects your privacy and only collects the minimum information needed to provide its
        services.
      </Text>
      <Spacer />
      <MarkerList gap="15px">
        <MarkerList.Item>
          <Text bold>Account registration</Text>
          <Text>
            When you register, basic account information such as email is collected. This data is used solely
            for authentication, license management and support.
          </Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text bold>Payments</Text>
          <Text>
            Payments are processed through Stripe. Any personal or payment information you provide during
            checkout is handled securely by Stripe in accordance with their privacy policy.
          </Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text bold>Analytics</Text>
          <Text>
            This website collects basic analytics to understand visit patterns - such as where visitors come
            from, how often they return and which pages are viewed. This information is used solely for
            statistical purposes and does not include any personally identifiable data.
          </Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text bold>Embedded media</Text>
          <Text>
            This website may include embedded content hosted by third-party providers such as YouTube. Videos
            are loaded using YouTube's privacy-enhanced mode (youtube-nocookie.com). No cookies or tracking
            data are set by YouTube unless you actively interact with the embedded player, such as by clicking
            play. Playback of embedded media may result in data being processed by the respective provider in
            accordance with their privacy policy.
          </Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text bold>Communication</Text>
          <Text>
            In case of contact via email, the information you provide will be used only to respond to your
            inquiry.
          </Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text bold>Data retention and security</Text>
          <Text>
            Only essential data is stored, for as long as it's needed to provide services or meet legal
            requirements. Information is never sold or shared with third parties.
          </Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text bold>Updates</Text>
          <Text>
            This policy may evolve alongside NebulaKit. The latest version will always be available on this
            page.
          </Text>
        </MarkerList.Item>
      </MarkerList>
    </Box>
  )
}
