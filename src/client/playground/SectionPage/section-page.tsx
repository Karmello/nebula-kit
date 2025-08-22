import { Section, ActionMenu, Paragraph, PopoverOptionType } from 'lib/components'
import { EXAMPLE_SHORT_TEXT, EXAMPLE_LONG_TEXT } from 'client/constants'
import { PlaygroundConfigurator, PlaygroundScenario } from 'client/components'

const nativeSectionProps = { style: { border: 'var(--border-width) dashed var(--blue-4)' } }

const ACTION_MENU_OPTIONS = [
  { value: 'new', text: 'New', iconName: 'write' },
  { value: 'open', text: 'Open', iconName: 'share square' },
  { value: 'save', text: 'Save', iconName: 'check' },
  { value: 'close', text: 'Close', iconName: 'close' },
] as PopoverOptionType[]

export const SectionPage = () => {
  return (
    <PlaygroundConfigurator surfaceConfigProps={['size']} hasSurfaceInterface scrollTopButton>
      <PlaygroundScenario title="Default" props>
        <Section headingText={EXAMPLE_SHORT_TEXT} nativeSectionProps={nativeSectionProps}>
          <Paragraph>{EXAMPLE_LONG_TEXT}</Paragraph>
        </Section>
      </PlaygroundScenario>
      <PlaygroundScenario title="With an icon" props>
        <Section
          headingText={EXAMPLE_SHORT_TEXT}
          iconName="smile outline"
          nativeSectionProps={nativeSectionProps}
        >
          <Paragraph>{EXAMPLE_LONG_TEXT}</Paragraph>
        </Section>
      </PlaygroundScenario>
      <PlaygroundScenario title="Custom icon color" props>
        <Section
          headingText={EXAMPLE_SHORT_TEXT}
          iconName="smile outline"
          iconColor="blue-4"
          nativeSectionProps={nativeSectionProps}
        >
          <Paragraph>{EXAMPLE_LONG_TEXT}</Paragraph>
        </Section>
      </PlaygroundScenario>
      <PlaygroundScenario title="With custom right slot" props>
        <Section
          headingText={EXAMPLE_SHORT_TEXT}
          RightSlot={() => (
            <ActionMenu
              options={ACTION_MENU_OPTIONS}
              onChoose={() => null}
              surfaceProps={{ size: 's', openDirection: 'right' }}
            />
          )}
          nativeSectionProps={nativeSectionProps}
        >
          <Paragraph>{EXAMPLE_LONG_TEXT}</Paragraph>
        </Section>
      </PlaygroundScenario>
      <PlaygroundScenario title="Scroll into view (on heading click)" props>
        <Section
          headingText={EXAMPLE_SHORT_TEXT}
          RightSlot={() => (
            <ActionMenu
              options={ACTION_MENU_OPTIONS}
              onChoose={() => null}
              surfaceProps={{ size: 's', openDirection: 'right' }}
            />
          )}
          scrollIntoView
          nativeSectionProps={nativeSectionProps}
        >
          <Paragraph>{EXAMPLE_LONG_TEXT}</Paragraph>
        </Section>
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
