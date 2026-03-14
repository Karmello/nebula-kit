import { MarkerList, Section, Text } from 'lib/components'

export const ListWithHeading = ({ heading, items }: { heading: string; items: string[] }) => (
  <Section heading={heading} size="xs" iconName="arrow-down">
    <MarkerList>
      {items.map((s, i) => (
        <MarkerList.Item key={i}>
          <Text>{s}</Text>
        </MarkerList.Item>
      ))}
    </MarkerList>
  </Section>
)
