import { Box, MarkerList, Section, Spacer, Text } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Text>
        NebulaKit resolves visual styles using two independent axes: theme and brand. Both can be applied
        globally or locally and are resolved through the nearest drawable Box.
      </Text>
      <Spacer blockSize="40px" />
      <Section heading="Theme" size="sm">
        <Text>Theme defines the overall color scheme used to interpret surfaces and colors.</Text>
        <Spacer />
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
        <Spacer />
        <Text>
          Local themes allow creating isolated areas (for example a dark panel inside a light app) without
          affecting the rest of the UI.
        </Text>
      </Section>
      <Spacer blockSize="40px" />
      <Section heading="Brand" size="sm">
        <Text>Brand defines the default surface color used when no explicit color is set.</Text>
        <Spacer />
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
        <Spacer />
        <Text>Brand is typically used to define the visual identity of a section or feature.</Text>
      </Section>
      <Spacer blockSize="40px" />
      <Section heading="Color" size="sm">
        <Text>Color is a component-level override.</Text>
        <Spacer />
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
        <Spacer />
        <Text>Use color when a component must be styled explicitly.</Text>
      </Section>
      <Spacer blockSize="40px" />
      <Section heading="Drawable surfaces" size="sm">
        <Text>Only drawable Boxes participate in visual styling.</Text>
        <Spacer />
        <MarkerList>
          <MarkerList.Item>
            <Text>The drawable prop enables backgrounds, text color, variants and intents</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>Non-drawable Boxes are structural and visually neutral</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>Theme, brand, color, variant and intent apply only to drawable Boxes</Text>
          </MarkerList.Item>
        </MarkerList>
        <Spacer />
        <Text>This separation keeps layouts clean and reduces unnecessary styling work.</Text>
      </Section>
      <Spacer blockSize="40px" />
      <Section heading="Variants and intents" size="sm">
        <Text>Variants and intents define how a drawable surface is rendered.</Text>
        <Spacer />
        <MarkerList>
          <MarkerList.Item>
            <Text>Variants control structure (solid, outline, soft-outline, ghost)</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>Intents control semantic meaning (neutral, muted, primary, etc.)</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>Both are always local to the component</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>They rely on resolved theme and color/brand values</Text>
          </MarkerList.Item>
        </MarkerList>
        <Spacer />
        <Text>Variants and intents never propagate.</Text>
      </Section>
      <Spacer blockSize="40px" />
      <Section heading="Local styling islands" size="sm">
        <Text>A Box can act as a local styling boundary.</Text>
        <Spacer />
        <MarkerList>
          <MarkerList.Item>
            <Text>Theme and brand can be flipped locally</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>All drawable descendants follow automatically</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>Islands can be nested</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>Global settings remain unchanged</Text>
          </MarkerList.Item>
        </MarkerList>
        <Spacer />
        <Text>This enables complex layouts with mixed visual contexts.</Text>
      </Section>
      <Spacer blockSize="40px" />
      <Section heading="Portals" size="sm">
        <Text>Portals render outside the DOM hierarchy and do not inherit CSS variables automatically.</Text>
        <Spacer />
        <MarkerList>
          <MarkerList.Item>
            <Text>Theme and brand are passed through context</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>BoxProvider bridges styling context for portals</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>This ensures portals match the visual environment they originate from</Text>
          </MarkerList.Item>
        </MarkerList>
        <Spacer />
        <Text>Portals behave consistently with non-portal components.</Text>
      </Section>
      <Spacer blockSize="40px" />
      <Section heading="Resolution rules" size="sm">
        <MarkerList>
          <MarkerList.Item>
            <Text>Nearest theme wins</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>Nearest brand wins</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>Color overrides brand</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>Theme affects how colors are interpreted</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>Only drawable Boxes apply visual styling</Text>
          </MarkerList.Item>
        </MarkerList>
      </Section>
    </Box>
  )
}
