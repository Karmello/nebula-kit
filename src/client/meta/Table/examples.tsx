import { ComponentMeta } from 'client/definitions'
import { Table, TableProps } from 'lib/components'

const TABLE_EXAMPLES_META: ComponentMeta<TableProps>['examples'] = [
  {
    jsx: (
      <Table>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Data</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    ),
    skip: true,
  },
  {
    description: 'Simple table displaying only data rows without a header.',
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
            <Table.Cell>Piotr</Table.Cell>
            <Table.Cell>Zieliński</Table.Cell>
            <Table.Cell>Inter Milan</Table.Cell>
            <Table.Cell>CDM</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Sebastian</Table.Cell>
            <Table.Cell>Szymański</Table.Cell>
            <Table.Cell>Fenerbahçe SK</Table.Cell>
            <Table.Cell>CAM</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    ),
  },
  {
    description: 'Table displaying the same data with a header row added.',
    jsx: (
      <Table>
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
            <Table.Cell>Piotr</Table.Cell>
            <Table.Cell>Zieliński</Table.Cell>
            <Table.Cell>Inter Milan</Table.Cell>
            <Table.Cell>CDM</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Sebastian</Table.Cell>
            <Table.Cell>Szymański</Table.Cell>
            <Table.Cell>Fenerbahçe SK</Table.Cell>
            <Table.Cell>CAM</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    ),
  },
]

export { TABLE_EXAMPLES_META }
