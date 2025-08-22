import { PlaygroundConfigurator, PlaygroundScenario } from 'client/components'
import { EXAMPLE_LONG_TEXT } from 'client/constants'
import { RevealGroup, Reveal, Paragraph } from 'lib/components'

export const RevealGroupPage = () => {
  return (
    <PlaygroundConfigurator surfaceConfigProps={['size']}>
      <PlaygroundScenario title="Single reveal opened" props>
        <RevealGroup openMode="single">
          <Reveal title="Reveal 1">
            <Paragraph>{EXAMPLE_LONG_TEXT}</Paragraph>
          </Reveal>
          <Reveal title="Reveal 2">
            <Paragraph>{EXAMPLE_LONG_TEXT}</Paragraph>
          </Reveal>
          <Reveal title="Reveal 3">
            <Paragraph>{EXAMPLE_LONG_TEXT}</Paragraph>
          </Reveal>
        </RevealGroup>
      </PlaygroundScenario>
      <PlaygroundScenario title="Multiple reveals opened" props>
        <RevealGroup openMode="multiple">
          <Reveal title="Reveal 1">
            <Paragraph>{EXAMPLE_LONG_TEXT}</Paragraph>
          </Reveal>
          <Reveal title="Reveal 2">
            <Paragraph>{EXAMPLE_LONG_TEXT}</Paragraph>
          </Reveal>
          <Reveal title="Reveal 3">
            <Paragraph>{EXAMPLE_LONG_TEXT}</Paragraph>
          </Reveal>
        </RevealGroup>
      </PlaygroundScenario>
      <PlaygroundScenario title="All disabled" props>
        <RevealGroup disabled>
          <Reveal title="Reveal 1">
            <Paragraph>{EXAMPLE_LONG_TEXT}</Paragraph>
          </Reveal>
          <Reveal title="Reveal 2">
            <Paragraph>{EXAMPLE_LONG_TEXT}</Paragraph>
          </Reveal>
          <Reveal title="Reveal 3">
            <Paragraph>{EXAMPLE_LONG_TEXT}</Paragraph>
          </Reveal>
        </RevealGroup>
      </PlaygroundScenario>
      <PlaygroundScenario title="One disabled" props>
        <RevealGroup>
          <Reveal title="Reveal 1" surfaceProps={{ disabled: true }}>
            <Paragraph>{EXAMPLE_LONG_TEXT}</Paragraph>
          </Reveal>
          <Reveal title="Reveal 2">
            <Paragraph>{EXAMPLE_LONG_TEXT}</Paragraph>
          </Reveal>
          <Reveal title="Reveal 3">
            <Paragraph>{EXAMPLE_LONG_TEXT}</Paragraph>
          </Reveal>
        </RevealGroup>
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
