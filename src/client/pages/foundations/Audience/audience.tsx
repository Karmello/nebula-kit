import { Box, Flex, Text } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Flex flexDirection="column" gap="16px">
        <Text>
          NebulaKit is specific. It is not meant to cover every possible approach to building user interfaces. That means it will
          not be a good fit for every developer or every company. It is not designed to satisfy everyone, instead it deliberately
          narrows its audience to people with specific needs and focuses on making that audience as happy as possible.
        </Text>
        <Text>
          It is definitely not for someone who wants to style every single detail of their product. Going down that path usually
          leads to creating a custom styling system, theming engine and design tokens from scratch. In such a case, using
          NebulaKit would mean fighting against the system rather than taking advantage of it.
        </Text>
        <Text>
          You can think of NebulaKit as a strongly opinionated framework, similar in spirit to Android or iOS user interface
          systems, rather than a "build your own theming engine" tool. It intentionally hides certain concerns, quietly takes hard
          decisions for you, and allows you to focus on building your application.
        </Text>
        <Text>
          So who is it for? If your goal is to customize the look of your application without reinventing the wheel, move fast
          while staying stable, and avoid worrying about the correctness of underlying mechanisms, NebulaKit may be a good fit. It
          is designed for developers who want production-ready components but also value the freedom to construct their own
          components using the same building blocks the system itself uses.
        </Text>
        <Text>
          NebulaKit works well for most common user interfaces, because many patterns on the web repeat over and over again.
          Identifying and supporting these well-known patterns is exactly what the system is designed to do.
        </Text>
      </Flex>
    </Box>
  )
}
