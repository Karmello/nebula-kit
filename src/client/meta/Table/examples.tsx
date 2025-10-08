import { ComponentMeta } from 'client/definitions'
import { Table, TableProps } from 'lib/components'

const TABLE_EXAMPLES_META: ComponentMeta<TableProps>['examples'] = [
  {
    description: 'Minimal valid table markup.',
    jsx: (
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Head cell</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Body cell</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    ),
    skip: true,
  },
  {
    description: '...',
    jsx: (
      <Table>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Robert</Table.Cell>
            <Table.Cell>Lewandowski</Table.Cell>
            <Table.Cell>FC Barcelona</Table.Cell>
            <Table.Cell>ST</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Erling</Table.Cell>
            <Table.Cell>Haaland</Table.Cell>
            <Table.Cell>Manchester City</Table.Cell>
            <Table.Cell>ST</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    ),
  },
]

export { TABLE_EXAMPLES_META }
