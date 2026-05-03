import { CodeSnippet } from 'client/components'
import { Box, Link, Section, Spacer, Text } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Section size="sm" heading="Core bundle" iconName="arrow-down" intent="primary">
        <Text intent="neutral">The Core bundle is published on the public npm registry.</Text>
        <Link href="https://www.npmjs.com/package/@nebula-kit/core" target="_blank">
          <Text intent="primary" color="blue" iconName="external-link" iconPlacement="right">
            https://www.npmjs.com/package/@nebula-kit/core
          </Text>
        </Link>
        <Spacer blockSize="xs" />
        <CodeSnippet lang="bash" code="npm install @nebula-kit/core" description="Install with NPM" />
        <Spacer blockSize="xs" />
        <CodeSnippet lang="bash" code="yarn add @nebula-kit/core" description="Install with Yarn" />
      </Section>
      <Spacer blockSize="lg" />
      <Section size="sm" heading="Pro bundle" iconName="arrow-down" intent="primary">
        <Text intent="neutral">The Pro bundle is distributed through a private registry.</Text>
        <Spacer blockSize="xs" />
        <CodeSnippet
          lang="log"
          code={`@nebula-kit-private:registry=https://api.nebulakit.dev/registry
//api.nebulakit.dev/registry/:_authToken=\${NEB_TOKEN}\
\nalways-auth=true
`}
          description="To access it, add the following to your project's .npmrc file"
        />
        <Spacer blockSize="3xs" />
        <Text typography="caption" intent="secondary" color="gray">
          NEB_TOKEN is your personal license key used to authenticate access to the Pro bundle. You'll find it in your NebulaKit
          account dashboard after subscribing.
        </Text>
        <Spacer blockSize="xs" />
        <CodeSnippet lang="bash" code="npm install @nebula-kit-private/pro" description="Install with NPM" />
        <Spacer blockSize="xs" />
        <CodeSnippet lang="bash" code="yarn add @nebula-kit-private/pro" description="Install with Yarn" />
      </Section>
    </Box>
  )
}
