import { CodeSnippet } from 'client/components'
import { Box, Spacer, Text } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Text intent="neutral" bold>
        NebulaKit works smoothly with Webpack 5.
      </Text>
      <Spacer />
      <Text intent="neutral">
        The only requirement is to ensure Webpack can process CSS files, since NebulaKit ships styles as plain CSS. If you already
        have a React + Webpack setup, you only need a small addition to your configuration.
      </Text>
      <Spacer />
      <Text intent="neutral" bold>
        Install the loaders:
      </Text>
      <CodeSnippet lang="bash" code={`npm install --save-dev style-loader css-loader`} />
      <Spacer />
      <Text intent="neutral" bold>
        Then add this rule to your webpack.config.js:
      </Text>
      <CodeSnippet
        lang="tsx"
        code={`module.exports = {
  module: {
    rules: [
      {
        test: /\\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}`}
      />
      <Spacer />
      <Text>Then import styles and wrap your entire App with NebkitProvider the same as in the Vite example.</Text>
    </Box>
  )
}
