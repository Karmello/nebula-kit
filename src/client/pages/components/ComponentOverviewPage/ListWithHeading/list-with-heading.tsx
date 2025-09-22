import { Flex, MarkerList, Text } from 'lib/components'

export const ListWithHeading = ({ heading, items }: { heading: string; items: string[] }) => (
  <Flex flexDirection="column" gap={5}>
    <Text bold>{heading}</Text>
    <MarkerList listStyle="circle">
      {items.map((s, i) => (
        <MarkerList.Item key={i}>
          <Text>{s}</Text>
        </MarkerList.Item>
      ))}
    </MarkerList>
  </Flex>
)
