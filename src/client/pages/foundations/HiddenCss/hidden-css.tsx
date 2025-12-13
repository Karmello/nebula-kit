import { Box, Spacer, Text } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Text>
        NebulaKit treats CSS as an implementation detail, not a user-facing API. Styling is powered by CSS
        under the hood, but intentionally hidden behind a stable, typed, prop-driven interface. As a user, you
        do not negotiate with selectors, specificity or override order. You express design intent through
        props and the system translates that into correct, responsive and consistent CSS.
      </Text>
      <Spacer />
      <Text>
        This is not about rejecting CSS. It is about finishing the abstraction. CSS is extremely powerful, but
        it is global, implicit and difficult to reason about at scale. When exposed directly, it leaks
        complexity into every component and every decision. NebulaKit absorbs that complexity so you can stay
        focused on structure, logic and composition inside your React code.
      </Text>
      <Spacer />
      <Text>
        Escape hatches exist, but they are intentionally discouraged. Direct styles bypass the responsive
        engine and the system's guarantees. They are there for rare edge cases, not as a primary workflow. A
        well-designed system should make the correct path obvious and the dangerous path uncomfortable.
      </Text>
      <Spacer />
      <Text>
        By hiding CSS, NebulaKit shifts creative freedom to a higher level. Instead of fighting implementation
        details, you work with a coherent set of primitives that compose reliably. Creativity comes from
        combining clear visual signals, not from wrestling the cascade. CSS still does the work. You just
        don't have to.
      </Text>
    </Box>
  )
}
