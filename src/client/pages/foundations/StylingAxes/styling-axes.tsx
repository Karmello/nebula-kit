import { Box, HorizontalRule, MarkerList, NEB_LENGTH, Spacer, Text } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Box display="flex" flexDirection="column" rowGap={NEB_LENGTH.px_032}>
        <Box>
          <Text typography="h5" bold color="blue" intent="primary">
            Theme axis
          </Text>
          <HorizontalRule marginTop={NEB_LENGTH.px_004} marginBottom={NEB_LENGTH.px_012} />
          <Text>Theme defines the overall color scheme used to interpret surfaces and colors.</Text>
          <Spacer blockSize={NEB_LENGTH.px_008} />
          <MarkerList>
            <MarkerList.Item>
              <Text>Supported themes: light and dark</Text>
            </MarkerList.Item>
            <MarkerList.Item>
              <Text>Global theme is set via NebkitProvider</Text>
            </MarkerList.Item>
            <MarkerList.Item>
              <Text>Local theme can be set on any Box</Text>
            </MarkerList.Item>
            <MarkerList.Item>
              <Text>Themes are scoped and inherited by descendants</Text>
            </MarkerList.Item>
            <MarkerList.Item>
              <Text>The nearest theme boundary always wins</Text>
            </MarkerList.Item>
          </MarkerList>
          <Spacer blockSize={NEB_LENGTH.px_008} />
          <Text>
            Local themes allow creating isolated areas (for example a dark panel inside a light app)
            without affecting the rest of the UI.
          </Text>
        </Box>
        <Box>
          <Text typography="h5" bold color="blue" intent="primary">
            Brand axis
          </Text>
          <HorizontalRule marginTop={NEB_LENGTH.px_004} marginBottom={NEB_LENGTH.px_012} />
          <Text>Brand defines the default surface color used when no explicit color is set.</Text>
          <Spacer blockSize={NEB_LENGTH.px_008} />
          <MarkerList>
            <MarkerList.Item>
              <Text>Global brand is set via NebkitProvider</Text>
            </MarkerList.Item>
            <MarkerList.Item>
              <Text>Local brand can be set on any Box</Text>
            </MarkerList.Item>
            <MarkerList.Item>
              <Text>Brand acts as a default, not an override</Text>
            </MarkerList.Item>
            <MarkerList.Item>
              <Text>Brands are scoped and inherited by descendants</Text>
            </MarkerList.Item>
          </MarkerList>
          <Spacer blockSize={NEB_LENGTH.px_008} />
          <Text>
            Brand is typically used to define the visual identity of a section or feature.
          </Text>
        </Box>
        <Box>
          <Text typography="h5" bold color="blue" intent="primary">
            Color axis
          </Text>
          <HorizontalRule marginTop={NEB_LENGTH.px_004} marginBottom={NEB_LENGTH.px_012} />
          <Text>Color is a component-level override.</Text>
          <Spacer blockSize={NEB_LENGTH.px_008} />
          <MarkerList>
            <MarkerList.Item>
              <Text>Color always overrides brand</Text>
            </MarkerList.Item>
            <MarkerList.Item>
              <Text>Color does not propagate to children</Text>
            </MarkerList.Item>
            <MarkerList.Item>
              <Text>Color is interpreted through the active theme</Text>
            </MarkerList.Item>
            <MarkerList.Item>
              <Text>If color is set, brand is ignored for that component</Text>
            </MarkerList.Item>
          </MarkerList>
          <Spacer blockSize={NEB_LENGTH.px_008} />
          <Text>Use color when a component must be styled explicitly.</Text>
        </Box>
        <Box>
          <Text typography="h5" bold color="blue" intent="primary">
            Intent axis
          </Text>
          <HorizontalRule marginTop={NEB_LENGTH.px_004} marginBottom={NEB_LENGTH.px_012} />
          <Text>Intent defines how a drawable surface is rendered.</Text>
          <Spacer blockSize={NEB_LENGTH.px_008} />
          <MarkerList>
            <MarkerList.Item>
              <Text>Intent controls semantic meaning (neutral, tertiary, primary, etc.)</Text>
            </MarkerList.Item>
            <MarkerList.Item>
              <Text>Intent is always local to the component</Text>
            </MarkerList.Item>
            <MarkerList.Item>
              <Text>It relies on resolved theme and color/brand values</Text>
            </MarkerList.Item>
          </MarkerList>
          <Spacer blockSize={NEB_LENGTH.px_008} />
          <Text>Intent never propagates.</Text>
        </Box>
      </Box>
    </Box>
  )
}
