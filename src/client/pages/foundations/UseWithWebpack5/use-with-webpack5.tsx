import { CodeSnippet } from 'client/components'
import { Box, Spacer, Text } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Text intent="neutral" bold>
        NebulaKit works smoothly with Webpack 5.
      </Text>
      <Spacer blockSize="15px" />
      <Text intent="neutral">
        The only requirement is to ensure Webpack can process CSS files, since NebulaKit ships styles as plain CSS. If you already
        have a React + Webpack setup, you only need a small addition to your configuration.
      </Text>
      <Spacer />
      <CodeSnippet lang="bash" code={`npm install --save-dev style-loader css-loader`} description="Install the loaders:" />
      <Spacer />
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
        description="Then add this rule to your webpack.config.js:"
      />
      <Spacer blockSize="40px" />
      <Text>Then import styles and wrap your entire App with NebkitProvider the same as in the Vite example.</Text>
    </Box>
  )
}
