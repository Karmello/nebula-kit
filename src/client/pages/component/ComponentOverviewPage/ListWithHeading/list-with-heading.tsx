import { Flex, MarkerList, Text } from 'lib/components'

export const ListWithHeading = ({ heading, items }: { heading: string; items: string[] }) => (
  <Flex flexDirection="column" gap="10px">
    <Text bold>{heading}</Text>
    <MarkerList>
      {items.map((s, i) => (
        <MarkerList.Item key={i}>
          <Text>{s}</Text>
        </MarkerList.Item>
      ))}
    </MarkerList>
  </Flex>
)
