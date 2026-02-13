import { Box, Text, Flex } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Flex flexDirection="column" gap="15px">
        <Text>
          NebulaKit is JSX first, meaning most of the time you are going to spend inside your JSX files,
          writing tags and customizing them via React props. This does not mean it is CSS-free or that you
          cannot use CSS at all. It simply means NebulaKit is designed in a way that encourages developers to
          work within a single context, staying as productive as possible while building applications.
        </Text>
        <Text>
          CSS still exists and drives the entire internal styling engine. The underlying DOM element of each
          component is exposed through the tagAttrs prop, which allows for local overrides via the style
          attribute. You can also pass a className through tagAttrs to hook into your own CSS stylesheet.
          However, direct CSS overrides are not recommended and are intentionally discouraged, as they may
          interfere with how NebulaKit's internal styling engine works and can introduce unexpected behavior.
        </Text>
        <Text>
          NebulaKit hides CSS deliberately and exposes props on primitives that map one-to-one to CSS
          properties. This allows most customization to happen directly in JSX while letting the styling
          engine perform its internal work in a predictable and consistent way.
        </Text>
      </Flex>
    </Box>
  )
}
