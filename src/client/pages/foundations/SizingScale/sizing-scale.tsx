import { Box, Spacer, Table, Text } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Text typography="lead">Size tokens defined in the system, forming a numeric scale from 0 to 160.</Text>
      <Spacer blockSize={40} />
      <Table>
        <Table.Header>
          <Table.HeaderRow>
            <Table.HeaderCell>Value</Table.HeaderCell>
            <Table.HeaderCell>CSS variable name</Table.HeaderCell>
            <Table.HeaderCell>Pixels</Table.HeaderCell>
          </Table.HeaderRow>
        </Table.Header>
        <Table.Body>
          {Array.from({ length: 6 }, (v, k) => k).map(n => (
            <Table.Row key={n}>
              <Table.Cell>
                <Text>{n}</Text>
              </Table.Cell>
              <Table.Cell>
                <Text>--neb-scale-{n}</Text>
              </Table.Cell>
              <Table.Cell>
                <Text>{n}px</Text>
              </Table.Cell>
            </Table.Row>
          ))}
          <Table.Row>
            <Table.Cell>
              <Text>...</Text>
            </Table.Cell>
            <Table.Cell>
              <Text>...</Text>
            </Table.Cell>
            <Table.Cell>
              <Text>...</Text>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <Text>160</Text>
            </Table.Cell>
            <Table.Cell>
              <Text>--neb-scale-160</Text>
            </Table.Cell>
            <Table.Cell>
              <Text>160px</Text>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Box>
  )
}
