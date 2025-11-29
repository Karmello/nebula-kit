import { Box, Section, Spacer, Text } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Section size="sm" heading="React compatibility" intent="primary" color="blue">
        <Text intent="neutral" bold>
          NebulaKit requires React 18 or newer.
        </Text>
        <Spacer />
        <Text intent="neutral">
          The library is built on the modern React rendering model introduced in React 18, including updated
          event semantics, stable hook behavior and concurrent-safe updates. NebulaKit does not rely on any
          React-19-specific features, so it remains compatible with current and future React releases as long
          as they maintain React 18's foundational APIs.
        </Text>
      </Section>
      <Spacer blockSize={30} />
      <Section size="sm" heading="Node compatibility" intent="primary" color="blue">
        <Text intent="neutral" bold>
          NebulaKit requires Node.js 18 or newer.
        </Text>
        <Spacer />
        <Text intent="neutral">
          This ensures compatibility with the modern ESM toolchain (Vite, SWC, esbuild), native fetch and
          up-to-date performance and security guarantees. Older Node versions are not supported because they
          lack key language features and runtime behavior required for building and bundling NebulaKit
          reliably.
        </Text>
      </Section>
    </Box>
  )
}
