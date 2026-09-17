import { Box, NEB_LENGTH, Text } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem" display="flex" flexDirection="column" gap={NEB_LENGTH.px_016}>
      <Text>
        NebulaKit ensures that proper semantic HTML tags are applied to each component
        automatically, without the developer needing to think about it at all. If a component is
        tied to a single HTML tag, it is fixed internally and not configurable from the outside. In
        some cases, multiple tags are exposed through the elemTag prop on a component, but only when
        this is valid from an accessibility point of view.
      </Text>
      <Text>
        When you choose a tag, the type of the elemAttrs prop is automatically adjusted so that the
        correct native element properties for that tag are available. This is achieved through
        polymorphic behavior implemented in the
        <Text elemTag="span" bold space="both">
          HtmlElem
        </Text>
        component, which is the underlying primitive used by every component in the library.
      </Text>
    </Box>
  )
}
