import { Box, MarkerList, Section, Spacer, Text } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Text>
        NebulaKit is built on a modern stack chosen for clarity, reliability and speed. Every tool in the
        system supports the same principle that guides its design - structure over sprawl.
      </Text>
      <Spacer blockSize="40px" />
      <Section heading="React 19" intent="primary" color="blue" size="sm">
        <Text intent="neutral">
          The foundation of every component. React's declarative model and compositional nature align
          perfectly with NebulaKit's architecture, where small parts form larger structures with predictable
          behavior.
        </Text>
      </Section>
      <Spacer blockSize="30px" />
      <Section heading="TypeScript" intent="primary" color="blue" size="sm">
        <Text intent="neutral">
          The library is written entirely in TypeScript to ensure strong typing, self-documenting code and
          early error detection. Props and internal utilities share consistent types, making the system safer
          and easier to extend.
        </Text>
      </Section>
      <Spacer blockSize="30px" />
      <Section heading="CSS and Sass" intent="primary" color="blue" size="sm">
        <Text intent="neutral">
          Styling relies on native CSS with a layer of Sass for organization and variable management.
          Responsive props map directly to CSS properties, ensuring performance and simplicity. CSS variables
          handle color, scale and state, while Sass structures themes and utilities cleanly.
        </Text>
      </Section>
      <Spacer blockSize="30px" />
      <Section heading="Vite" intent="primary" color="blue" size="sm">
        <Text intent="neutral">
          Development and build are powered by Vite, chosen for its speed, modularity and smooth TypeScript
          integration. It keeps the feedback loop fast and the configuration lightweight.
        </Text>
      </Section>
      <Spacer blockSize="30px" />
      <Section heading="State management with Zustand" intent="primary" color="blue" size="sm">
        <Text intent="neutral">
          For global state and configuration, NebulaKit uses Zustand - small, predictable and React-first.
          It's the quiet backbone behind theme switching, global tokens and surface settings.
        </Text>
      </Section>
      <Spacer blockSize="30px" />
      <Section heading="Icons via lucide-react" intent="primary" color="blue" size="sm">
        <Text intent="neutral">
          Icons come from Lucide, a clean, consistent icon set built with React. They scale naturally with
          typography and follow the same theming system as other components.
        </Text>
      </Section>
      <Spacer blockSize="30px" />
      <Section heading="Testing and validation" intent="primary" color="blue" size="sm">
        <Text intent="neutral">Quality is enforced on three levels:</Text>
        <Spacer blockSize="10px" />
        <MarkerList intent="neutral" color="gray">
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
        <Spacer blockSize="10px" />
        <Text intent="neutral">
          Together, they ensure both the API and the rendered output stay stable across updates.
        </Text>
      </Section>
      <Spacer blockSize="30px" />
      <Section heading="Code quality and formatting" intent="primary" color="blue" size="sm">
        <Text intent="neutral">
          Linting and formatting are managed by ESLint and Prettier, keeping the codebase consistent and
          readable. Every component adheres to shared rules, minimizing noise and friction.
        </Text>
      </Section>
      <Spacer blockSize="40px" />
      <Text>
        Each of these tools was selected not to add complexity, but to preserve it - a stack built for speed,
        structure and long-term clarity.
      </Text>
    </Box>
  )
}
