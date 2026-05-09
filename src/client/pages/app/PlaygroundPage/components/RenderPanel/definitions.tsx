import { Box, Reveal, Select, Table, Tabs } from 'lib/components'

export const COMPONENT_TEMPLATES = {
  Reveal: (props: any) => (
    <Reveal {...props}>
      <Box blockSize="80px" padding="20px">
        Hidden by default. Revealed with motion when the moment feels right.
      </Box>
    </Reveal>
  ),
  Select: (props: any) => (
    <Select {...props}>
      {Array.from({ length: 10 }, (v, k) => (
        <Select.Option key={k} value={`options-${k + 1}`}>
          Option {k + 1}
        </Select.Option>
      ))}
    </Select>
  ),
  Tabs: (props: any) => (
    <Tabs {...props}>
      <Tabs.Tab value={1} inlineSize="100px">
        First
      </Tabs.Tab>
      <Tabs.Tab value={2} inlineSize="100px">
        Second
      </Tabs.Tab>
      <Tabs.Tab value={3} inlineSize="100px">
        Third
      </Tabs.Tab>
      <Tabs.Tab value={4} inlineSize="100px">
        Fourth
      </Tabs.Tab>
      <Tabs.Tab value={5} inlineSize="100px">
        Fifth
      </Tabs.Tab>
      <Tabs.Panel value={1}>This is the first tab content.</Tabs.Panel>
      <Tabs.Panel value={2}>This is the second tab content.</Tabs.Panel>
      <Tabs.Panel value={3}>This is the third tab content.</Tabs.Panel>
      <Tabs.Panel value={4}>This is the fourth tab content.</Tabs.Panel>
      <Tabs.Panel value={5}>This is the fifth tab content.</Tabs.Panel>
    </Tabs>
  ),
  Table: (props: any) => (
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
  ),
}
