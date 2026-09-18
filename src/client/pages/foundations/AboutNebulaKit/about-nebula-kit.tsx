import { Box, HorizontalRule, MarkerList, NEB_LENGTH, StylingIsland, Text } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem" display="flex" flexDirection="column" gap={NEB_LENGTH.px_032}>
      <Text typography="lead" intent="primary">
        Here is a short explanation that can help you decide if this is actually the right tool for
        your next project.
      </Text>
      <Box>
        <StylingIsland brand="red">
          <Text typography="h5" intent="strong">
            What is NebulaKit not?
          </Text>
          <HorizontalRule marginTop={NEB_LENGTH.px_004} marginBottom={NEB_LENGTH.px_016} />
          <MarkerList gap={NEB_LENGTH.px_012}>
            <MarkerList.Item>
              <Text intent="strong">
                It is not a framework for building your own design system from scratch
              </Text>
            </MarkerList.Item>
            <MarkerList.Item>
              <Text intent="strong">
                It is not a library where you configure every color and token before it looks right
              </Text>
            </MarkerList.Item>
            <MarkerList.Item>
              <Text intent="strong">
                It is not an unstyled library that only gives you behavior and leaves the look up to
                you
              </Text>
            </MarkerList.Item>
            <MarkerList.Item>
              <Text intent="strong">
                It is not a set of components you copy into your project and maintain on your own,
                cut off from future updates
              </Text>
            </MarkerList.Item>
          </MarkerList>
        </StylingIsland>
      </Box>
      <Box>
        <StylingIsland brand="blue">
          <Text typography="h5" intent="strong">
            What is it then?
          </Text>
          <HorizontalRule marginTop={NEB_LENGTH.px_004} marginBottom={NEB_LENGTH.px_016} />
          <MarkerList gap={NEB_LENGTH.px_012}>
            <MarkerList.Item>
              <Text intent="strong">
                It is an opinionated framework with most UI decisions already made for you, so you
                can focus on your product instead of the look and ship faster
              </Text>
            </MarkerList.Item>
            <MarkerList.Item>
              <Text intent="strong">
                It is a UI system that gives you enough room to configure things your way, without
                ever stepping outside the rules that keep it consistent
              </Text>
            </MarkerList.Item>
            <MarkerList.Item>
              <Text intent="strong">
                It is a library providing components to cover most common UI use cases, working out
                of the box and accessible by default
              </Text>
            </MarkerList.Item>
            <MarkerList.Item>
              <Text intent="strong">
                It is a systematically maintained project, giving you regular updates and new
                versions to build on
              </Text>
            </MarkerList.Item>
          </MarkerList>
        </StylingIsland>
      </Box>
    </Box>
  )
}
