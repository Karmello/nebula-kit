import { Box } from 'lib/components/core/Box'
import { HorizontalRule } from 'lib/components/core/HorizontalRule'
import { MarkerList } from 'lib/components/core/MarkerList'
import { Spacer } from 'lib/components/core/Spacer'
import { Text } from 'lib/components/core/Text'
import { NEB_LENGTH } from 'lib/constants'
import { CodeSnippet } from 'client/components/reusable/CodeSnippet'

export default () => {
  return (
    <Box maxInlineSize="55rem" display="flex" flexDirection="column" rowGap={NEB_LENGTH.px_032}>
      <Box>
        <Text typography="h5" bold color="blue" intent="primary">
          StylingIsland establishes a local styling boundary
        </Text>
        <HorizontalRule marginTop={NEB_LENGTH.px_004} marginBottom={NEB_LENGTH.px_012} />
        <Text>
          Wrapping a subtree in StylingIsland creates a scoped theme and brand context for all its
          descendants without affecting the rest of the app. Under the hood, it provides both Theme
          and Brand context. All drawable Box descendants resolve their colors using the nearest
          StylingIsland.
        </Text>
        <Spacer />
        <Text>Theme and brand follow the same rules:</Text>
        <Spacer blockSize={NEB_LENGTH.px_008} />
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
      </Box>
      <Box>
        <Text typography="h5" bold color="blue" intent="primary">
          Theme defines the rules, surface makes them visible
        </Text>
        <HorizontalRule marginTop={NEB_LENGTH.px_004} marginBottom={NEB_LENGTH.px_012} />
        <Text>
          A styling island is complete only when both context and surface are defined. Setting theme
          alone changes how colors are interpreted, but does not create a visible surface.
        </Text>
        <Spacer blockSize={NEB_LENGTH.px_008} />
        <Text>How to do it properly ?</Text>
        <Spacer blockSize={NEB_LENGTH.px_008} />
        <CodeSnippet
          lang="tsx"
          code={`<StylingIsland theme="dark">
  <Box drawable bgMode="filled" intent="neutral">
    ...
  </Box>
</StylingIsland>`}
          description="Recommended pattern"
        />
        <Spacer />
        <Text>
          Components inside the island rely on the active theme to resolve contrast, states and
          colors. Without a surface, they may still render on the parent background, which can lead
          to:
        </Text>
        <Spacer blockSize={NEB_LENGTH.px_008} />
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
          Styling islands should typically use neutral surfaces (light or dark). Strong colored
          backgrounds are not recommended, as they can interfere with contrast and distort component
          states. If a colored surface is needed, prefer subtle tones.
        </Text>
      </Box>
    </Box>
  )
}
