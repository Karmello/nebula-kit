import { Box, Text, Flex } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Flex flexDirection="column" gap="15px">
        <Text>
          NebulaKit ensures that proper semantic HTML tags are applied to each component automatically, without the developer
          needing to think about it at all. If a component is tied to a single HTML tag, it is fixed internally and not
          configurable from the outside. In some cases, multiple tags are exposed through the tag prop on a component, but only
          when this is valid from an accessibility point of view.
        </Text>
        <Text>
          When you choose a tag, the type of the tagAttrs prop is automatically adjusted so that the correct native element
          properties for that tag are available. This is achieved through polymorphic behavior implemented in the HtmlTag
          component, which is the underlying primitive used by every component in the library.
        </Text>
      </Flex>
    </Box>
  )
}
