import { ComponentMeta } from 'client/definitions'
import { Table, TableProps } from 'lib/components'

const TABLE_EXAMPLES_META: ComponentMeta<TableProps>['examples'] = [
  {
    description: 'Basic render case for Table.',
    jsx: (
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Head cell 1</Table.HeadCell>
            <Table.HeadCell>Head cell 2</Table.HeadCell>
            <Table.HeadCell>Head cell 3</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Body cell 1</Table.Cell>
            <Table.Cell>Body cell 2</Table.Cell>
            <Table.Cell>Body cell 3</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    ),
  },
]

export { TABLE_EXAMPLES_META }
