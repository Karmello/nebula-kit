import { CodeSnippet } from 'client/components'
import { Box, Spacer, Table, Text } from 'lib/components'
import { LENGTH_SCALE } from 'lib/constants'

export default () => {
  return (
    <Box maxInlineSize={{ lg: '55rem' }}>
      <Text>
        The length scale defines the set of consistent values used for spacing and dimensions across the system. It is used in
        layout-related props such as logical sizes as well as margin, padding and gap props. It replaces arbitrary CSS values with
        a predictable scale, making layouts easier to reason about and maintain. The scale follows a progressive step pattern,
        allowing small adjustments at lower values and larger jumps for layout-level spacing. Each length token is also exposed as
        a CSS custom property, allowing the scale to be referenced directly in custom styles and external content.
      </Text>
      <Spacer blockSize="xl" />
      <Table paddingBlock="10px" paddingInline="15px">
        <Table.Header>
          <Table.HeaderRow>
            <Table.HeaderCell>T-shirt size</Table.HeaderCell>
            <Table.HeaderCell>CSS token name</Table.HeaderCell>
            <Table.HeaderCell>Resolved value</Table.HeaderCell>
          </Table.HeaderRow>
        </Table.Header>
        <Table.Body>
          {Object.keys(LENGTH_SCALE).map(key => (
            <Table.Row key={key}>
              <Table.Cell>
                <Text intent="primary" bold>
                  {key}
                </Text>
              </Table.Cell>
              <Table.Cell>
                <Text italic>{`--neb-length-${key}`}</Text>
              </Table.Cell>
              <Table.Cell>
                <Text>{LENGTH_SCALE[key as never]}</Text>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Spacer />
      <CodeSnippet
        lang="tsx"
        description="Scale values can be used anywhere length props are accepted."
        code={`<Box padding="md" />
<Box margin="lg" />
<Box inlineSize="2xl" />`}
      />
      <Spacer />
      <CodeSnippet
        lang="tsx"
        description="Custom CSS values are still supported."
        code={`<Box padding="20px" />
<Box inlineSize="50%" />`}
      />
    </Box>
  )
}
