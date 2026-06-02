import { Box, MarkerList, Section, Spacer, Text } from 'lib/components'
import { CodeSnippet } from 'client/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Section size="sm" heading="Only drawable Boxes participate in visual styling">
        <Text>Box exposes a drawable prop that controls whether it participates in rendering visual styles.</Text>
        <Spacer blockSize="xs" />
        <Text>By default, a Box is not drawable:</Text>
        <Spacer blockSize="xs" />
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
        <Spacer blockSize="xs" />
        <Text>This keeps layouts lightweight and avoids unnecessary styling work.</Text>
      </Section>
      <Spacer />
      <Section size="sm" heading="Drawable as a gate">
        <Text>The drawable prop acts as a gate for all visual styling.</Text>
        <Spacer blockSize="xs" />
        <Text>When drawable is enabled:</Text>
        <Spacer blockSize="xs" />
        <MarkerList>
          <MarkerList.Item>
            <Text>the Box can render a surface</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>styling props like theme, brand, color, variant, intent and surface become meaningful</Text>
          </MarkerList.Item>
        </MarkerList>
        <Spacer blockSize="xs" />
        <Text>Without drawable, these props have no visual effect.</Text>
      </Section>
      <Spacer />
      <Section size="sm" heading="Minimum required to draw a surface">
        <Text>Enabling drawable alone is not enough. To render a visible surface, the Box also needs:</Text>
        <Spacer blockSize="xs" />
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
        <Text>Both variant and intent are required. Providing only one does not produce a complete surface.</Text>
        <Spacer />
      </Section>
    </Box>
  )
}
