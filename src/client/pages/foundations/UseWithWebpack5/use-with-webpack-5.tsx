import { CodeSnippet } from 'client/components'
import { Box, Spacer, Text } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Text intent="neutral" bold>
        NebulaKit works with Vite out of the box.
      </Text>
      <Spacer />
      <Text intent="neutral">
        No loaders, plugins or additional configuration are required. Just install the package and start
        importing components. Vite handles ESM, TypeScript and CSS natively, so everything "just works" the
        moment you pull NebulaKit into your project.
      </Text>
      <Spacer />
      <Text intent="neutral" bold>
        If you're starting fresh, you can scaffold a Vite + React project with:
      </Text>
      <CodeSnippet
        lang="bash"
        code={`npm create vite@latest my-app --template react-ts
cd my-app
npm install @nebula-kit/core`}
      />
      <Spacer />
      <Text intent="neutral" bold>
        Then import any component:
      </Text>
      <CodeSnippet
        lang="tsx"
        code={`import { NebkitProvider } from '@nebula-kit/core'
\t
export default () => {
  return <NebkitProvider theme="dark"><App /></NebkitProvider>
}`}
      />
      <Spacer />
      <Text>
        That's it - no setup friction, no config files, no bundler pitfalls. Vite is the smoothest environment
        to develop with NebulaKit and serves as the reference setup for the rest of the ecosystem.
      </Text>
    </Box>
  )
}
