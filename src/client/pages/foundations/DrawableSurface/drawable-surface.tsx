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
        <Text typography="h6" bold color="blue" intent="primary">
          Only drawable Boxes participate in visual styling
        </Text>
        <HorizontalRule marginTop={NEB_LENGTH.px_004} marginBottom={NEB_LENGTH.px_012} />
        <Text>
          Box exposes a drawable prop that controls whether it participates in rendering visual
          styles.
        </Text>
        <Spacer blockSize={NEB_LENGTH.px_008} />
        <Text>By default, a Box is not drawable:</Text>
        <Spacer blockSize={NEB_LENGTH.px_008} />
        <MarkerList>
          <MarkerList.Item>
            <Text>it does not render background or surface styles</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>it does not apply theme, brand, color, variant or intent</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>it behaves like a structural element (similar to a div)</Text>
          </MarkerList.Item>
        </MarkerList>
        <Spacer blockSize={NEB_LENGTH.px_008} />
        <Text>This keeps layouts lightweight and avoids unnecessary styling work.</Text>
      </Box>
      <Box>
        <Text typography="h6" bold color="blue" intent="primary">
          Drawable as a gate
        </Text>
        <HorizontalRule marginTop={NEB_LENGTH.px_004} marginBottom={NEB_LENGTH.px_012} />
        <Text>The drawable prop acts as a gate for all visual styling.</Text>
        <Spacer blockSize={NEB_LENGTH.px_008} />
        <Text>When drawable is enabled:</Text>
        <Spacer blockSize={NEB_LENGTH.px_008} />
        <MarkerList>
          <MarkerList.Item>
            <Text>the Box can render a surface</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>
              styling props like theme, brand, color, variant, intent and surface become meaningful
            </Text>
          </MarkerList.Item>
        </MarkerList>
        <Spacer blockSize={NEB_LENGTH.px_008} />
        <Text>Without drawable, these props have no visual effect.</Text>
      </Box>
      <Box>
        <Text typography="h6" bold color="blue" intent="primary">
          Minimum required to draw a surface
        </Text>
        <HorizontalRule marginTop={NEB_LENGTH.px_004} marginBottom={NEB_LENGTH.px_012} />
        <Text>
          Enabling drawable alone is not enough. To render a visible surface, the Box also needs:
        </Text>
        <Spacer blockSize={NEB_LENGTH.px_008} />
        <MarkerList>
          <MarkerList.Item>
            <Text>a variant (how it is drawn)</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>an intent (what semantic tone it uses)</Text>
          </MarkerList.Item>
        </MarkerList>
        <CodeSnippet lang="tsx" code={'<Box drawable variant="solid" intent="neutral" />'} />
        <Spacer />
        <Text>
          Both variant and intent are required. Providing only one does not produce a complete
          surface.
        </Text>
      </Box>
    </Box>
  )
}
