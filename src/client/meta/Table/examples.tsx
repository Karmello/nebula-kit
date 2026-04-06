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
    description: 'Default Table displaying only data rows.',
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
    description: 'Table with custom color displaying header and data rows.',
    jsx: (
      <Table color="blue">
        <Table.Header>
          <Table.HeaderRow>
            <Table.HeaderCell>First name</Table.HeaderCell>
            <Table.HeaderCell>Last name</Table.HeaderCell>
            <Table.HeaderCell>Club</Table.HeaderCell>
            <Table.HeaderCell>Position</Table.HeaderCell>
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
  {
    description: 'Table with caption and footer.',
    jsx: (
      <Table color="red">
        <Table.Header>
          <Table.HeaderRow>
            <Table.HeaderCell>First name</Table.HeaderCell>
            <Table.HeaderCell>Last name</Table.HeaderCell>
            <Table.HeaderCell>Club</Table.HeaderCell>
            <Table.HeaderCell>Position</Table.HeaderCell>
          </Table.HeaderRow>
        </Table.Header>
        <Table.Caption>Polish football players and their club positions.</Table.Caption>
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
        <Table.Footer>
          <Table.Row>
            <Table.Cell colSpan={4}>Data as of 2025 season.</Table.Cell>
          </Table.Row>
        </Table.Footer>
      </Table>
    ),
  },
  {
    description: 'Custom intent applied to the table.',
    jsx: (
      <Table color="blue" intent="primary">
        <Table.Header>
          <Table.HeaderRow>
            <Table.HeaderCell>First name</Table.HeaderCell>
            <Table.HeaderCell>Last name</Table.HeaderCell>
            <Table.HeaderCell>Club</Table.HeaderCell>
            <Table.HeaderCell>Position</Table.HeaderCell>
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
  {
    description: 'Table with emphasized intent applied to data instead of header cells.',
    jsx: (
      <Table intent="neutral">
        <Table.Header>
          <Table.HeaderRow>
            <Table.HeaderCell>First name</Table.HeaderCell>
            <Table.HeaderCell>Last name</Table.HeaderCell>
            <Table.HeaderCell>Club</Table.HeaderCell>
            <Table.HeaderCell>Position</Table.HeaderCell>
          </Table.HeaderRow>
        </Table.Header>
        <Table.Body color="amber" intent="tertiary">
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
    description: 'Borderless table.',
    jsx: (
      <Table intent="neutral">
        <Table.Header>
          <Table.HeaderRow>
            <Table.HeaderCell>First name</Table.HeaderCell>
            <Table.HeaderCell>Last name</Table.HeaderCell>
            <Table.HeaderCell>Club</Table.HeaderCell>
            <Table.HeaderCell>Position</Table.HeaderCell>
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
