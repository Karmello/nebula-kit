import { Box, MarkerList, Section, Spacer, Text } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Section heading="Theme axis" size="sm">
        <Text>Theme defines the overall color scheme used to interpret surfaces and colors.</Text>
        <Spacer blockSize="10px" />
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
        <Spacer blockSize="10px" />
        <Text>
          Local themes allow creating isolated areas (for example a dark panel inside a light app) without affecting the rest of
          the UI.
        </Text>
      </Section>
      <Spacer blockSize="40px" />
      <Section heading="Brand axis" size="sm">
        <Text>Brand defines the default surface color used when no explicit color is set.</Text>
        <Spacer blockSize="10px" />
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
        <Spacer blockSize="10px" />
        <Text>Brand is typically used to define the visual identity of a section or feature.</Text>
      </Section>
      <Spacer blockSize="40px" />
      <Section heading="Color axis" size="sm">
        <Text>Color is a component-level override.</Text>
        <Spacer blockSize="10px" />
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
        <Spacer blockSize="10px" />
        <Text>Use color when a component must be styled explicitly.</Text>
      </Section>
      <Spacer blockSize="40px" />
      <Section heading="Variant and intent axes" size="sm">
        <Text>Variant and intent define how a drawable surface is rendered.</Text>
        <Spacer blockSize="10px" />
        <MarkerList>
          <MarkerList.Item>
            <Text>Variant controls structure (solid, outline, soft-outline, ghost)</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>Intent controls semantic meaning (neutral, tertiary, primary, etc.)</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>Both are always local to the component</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>They rely on resolved theme and color/brand values</Text>
          </MarkerList.Item>
        </MarkerList>
        <Spacer blockSize="10px" />
        <Text>Variant and intent never propagate.</Text>
      </Section>
    </Box>
  )
}
