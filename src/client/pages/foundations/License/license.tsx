import { useNavigateTo } from 'client/services'
import { getCopyrightInfo } from 'client/helpers'
import { Box, Text, Spacer, Link } from 'lib/components'

export default () => {
  const navigateTo = useNavigateTo()

  return (
    <Box maxInlineSize="55rem">
      <Text>
        NebulaKit is available for personal and commercial use under a proprietary license. You're free to use
        it in your own projects, subject to the terms outlined by the author. Redistribution or resale of the
        library itself is not permitted.
      </Text>
      <Spacer />
      <Text>
        Certain advanced features and components are available under a paid license. Details can be found on
        the{' '}
        <Link
          href="/pricing"
          onClick={() => {
            navigateTo('/pricing')
          }}
        >
          <Text color="blue" intent="primary">
            Pricing page
          </Text>
        </Link>
        .
      </Text>
      <Spacer />
      <Text italic>{getCopyrightInfo()}</Text>
    </Box>
  )
}
