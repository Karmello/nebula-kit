import { Box, MarkerList, NEB_LENGTH, Section, Spacer, Text } from 'lib/components'
import { CodeSnippet } from 'client/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Text>
        NebulaKit is designed around authored composition rather than generated structure. Instead of hiding application
        architecture behind high-level abstractions, it encourages developers to build interfaces directly from a small set of
        predictable primitives and orchestration components. The goal is not to minimize JSX at all costs, but rather produce
        application code that remains understandable, compositional and resistant to entropy as projects grow.
      </Text>
      <Spacer blockSize={NEB_LENGTH.px_016} />
      <Text>Authored NebulaKit applications tend to share several structural characteristics:</Text>
      <Spacer blockSize={NEB_LENGTH.px_048} />
      <Section heading="Composition remains visible" size="sm">
        <Spacer blockSize={NEB_LENGTH.px_008} />
        <Text>
          NebulaKit favors explicit composition over hidden orchestration. Layout, grouping and structure are usually authored
          directly through primitives such as Box, Flex, Grid and Text. Components are intentionally built on top of one another
          using the same vocabulary exposed publicly to the user.
        </Text>
        <Spacer blockSize={NEB_LENGTH.px_008} />
        <CodeSnippet
          description="Authored layout typically stays visible"
          lang="tsx"
          code={`<Flex flexDirection="column" rowGap="16px">
  <Section heading="Account">
    <Form>
      ...
    </Form>
  </Section>
</Flex>`}
        />
        <Spacer blockSize={NEB_LENGTH.px_016} />
        <Text>
          Rather than replacing layout concepts with semantic aliases everywhere, NebulaKit preserves the underlying mental model
          of the web platform. This keeps authored UI predictable and easier to reason about over time.
        </Text>
      </Section>
      <Spacer blockSize={NEB_LENGTH.px_048} />
      <Section heading="Abstractions compress behavior, not structure" size="sm">
        <Spacer blockSize={NEB_LENGTH.px_008} />
        <Text>
          NebulaKit intentionally avoids introducing abstractions purely to reduce repeated JSX. Repeated layout or repeated
          visual structure alone is usually not enough reason to create a new component. Higher-order abstractions are expected to
          emerge primarily from repeated behavioral orchestration.
        </Text>
        <Spacer blockSize={NEB_LENGTH.px_016} />
        <Text>For example:</Text>
        <Spacer blockSize={NEB_LENGTH.px_008} />
        <MarkerList>
          <MarkerList.Item>
            <Text>toggling password visibility</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>coordinating overlay behavior</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>handling accessibility mechanics</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>synchronizing async interaction state</Text>
          </MarkerList.Item>
        </MarkerList>
        <Spacer blockSize={NEB_LENGTH.px_008} />
        <Text>are strong candidates for reusable abstractions.</Text>
        <Spacer blockSize={NEB_LENGTH.px_016} />
        <Text>
          Meanwhile small presentation-specific patterns are usually expected to remain local to the application itself. This
          keeps the framework smaller while allowing applications to evolve their own domain language naturally.
        </Text>
      </Section>
      <Spacer blockSize={NEB_LENGTH.px_048} />
      <Section heading="Applications own orchestration" size="sm">
        <Spacer blockSize={NEB_LENGTH.px_008} />
        <Text>
          NebulaKit components typically own rendering mechanics and accessibility behavior, while applications remain responsible
          for workflow orchestration.
        </Text>
        <Spacer blockSize={NEB_LENGTH.px_016} />
        <Text>For example:</Text>
        <Spacer blockSize={NEB_LENGTH.px_008} />
        <MarkerList>
          <MarkerList.Item>
            <Text>Dialog manages focus, layering and dismissal behavior</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>Select manages dropdown interaction and keyboard navigation</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>Button manages interaction states and visuals</Text>
          </MarkerList.Item>
        </MarkerList>
        <Spacer blockSize={NEB_LENGTH.px_016} />
        <Text>But applications still explicitly control:</Text>
        <Spacer blockSize={NEB_LENGTH.px_008} />
        <MarkerList>
          <MarkerList.Item>
            <Text>navigation flow</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>async actions</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>overlay coordination</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>routing decisions</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>business workflows</Text>
          </MarkerList.Item>
        </MarkerList>
        <Spacer blockSize={NEB_LENGTH.px_016} />
        <Text>This separation keeps application behavior visible instead of hiding it behind framework-specific APIs.</Text>
      </Section>
      <Spacer blockSize={NEB_LENGTH.px_048} />
      <Section heading="Responsive behavior stays explicit" size="sm">
        <Spacer blockSize={NEB_LENGTH.px_008} />
        <Text>
          Responsive behavior is authored directly through responsive props instead of separate CSS files or generated utility
          classes.
        </Text>
      </Section>
      <Spacer blockSize={NEB_LENGTH.px_008} />
      <CodeSnippet
        description="Typical authored responsive code"
        lang="tsx"
        code={`<Grid
  gridTemplateColumns={{
    base: '1fr',
    md: 'repeat(2, 1fr)',
    xl: 'repeat(4, 1fr)',
  }}
  gap="16px"
/>`}
      />
      <Spacer blockSize={NEB_LENGTH.px_016} />
      <Text>
        NebulaKit intentionally preserves familiar layout concepts such as flexbox, grid, spacing and sizing instead of replacing
        them with framework-specific DSLs. Developers are still expected to understand the underlying concepts of the platform
        itself. NebulaKit reduces implementation friction, not platform literacy.
      </Text>
      <Spacer blockSize={NEB_LENGTH.px_048} />
      <Section heading="Local abstractions are encouraged" size="sm">
        <Spacer blockSize={NEB_LENGTH.px_008} />
        <Text>
          NebulaKit encourages applications to create their own lightweight local abstractions when repeated patterns become
          stable within a project. Small application-specific wrappers are preferred over framework-level expansion when the
          abstraction:
        </Text>
        <Spacer blockSize={NEB_LENGTH.px_008} />
        <MarkerList>
          <MarkerList.Item>
            <Text>belongs to a single product area</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>represents domain semantics</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>does not introduce reusable behavioral infrastructure</Text>
          </MarkerList.Item>
        </MarkerList>
        <Spacer blockSize={NEB_LENGTH.px_016} />
        <Text>
          This helps prevent abstraction creep inside the framework itself while keeping authored application code clean and
          maintainable.
        </Text>
      </Section>
      <Spacer blockSize={NEB_LENGTH.px_048} />
      <Section heading="NebulaKit favors long-lived product interfaces" size="sm">
        <Spacer blockSize={NEB_LENGTH.px_008} />
        <Text>NebulaKit is strongest when building structured application interfaces such as:</Text>
        <Spacer blockSize={NEB_LENGTH.px_008} />
        <MarkerList>
          <MarkerList.Item>
            <Text>dashboards</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>admin panels</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>settings pages</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>onboarding flows</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>CRUD interfaces</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>authenticated application shells</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>documentation systems</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>internal tools</Text>
          </MarkerList.Item>
        </MarkerList>
        <Spacer blockSize={NEB_LENGTH.px_016} />
        <Text>The system prioritizes:</Text>
        <Spacer blockSize={NEB_LENGTH.px_008} />
        <MarkerList>
          <MarkerList.Item>
            <Text>explicit structure</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>compositional clarity</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>responsive predictability</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>architectural consistency</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>resistance to entropy</Text>
          </MarkerList.Item>
        </MarkerList>
        <Spacer blockSize={NEB_LENGTH.px_008} />
        <Text>over ultra-short syntax or highly abstracted visual DSLs.</Text>
        <Spacer blockSize={NEB_LENGTH.px_016} />
        <Text>
          As applications grow, the authored code is expected to remain readable, editable and structurally obvious rather than
          increasingly magical or framework-driven.
        </Text>
      </Section>
      <Spacer blockSize={NEB_LENGTH.px_048} />
      <Section heading="The resulting codebase" size="sm">
        <Spacer blockSize={NEB_LENGTH.px_008} />
        <Text>Most NebulaKit applications naturally converge toward:</Text>
        <Spacer blockSize={NEB_LENGTH.px_008} />
        <MarkerList>
          <MarkerList.Item>
            <Text>visible composition</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>explicit responsive behavior</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>primitive-first layout</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>restrained abstractions</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>local orchestration ownership</Text>
          </MarkerList.Item>
          <MarkerList.Item>
            <Text>predictable architectural structure</Text>
          </MarkerList.Item>
        </MarkerList>
        <Spacer blockSize={NEB_LENGTH.px_016} />
        <Text>
          The resulting code typically remains close to standard React mental models while reducing the amount of CSS
          infrastructure, styling coordination and UI orchestration developers need to build repeatedly across projects.
        </Text>
      </Section>
    </Box>
  )
}
