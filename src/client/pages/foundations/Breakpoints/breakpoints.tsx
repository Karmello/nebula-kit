import { Box, Table } from 'lib/components'
import { BP } from 'lib/hooks'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Table paddingBlock="10px" paddingInline="15px">
        <Table.Caption>Responsive breakpoints with their pixel ranges defined in the system.</Table.Caption>
        <Table.Header>
          <Table.HeaderRow>
            <Table.HeaderCell>Breakpoint</Table.HeaderCell>
            <Table.HeaderCell>From (px)</Table.HeaderCell>
            <Table.HeaderCell>To (px)</Table.HeaderCell>
          </Table.HeaderRow>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>base</Table.Cell>
            <Table.Cell>0</Table.Cell>
            <Table.Cell>{BP.sm - 1}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>sm</Table.Cell>
            <Table.Cell>{BP.sm}</Table.Cell>
            <Table.Cell>{BP.md - 1}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>md</Table.Cell>
            <Table.Cell>{BP.md}</Table.Cell>
            <Table.Cell>{BP.lg - 1}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>lg</Table.Cell>
            <Table.Cell>{BP.lg}</Table.Cell>
            <Table.Cell>{BP.xl - 1}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>xl</Table.Cell>
            <Table.Cell>{BP.xl}</Table.Cell>
            <Table.Cell>Inf</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Box>
  )
}
