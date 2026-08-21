import { Box, Image, NEB_LENGTH, Section, Spacer, Text } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Text>
        NebulaKit is a system where
        <Text tag="span" bold space="both">
          components
        </Text>
        are built from multiple layers. This page shows how those layers fit together at a high level.
      </Text>
      <Spacer blockSize={NEB_LENGTH.px_048} />
      <Image src="/imgs/system.webp" maxBlockSize="400px" />
      <Spacer blockSize={NEB_LENGTH.px_008} />
      <Text italic intent="secondary" typography="small">
        Detailed explanations of each layer are covered on the Philosophy page.
      </Text>
      <Spacer blockSize={NEB_LENGTH.px_048} />
      <Section heading="Styling engine">
        <Text>
          The styling engine is a deterministic resolver. It does not think or guess. Components declare intent through data
          attributes and the engine maps that input directly to output.
        </Text>
        <Spacer blockSize={NEB_LENGTH.px_008} />
        <Text>
          All styling is driven by shared CSS tokens. Themes and brands replace token values, not component logic. Dark mode is a
          palette inversion, not a separate system.
        </Text>
        <Spacer blockSize={NEB_LENGTH.px_008} />
        <Text>
          Styling is orthogonal. Theme, brand, color, variant, intent and state resolve independently and combine predictably.
        </Text>
        <Spacer blockSize={NEB_LENGTH.px_008} />
        <Text>Selectors are flat and constrained. No deep nesting, no specificity wars. Performance is enforced by design.</Text>
      </Section>
      <Spacer blockSize={NEB_LENGTH.px_048} />
      <Section heading="Drawing mechanism">
        <Text>The drawing mechanism defines how components become visible.</Text>
        <Spacer blockSize={NEB_LENGTH.px_008} />
        <Text>
          All rendering is handled through the Box component. Box acts as the fundamental drawing surface, similar to a rectangle
          on a canvas. Every visible part of the system is expressed through it.
        </Text>
        <Spacer blockSize={NEB_LENGTH.px_008} />
        <Text>
          There are no alternative rendering paths or special cases. All components ultimately resolve to Box, ensuring a single,
          unified way to create and control surfaces.
        </Text>
        <Spacer blockSize={NEB_LENGTH.px_008} />
        <Text>
          This keeps rendering consistent and predictable. Every surface follows the same rules, uses the same capabilities and
          behaves the same way across the system.
        </Text>
      </Section>
      <Spacer blockSize={NEB_LENGTH.px_048} />
      <Section heading="Responsiveness">
        <Text>Responsiveness is a separate mechanism handled entirely in JavaScript.</Text>
        <Spacer blockSize={NEB_LENGTH.px_008} />
        <Text>
          It is implemented through React and exposed through the Box component. All responsive behavior flows through this single
          path, making it centralized and consistent across the system.
        </Text>
        <Spacer blockSize={NEB_LENGTH.px_008} />
        <Text>
          Responsive values are resolved at runtime, not through authored media queries. The logic is defined once and reused
          everywhere, ensuring predictable behavior without duplication or divergence.
        </Text>
      </Section>
      <Spacer blockSize={NEB_LENGTH.px_048} />
      <Section heading="Accessibility">
        <Text>Accessibility is enforced through semantic HTML.</Text>
        <Spacer blockSize={NEB_LENGTH.px_008} />
        <Text>
          Components produce correct semantic structure by default. It is part of their contract, not an optional concern.
          Elements, roles and attributes are applied intentionally to ensure proper meaning and behavior.
        </Text>
        <Spacer blockSize={NEB_LENGTH.px_008} />
        <Text>
          Good defaults are provided, with the ability to adjust semantics when needed. Components aim to follow accessibility
          standards as closely as possible while keeping usage straightforward.
        </Text>
      </Section>
      <Spacer blockSize={NEB_LENGTH.px_048} />
      <Section heading="Composition and inheritance">
        <Text>Component behavior is defined through composition and inheritance.</Text>
        <Spacer blockSize={NEB_LENGTH.px_008} />
        <Text>
          Components are built by composing smaller building blocks rather than duplicating logic. Functionality is assembled, not
          rewritten.
        </Text>
        <Spacer blockSize={NEB_LENGTH.px_008} />
        <Text>
          Inheritance refers to prop surfaces flowing through composition. Components expose capabilities from their underlying
          primitives instead of redefining them, keeping APIs consistent and avoiding duplication.
        </Text>
      </Section>
    </Box>
  )
}
