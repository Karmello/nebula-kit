import { Box, NEB_LENGTH, Text } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Box display="flex" flexDirection="column" gap={NEB_LENGTH.px_016}>
        <Text>
          NebulaKit is JSX first, meaning most of the time you are going to spend inside your JSX
          files, writing tags and customizing them via React props. This does not mean it is
          CSS-free or that you cannot use CSS at all. It simply means NebulaKit is designed in a way
          that encourages developers to work within a single context, staying as productive as
          possible while building applications.
        </Text>
        <Text>
          NebulaKit does not aim to replace CSS knowledge. Layout, spacing, positioning and
          responsiveness still follow the same core concepts used by the platform itself. Props on
          primitives intentionally map closely to native CSS behavior, so developers who understand
          CSS can transfer that knowledge directly into JSX without learning a separate abstraction
          language. The goal is not to hide how the web works, but to make working with it more
          compositional.
        </Text>
        <Text>
          CSS still exists and drives the entire internal styling engine. The underlying DOM element
          of each component is exposed through the
          <Text tag="span" bold space="both">
            tagAttrs
          </Text>
          prop, which allows for local overrides via the
          <Text tag="span" bold space="both">
            style
          </Text>
          attribute. You can also pass a
          <Text tag="span" bold space="both">
            className
          </Text>
          through
          <Text tag="span" bold space="both">
            tagAttrs
          </Text>
          to hook into your own CSS stylesheet. However, direct CSS overrides are not recommended
          and are intentionally discouraged, as they may interfere with how NebulaKit's internal
          styling engine works and can introduce unexpected behavior.
        </Text>
      </Box>
    </Box>
  )
}
