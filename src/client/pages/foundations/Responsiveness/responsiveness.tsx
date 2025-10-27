import { CodeSnippet } from 'client/components'
import { Box, Flex, Spacer, Table, Text } from 'lib/components'
import { BP } from 'lib/hooks'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Flex flexDirection="column" alignItems="stretch" gap={50}>
        <Table>
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
        <Box>
          <Text>
            Any property typed as RespValue and marked as responsive in the props table can accept either a
            single value or an object of breakpoint-specific values, like in this example where padding
            changes between the base and md breakpoints.
          </Text>
          <Spacer blockSize={20} />
          <CodeSnippet code={`<Box padding={{ base: 10, md: 50 }} />`} />
        </Box>
      </Flex>
    </Box>
  )
}
