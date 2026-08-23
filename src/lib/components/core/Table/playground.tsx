import { Table } from './'
import { type TableProps } from './types'

export type PropsFromTableKey = (typeof PROPS_FROM_TABLE)[number]

export const PROPS_FROM_TABLE = [
  'color',
  'inlineSize',
  'intent',
  'layout',
  'maxInlineSize',
  'minInlineSize',
  'paddingBlock',
  'paddingInline',
  'textAlign',
] as const satisfies readonly (keyof TableProps)[]

export const TABLE_PRESETS = [
  {
    name: 'Default',
    props: {
      //
    },
  },
  {
    name: 'Borderless',
    props: {
      intent: 'neutral',
    },
  },
] satisfies {
  name: string
  props: Pick<TableProps, PropsFromTableKey>
}[]

export const TableTemplate = (props: any) => (
  <Table {...props}>
    <Table.Header>
      <Table.HeaderRow>
        <Table.HeaderCell>First name</Table.HeaderCell>
        <Table.HeaderCell>Last name</Table.HeaderCell>
        <Table.HeaderCell>Club</Table.HeaderCell>
        <Table.HeaderCell>Position</Table.HeaderCell>
      </Table.HeaderRow>
    </Table.Header>
    <Table.Caption>Best football players of all time.</Table.Caption>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Diego</Table.Cell>
        <Table.Cell>Maradona</Table.Cell>
        <Table.Cell>SSC Napoli</Table.Cell>
        <Table.Cell>CAM</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cristiano</Table.Cell>
        <Table.Cell>Ronaldo</Table.Cell>
        <Table.Cell>Real Madrid</Table.Cell>
        <Table.Cell>LW</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Lionel</Table.Cell>
        <Table.Cell>Messi</Table.Cell>
        <Table.Cell>FC Barcelona</Table.Cell>
        <Table.Cell>RW</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>-</Table.Cell>
        <Table.Cell>Ronaldo</Table.Cell>
        <Table.Cell>FC Barcelona</Table.Cell>
        <Table.Cell>ST</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Gianluigi</Table.Cell>
        <Table.Cell>Buffon</Table.Cell>
        <Table.Cell>Juventus FC</Table.Cell>
        <Table.Cell>GK</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>-</Table.Cell>
        <Table.Cell>Pele</Table.Cell>
        <Table.Cell>Santos</Table.Cell>
        <Table.Cell>CAM</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>-</Table.Cell>
        <Table.Cell>Ronaldinho</Table.Cell>
        <Table.Cell>FC Barcelona</Table.Cell>
        <Table.Cell>CAM</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Franz</Table.Cell>
        <Table.Cell>Beckenbauer</Table.Cell>
        <Table.Cell>FC Bayern Munich</Table.Cell>
        <Table.Cell>CB</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Marco</Table.Cell>
        <Table.Cell>van Basten</Table.Cell>
        <Table.Cell>AC Milan</Table.Cell>
        <Table.Cell>ST</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Zinedine</Table.Cell>
        <Table.Cell>Zidane</Table.Cell>
        <Table.Cell>Real Madrid</Table.Cell>
        <Table.Cell>CM</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)
