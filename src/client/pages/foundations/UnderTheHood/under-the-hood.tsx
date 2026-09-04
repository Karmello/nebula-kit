import { Box, HorizontalRule, MarkerList, NEB_LENGTH, Spacer, Text } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Text>
        NebulaKit is built on a modern stack chosen for clarity, reliability and speed. Every tool
        in the system supports the same principle that guides its design - structure over sprawl.
        Each of these tools was selected not to add complexity, but to preserve it - a stack built
        for speed, structure and long-term clarity.
      </Text>
      <Spacer blockSize={NEB_LENGTH.px_048} />
      <Box display="flex" flexDirection="column" rowGap={NEB_LENGTH.px_032}>
        <Box>
          <Text typography="h5" color="blue" intent="primary" bold>
            React 19
          </Text>
          <HorizontalRule marginTop={NEB_LENGTH.px_004} marginBottom={NEB_LENGTH.px_008} />
          <Text intent="neutral">
            The foundation of every component. React's declarative model and compositional nature
            align perfectly with NebulaKit's architecture, where small parts form larger structures
            with predictable behavior.
          </Text>
        </Box>
        <Box>
          <Text typography="h5" color="blue" intent="primary" bold>
            TypeScript
          </Text>
          <HorizontalRule marginTop={NEB_LENGTH.px_004} marginBottom={NEB_LENGTH.px_008} />
          <Text intent="neutral">
            The library is written entirely in TypeScript to ensure strong typing, self-documenting
            code and early error detection. Props and internal utilities share consistent types,
            making the system safer and easier to extend.
          </Text>
        </Box>
        <Box>
          <Text typography="h5" color="blue" intent="primary" bold>
            CSS and Sass
          </Text>
          <HorizontalRule marginTop={NEB_LENGTH.px_004} marginBottom={NEB_LENGTH.px_008} />
          <Text intent="neutral">
            Styling relies on native CSS with a layer of Sass for organization and variable
            management. Responsive props map directly to CSS properties, ensuring performance and
            simplicity. CSS variables handle color, scale and state, while Sass structures themes
            and utilities cleanly.
          </Text>
        </Box>
        <Box>
          <Text typography="h5" color="blue" intent="primary" bold>
            Vite
          </Text>
          <HorizontalRule marginTop={NEB_LENGTH.px_004} marginBottom={NEB_LENGTH.px_008} />
          <Text intent="neutral">
            Development and build are powered by Vite, chosen for its speed, modularity and smooth
            TypeScript integration. It keeps the feedback loop fast and the configuration
            lightweight.
          </Text>
        </Box>
        <Box>
          <Text typography="h5" color="blue" intent="primary" bold>
            Icons via lucide-react
          </Text>
          <HorizontalRule marginTop={NEB_LENGTH.px_004} marginBottom={NEB_LENGTH.px_008} />
          <Text intent="neutral">
            Icons come from Lucide, a clean, consistent icon set built with React. They scale
            naturally with typography and follow the same theming system as other components.
          </Text>
        </Box>
        <Box>
          <Text typography="h5" color="blue" intent="primary" bold>
            Testing and validation
          </Text>
          <HorizontalRule marginTop={NEB_LENGTH.px_004} marginBottom={NEB_LENGTH.px_008} />
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
              <Text>
                Playwright verifies computed DOM values and accessibility in real browsers
              </Text>
            </MarkerList.Item>
          </MarkerList>
          <Spacer blockSize={NEB_LENGTH.px_008} />
          <Text intent="neutral">
            Together, they ensure both the API and the rendered output stay stable across updates.
          </Text>
        </Box>
        <Box>
          <Text typography="h5" color="blue" intent="primary" bold>
            Code quality and formatting
          </Text>
          <HorizontalRule marginTop={NEB_LENGTH.px_004} marginBottom={NEB_LENGTH.px_008} />
          <Text intent="neutral">
            Linting and formatting are managed by ESLint and Prettier, keeping the codebase
            consistent and readable. Every component adheres to shared rules, minimizing noise and
            friction.
          </Text>
        </Box>
      </Box>
    </Box>
  )
}
