import { ComponentMeta } from 'client/definitions'
import { Table, TableProps } from 'lib/components'

const TABLE_EXAMPLES_META: ComponentMeta<TableProps>['examples'] = [
  {
    description: 'Minimal valid table markup.',
    jsx: (
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeadCell>Head cell</Table.HeadCell>
          </Table.Row>
        </Table.Header>
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
        {/* <Table.Caption>Caption</Table.Caption> */}
        <Table.Header>
          <Table.HeaderRow>
            <Table.HeadCell>First name</Table.HeadCell>
            <Table.HeadCell>Last name</Table.HeadCell>
            <Table.HeadCell>Club</Table.HeadCell>
            <Table.HeadCell>Position</Table.HeadCell>
          </Table.HeaderRow>
        </Table.Header>
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
        <Table.Footer>
          <Table.Row>
            <Table.Cell colSpan={4}>Foot</Table.Cell>
          </Table.Row>
        </Table.Footer>
      </Table>
    ),
  },
]

export { TABLE_EXAMPLES_META }
