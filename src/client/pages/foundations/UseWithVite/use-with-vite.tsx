import { Box, Spacer, Text } from 'lib/components'
import { CodeSnippet } from 'client/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Text intent="neutral" bold>
        NebulaKit works with Vite out of the box.
      </Text>
      <Spacer blockSize="sm" />
      <Text intent="neutral">
        No loaders, plugins or additional configuration are required. Just install the package and start importing components.
        Vite handles ESM, TypeScript and CSS natively, so everything "just works" the moment you pull NebulaKit into your project.
      </Text>
      <Spacer />
      <CodeSnippet
        lang="bash"
        code={`npm create vite@latest my-app --template react-ts
cd my-app
npm install @nebula-kit/core
npm install @nebula-kit-private/pro`}
        description="If you're starting fresh, you can scaffold a Vite + React project with:"
      />
      <Spacer />
      <CodeSnippet
        lang="tsx"
        code={`import { NebkitProvider } from '@nebula-kit/core'

import '@nebula-kit/core/styles.css'
import '@nebula-kit-private/pro/styles.css'

export default () => {
  return <NebkitProvider theme="dark"><App /></NebkitProvider>
}`}
        description="Then wrap your entire App with NebkitProvider and import styles:"
      />
      <Spacer blockSize="lg" />
      <Text>
        That's it - no setup friction, no config files, no bundler pitfalls. Vite gives you the smoothest NebulaKit experience
        right out of the box.
      </Text>
    </Box>
  )
}
