import { CodeSnippet } from 'client/components'
import { Box, MarkerList, Spacer, Text } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Text>Responsive values in NebulaKit are mobile-first and forward-only.</Text>
      <Spacer blockSize="xs" />
      <MarkerList>
        <MarkerList.Item>
          <Text>A value defined at base applies to all breakpoints</Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text>A value defined at a breakpoint applies from that breakpoint upward</Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text>Values are never unset automatically at later breakpoints</Text>
        </MarkerList.Item>
      </MarkerList>
      <Spacer blockSize="sm" />
      <CodeSnippet lang="tsx" code={`<Box padding={{ base: "10px", md: "50px" }} />`} />
      <Spacer blockSize="sm" />
      <Text>
        Any property typed as
        <Text tag="span" bold space="both">
          RespValue
        </Text>
        and marked as responsive in the props table can accept either a single value or an object of breakpoint-specific values,
        like in the above example where
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
      <Spacer blockSize="xs" />
      <Text>Result:</Text>
      <MarkerList>
        <MarkerList.Item>
          <Text>base, sm - 10px</Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text>md, lg, xl - 50px</Text>
        </MarkerList.Item>
      </MarkerList>
      <Spacer blockSize="sm" />
      <CodeSnippet lang="tsx" code={`<Box padding={{ base: "10px", md: "50px" }} paddingBottom="25px" />`} />
      <Spacer blockSize="sm" />
      <Text>
        When combining responsive and non-responsive props, the more specific one wins. In the above example,
        <Text tag="span" bold space="both">
          paddingBottom
        </Text>
        isn't a breakpoint object, so it applies to all breakpoints by default. Because it's more specific than
        <Text tag="span" bold space="start">
          padding
        </Text>
        , its value overrides the final bottom padding at every breakpoint.
      </Text>
      <Spacer blockSize="sm" />
      <CodeSnippet lang="tsx" code={`<Box padding={{ md: "50px" }} />`} />
      <Spacer blockSize="sm" />
      <Text>If a value is defined only at a later breakpoint, it does not affect earlier ones. Result:</Text>
      <MarkerList>
        <MarkerList.Item>
          <Text>base, sm - no padding applied</Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text>md, lg, xl - 50px</Text>
        </MarkerList.Item>
      </MarkerList>
      <Spacer blockSize="sm" />
      <CodeSnippet lang="tsx" code={`<Box padding={{ base: "10px", lg: "0px" }} />`} />
      <Spacer blockSize="sm" />
      <Text>
        Responsive values can override forward, but they never cancel earlier values. If you need a different value at a later
        breakpoint, provide it explicitly. This model keeps responsive behavior predictable, avoids hidden defaults and ensures
        styles never change implicitly when breakpoints shift.
      </Text>
    </Box>
  )
}
