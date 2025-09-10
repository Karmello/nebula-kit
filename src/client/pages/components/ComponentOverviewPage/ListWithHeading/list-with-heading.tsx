import { Flex, List, Text } from 'lib/components'

export const ListWithHeading = ({ heading, items }: { heading: string; items: string[] }) => (
  <Flex flexDirection="column" gap={5}>
    <Text bold>{heading}</Text>
    <List listStyle="circle">
      {items.map((s, i) => (
        <List.Item key={i} marginBottom={i < items.length - 1 ? 5 : 0}>
          {s}
        </List.Item>
      ))}
    </List>
  </Flex>
)
