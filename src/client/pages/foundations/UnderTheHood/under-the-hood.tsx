import { Box, MarkerList, NEB_LENGTH, Section, Spacer, Text } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Text>
        NebulaKit is built on a modern stack chosen for clarity, reliability and speed. Every tool in the system supports the same
        principle that guides its design - structure over sprawl. Each of these tools was selected not to add complexity, but to
        preserve it - a stack built for speed, structure and long-term clarity.
      </Text>
      <Spacer blockSize={NEB_LENGTH.px_024} />
      <Section heading="React 19" intent="primary" size="md">
        <Text intent="neutral">
          The foundation of every component. React's declarative model and compositional nature align perfectly with NebulaKit's
          architecture, where small parts form larger structures with predictable behavior.
        </Text>
      </Section>
      <Spacer blockSize={NEB_LENGTH.px_024} />
      <Section heading="TypeScript" intent="primary" size="md">
        <Text intent="neutral">
          The library is written entirely in TypeScript to ensure strong typing, self-documenting code and early error detection.
          Props and internal utilities share consistent types, making the system safer and easier to extend.
        </Text>
      </Section>
      <Spacer blockSize={NEB_LENGTH.px_024} />
      <Section heading="CSS and Sass" intent="primary" size="md">
        <Text intent="neutral">
          Styling relies on native CSS with a layer of Sass for organization and variable management. Responsive props map
          directly to CSS properties, ensuring performance and simplicity. CSS variables handle color, scale and state, while Sass
          structures themes and utilities cleanly.
        </Text>
      </Section>
      <Spacer blockSize={NEB_LENGTH.px_024} />
      <Section heading="Vite" intent="primary" size="md">
        <Text intent="neutral">
          Development and build are powered by Vite, chosen for its speed, modularity and smooth TypeScript integration. It keeps
          the feedback loop fast and the configuration lightweight.
        </Text>
      </Section>
      <Spacer blockSize={NEB_LENGTH.px_024} />
      <Section heading="Icons via lucide-react" intent="primary" size="md">
        <Text intent="neutral">
          Icons come from Lucide, a clean, consistent icon set built with React. They scale naturally with typography and follow
          the same theming system as other components.
        </Text>
      </Section>
      <Spacer blockSize={NEB_LENGTH.px_024} />
      <Section heading="Testing and validation" intent="primary" size="md">
        <Text intent="neutral">Quality is enforced on three levels:</Text>
        <Spacer blockSize={NEB_LENGTH.px_008} />
        <MarkerList intent="neutral">
          <MarkerList.Item>
            <Text>tsd validates type definitions at build time</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>Vitest handles runtime testing for logic and rendering</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>Playwright verifies computed DOM values and accessibility in real browsers</Text>
          </MarkerList.Item>
        </MarkerList>
        <Spacer blockSize={NEB_LENGTH.px_008} />
        <Text intent="neutral">Together, they ensure both the API and the rendered output stay stable across updates.</Text>
      </Section>
      <Spacer blockSize={NEB_LENGTH.px_024} />
      <Section heading="Code quality and formatting" intent="primary" size="md">
        <Text intent="neutral">
          Linting and formatting are managed by ESLint and Prettier, keeping the codebase consistent and readable. Every component
          adheres to shared rules, minimizing noise and friction.
        </Text>
      </Section>
    </Box>
  )
}
