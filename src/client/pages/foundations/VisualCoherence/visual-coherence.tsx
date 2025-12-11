import { Box, Text, MarkerList, Spacer } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Text>
        NebulaKit keeps visual language consistent across every layer of the interface. Colors, typography,
        spacing and motion all stem from the same scale system and design tokens. What looks aligned is also
        aligned in code.
      </Text>
      <Spacer blockSize="15px" />
      <Text>
        Theming isn't an afterthought or a free-for-all - it's a controlled environment. Two themes, light and
        dark, share the same intent structure, ensuring balance and contrast remain intact. Developers can
        tune global tokens like brand or radius, but the foundation stays solid.
      </Text>
      <Spacer blockSize="15px" />
      <Text>
        Every component uses the same rhythm of scale: typography adjusts, spacing grows, shadows deepen. That
        shared cadence makes compositions feel intentional instead of improvised.
      </Text>
      <Spacer blockSize="30px" />
      <Text>Visual coherence means:</Text>
      <Spacer blockSize="15px" />
      <MarkerList>
        <MarkerList.Item>
          <Text bold>Unified design language.</Text>
          <Text>
            All components speak the same visual grammar - surface, scale, motion and type operate on common
            rules.
          </Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text bold>Theme stability.</Text>
          <Text>Color and contrast stay in harmony across light and dark modes without custom hacks.</Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text bold>Consistent rhythm.</Text>
          <Text>
            Spacing, sizing and typography follow one numeric scale - visual relationships never drift.
          </Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text bold>Structured flexibility.</Text>
          <Text>
            Developers can adjust aspects like variant or color intent, but only within defined boundaries
            that keep the design intact.
          </Text>
        </MarkerList.Item>
      </MarkerList>
      <Spacer blockSize="30px" />
      <Text>
        Coherence isn't achieved through enforcement but through shared foundations. When every visual
        decision traces back to the same core system, the interface looks right by default.
      </Text>
    </Box>
  )
}
