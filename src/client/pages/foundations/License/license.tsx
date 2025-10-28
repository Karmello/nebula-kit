import { useNavigateTo } from 'client/services'
import { Box, Text, Spacer } from 'lib/components'
import { getCopyrightInfo } from 'client/helpers'

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
        <Text
          tag="a"
          intent="info"
          tagAttrs={{
            href: '/pricing',
            onClick: e => {
              e.preventDefault()
              navigateTo('/pricing')
            },
          }}
        >
          Pricing page
        </Text>
        .
      </Text>
      <Spacer />
      <Text italic>{getCopyrightInfo()}</Text>
    </Box>
  )
}
