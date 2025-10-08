import { Box, Spacer, Table, Text } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Text typography="lead">
        Size tokens defined in the system, forming a numeric scale from 0 to 80 where each step equals 2px.
      </Text>
      <Spacer blockSize={20} />
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeadCell>Value</Table.HeadCell>
            <Table.HeadCell>CSS variable name</Table.HeadCell>
            <Table.HeadCell>Pixels</Table.HeadCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {Array.from({ length: 81 }, (v, k) => k).map(n => (
            <Table.Row key={n}>
              <Table.Cell>
                <Text>{n}</Text>
              </Table.Cell>
              <Table.Cell>
                <Text>--neb-scale-{n}</Text>
              </Table.Cell>
              <Table.Cell>
                <Text>{n * 2}px</Text>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Box>
  )
}
