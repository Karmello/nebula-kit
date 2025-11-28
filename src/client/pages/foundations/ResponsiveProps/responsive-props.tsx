import { CodeSnippet } from 'client/components'
import { Box, Spacer, Text } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Text>
        Any property typed as{' '}
        <Text tag="span" bold space="end">
          RespValue
        </Text>
        and marked as responsive in the props table can accept either a single value or an object of
        breakpoint-specific values, like in this example where
        <Text tag="span" bold space="both">
          padding
        </Text>
        changes between the
        <Text tag="span" bold space="both">
          base
        </Text>
        and
        <Text tag="span" bold space="both">
          md
        </Text>
        breakpoints.
      </Text>
      <Spacer blockSize={20} />
      <CodeSnippet lang="tsx" code={`<Box padding={{ base: 10, md: 50 }} />`} />
      <Spacer blockSize={40} />
      <Text>When combining responsive and non-responsive props, the more specific one wins.</Text>
      <Spacer blockSize={20} />
      <CodeSnippet lang="tsx" code={`<Box padding={{ base: 10, md: 50 }} paddingBottom={25} />`} />
      <Spacer blockSize={20} />
      <Text>
        In the above example,
        <Text tag="span" bold space="both">
          paddingBottom
        </Text>
        isn't a breakpoint object, so it applies to all breakpoints by default. Because it's more specific
        than
        <Text tag="span" bold space="start">
          padding
        </Text>
        , its value overrides the final bottom padding at every breakpoint.
      </Text>
    </Box>
  )
}
