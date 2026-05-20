import { MarkerList, Markup, Section, Text } from 'lib/components'

export const ListWithHeading = ({ heading, items }: { heading: string; items: string[] }) => (
  <Section heading={heading} size="sm">
    <MarkerList>
      {items.map((s, i) => (
        <MarkerList.Item key={i}>
          <Markup>
            <Text>{s}</Text>
          </Markup>
        </MarkerList.Item>
      ))}
    </MarkerList>
  </Section>
)
