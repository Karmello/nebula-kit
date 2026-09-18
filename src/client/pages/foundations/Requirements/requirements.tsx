import { Box, HorizontalRule, NEB_LENGTH, Spacer, Text } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem" display="flex" flexDirection="column" rowGap={NEB_LENGTH.px_032}>
      <Box>
        <Text typography="h6" bold color="blue" intent="primary">
          Node compatibility
        </Text>
        <HorizontalRule marginTop={NEB_LENGTH.px_004} marginBottom={NEB_LENGTH.px_012} />
        <Text intent="neutral" bold>
          NebulaKit requires Node.js 18 or newer.
        </Text>
        <Spacer blockSize={NEB_LENGTH.px_006} />
        <Text intent="neutral">
          This ensures compatibility with the modern ESM toolchain (Vite, SWC, esbuild), native
          fetch and up-to-date performance and security guarantees. Older Node versions are not
          supported because they lack key language features and runtime behavior required for
          building and bundling NebulaKit reliably.
        </Text>
      </Box>
      <Box>
        <Text typography="h6" bold color="blue" intent="primary">
          React compatibility
        </Text>
        <HorizontalRule marginTop={NEB_LENGTH.px_004} marginBottom={NEB_LENGTH.px_012} />
        <Text intent="neutral" bold>
          NebulaKit requires React 18 or newer.
        </Text>
        <Spacer blockSize={NEB_LENGTH.px_006} />
        <Text intent="neutral">
          The library is built on the modern React rendering model introduced in React 18, including
          updated event semantics, stable hook behavior and concurrent-safe updates. NebulaKit does
          not rely on any React-19-specific features, so it remains compatible with current and
          future React releases as long as they maintain React 18's foundational APIs.
        </Text>
      </Box>
      <Box>
        <Text typography="h6" bold color="blue" intent="primary">
          Bundler compatibility
        </Text>
        <HorizontalRule marginTop={NEB_LENGTH.px_004} marginBottom={NEB_LENGTH.px_016} />
        <Box display="flex" flexDirection="column" rowGap={NEB_LENGTH.px_024}>
          <Box>
            <Text intent="neutral" bold>
              NebulaKit works best with modern ESM-first build tools.
            </Text>
            <Spacer blockSize={NEB_LENGTH.px_006} />
            <Text intent="neutral">
              NebulaKit is designed around the modern JavaScript toolchain and has first-class
              support for Vite and Webpack 5. These bundlers handle ESM, TypeScript and CSS modules
              in a way that aligns with NebulaKit's architecture and build outputs.
            </Text>
          </Box>
          <Box>
            <Text intent="neutral" bold>
              Vite (recommended)
            </Text>
            <Spacer blockSize={NEB_LENGTH.px_006} />
            <Text intent="neutral">
              Vite offers the fastest development experience and requires virtually no
              configuration. NebulaKit works out of the box, with styles and components resolving
              automatically in both dev and production builds.
            </Text>
          </Box>
          <Box>
            <Text intent="neutral" bold>
              Webpack 5 (supported)
            </Text>
            <Spacer blockSize={NEB_LENGTH.px_006} />
            <Text intent="neutral">
              NebulaKit also works with Webpack 5. The only additional requirement is enabling CSS
              loading via style-loader and css-loader. Once configured, usage is identical to Vite.
            </Text>
          </Box>
          <Box>
            <Text intent="neutral" bold>
              Webpack 4 (not recommended)
            </Text>
            <Spacer blockSize={NEB_LENGTH.px_006} />
            <Text intent="neutral">
              NebulaKit may work with Webpack 4 but it is not officially supported. Webpack 4
              requires additional plugins for CSS extraction, manual Babel configuration and lacks
              modern module-resolution guarantees.
            </Text>
          </Box>
          <Box>
            <Text intent="neutral" bold>
              Create React App (not recommended)
            </Text>
            <Spacer blockSize={NEB_LENGTH.px_006} />
            <Text intent="neutral">
              Create React App (CRA) is deprecated and not officially supported. NebulaKit may work,
              but we recommend migrating to a newer bundling environment.
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
