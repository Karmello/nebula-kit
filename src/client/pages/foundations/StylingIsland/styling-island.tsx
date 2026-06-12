import { Box, MarkerList, Section, Spacer, Text } from 'lib/components'
import { CodeSnippet } from 'client/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Section size="sm" heading="Box can act as a local styling island">
        <Text>
          When theme or brand is set, the Box creates a scoped styling context for all its descendants without affecting the rest
          of the app. Under the hood, a styling island provides both Theme and Brand context. All drawable descendants resolve
          their colors using the nearest styling island.
        </Text>
        <Spacer />
        <Text>Theme and brand follow the same rules:</Text>
        <Spacer blockSize="8px" />
        <MarkerList>
          <MarkerList.Item>
            <Text>they are scoped to a subtree</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>they are inherited by descendants</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>the nearest boundary always wins</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>they do not affect anything outside the island</Text>
          </MarkerList.Item>
        </MarkerList>
      </Section>
      <Spacer />
      <Section size="sm" heading="Theme defines the rules, surface makes them visible">
        <Text>
          A styling island is complete only when both context and surface are defined. Setting theme alone changes how colors are
          interpreted, but does not create a visible surface.
        </Text>
        <Spacer blockSize="8px" />
        <Text>How to do it properly ?</Text>
        <Spacer blockSize="8px" />
        <CodeSnippet
          lang="tsx"
          code={`<Box theme="dark" drawable variant="solid" intent="neutral">
  ...
</Box>`}
          description="Recommended pattern"
        />
        <Spacer />
        <Text>
          Components inside the island rely on the active theme to resolve contrast, states and colors. Without a surface, they
          may still render on the parent background, which can lead to:
        </Text>
        <Spacer blockSize="8px" />
        <MarkerList>
          <MarkerList.Item>
            <Text>incorrect contrast</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>washed-out or overly strong states</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>inconsistent appearance (especially disabled state)</Text>
          </MarkerList.Item>
        </MarkerList>
        <Spacer />
        <Text>
          Styling islands should typically use neutral surfaces (light or dark). Strong colored backgrounds are not recommended,
          as they can interfere with contrast and distort component states. If a colored surface is needed, prefer subtle tones.
        </Text>
      </Section>
    </Box>
  )
}
