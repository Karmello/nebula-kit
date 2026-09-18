import { Box, MarkerList, NEB_LENGTH, Spacer, Text } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Text>
        Performance in NebulaKit is not an optimization layer - it is a property of the
        architecture.
      </Text>
      <Spacer />
      <Text>
        Performance in NebulaKit is not achieved through micro-optimizations or complex CSS tricks.
        It is a direct result of how the system is structured. Styling is resolved explicitly and
        early, then applied directly to the DOM as state. CSS does not compute state - it only
        renders it.
      </Text>
      <Spacer />
      <Text bold>Styling is resolved once, not inferred repeatedly.</Text>
      <Spacer blockSize={NEB_LENGTH.px_002} />
      <MarkerList>
        <MarkerList.Item>
          <Text>React determines styling state (theme, brand, color, variant, intent)</Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text>that state is written to the DOM as data attributes</Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text>CSS reads that state and renders the final output</Text>
        </MarkerList.Item>
      </MarkerList>
      <Spacer blockSize={NEB_LENGTH.px_002} />
      <Text>
        This removes the need for deep selector matching, cascading overrides and runtime guessing.
      </Text>
      <Spacer />
      <Text bold>Why it's fast</Text>
      <Spacer />
      <Text bold>1. No cascade-driven logic</Text>
      <Spacer blockSize={NEB_LENGTH.px_002} />
      <Text>
        NebulaKit does not rely on CSS inheritance or selector chains to determine styling. There
        are no deep nested selectors, context-dependent overrides or implicit styling resolution.
        Each component resolves its state independently and explicitly.
      </Text>
      <Spacer />
      <Text bold>2. CSS is a pure rendering layer</Text>
      <Spacer blockSize={NEB_LENGTH.px_002} />
      <Text>
        CSS variables are not used to compute logic across layers. Tokens are already resolved,
        variables are direct and rendering is predictable. This keeps the browser's work minimal and
        consistent.
      </Text>
      <Spacer />
      <Text bold>3. Stable and localized updates</Text>
      <Spacer blockSize={NEB_LENGTH.px_002} />
      <Text>
        When a prop changes - only the affected component updates its dataset. CSS reacts locally
        with no global recalculation or cascade re-evaluation. This makes updates fast even in large
        trees.
      </Text>
      <Spacer />
      <Text bold>4. No variable chains or indirection</Text>
      <Spacer blockSize={NEB_LENGTH.px_002} />
      <Text>
        NebulaKit avoids long chains of CSS variables referencing each other. Instead of values
        being resolved through multiple layers of indirection, it uses directly resolved tokens.
        This reduces computation and improves clarity.
      </Text>
      <Spacer />
      <Text bold>5. Predictable performance at scale</Text>
      <Spacer blockSize={NEB_LENGTH.px_002} />
      <Text>
        Because styling does not depend on DOM depth or selector complexity, deeply nested trees
        remain stable, multiple styling islands do not degrade performance and adding new components
        does not increase rendering cost unpredictably.
      </Text>
      <Spacer />
      <Text bold>In practice, this results in:</Text>
      <Spacer blockSize={NEB_LENGTH.px_002} />
      <MarkerList>
        <MarkerList.Item>
          <Text>faster initial render</Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text>smoother interaction states (hover, active, selected)</Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text>faster theme and brand switching</Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text>stable performance in complex layouts</Text>
        </MarkerList.Item>
      </MarkerList>
      <Spacer />
      <Text bold>
        NebulaKit intentionally moves complexity out of CSS and into explicit state resolution. This
        means:
      </Text>
      <Spacer blockSize={NEB_LENGTH.px_002} />
      <MarkerList>
        <MarkerList.Item>
          <Text>slightly more work during render (React)</Text>
        </MarkerList.Item>
        <MarkerList.Item>
          <Text>significantly less work during styling (browser)</Text>
        </MarkerList.Item>
      </MarkerList>
      <Spacer blockSize={NEB_LENGTH.px_002} />
      <Text>The result is a system that is easier to reason about, debug and scale reliably.</Text>
    </Box>
  )
}
