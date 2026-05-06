import { CodeSnippet } from 'client/components'
import { Box, Spacer, Table, Text } from 'lib/components'
import { SIZING_SCALE } from 'lib/definitions'

export default () => {
  return (
    <Box maxInlineSize={{ lg: '55rem' }}>
      <Text>
        The sizing scale defines the set of consistent values used for spacing and dimensions across the system. It is used in
        layout-related props such as logical sizes as well as margin, padding and gap props. It replaces arbitrary CSS values with
        a predictable scale, making layouts easier to reason about and maintain. The scale follows a progressive step pattern,
        allowing small adjustments at lower values and larger jumps for layout-level spacing.
      </Text>
      <Spacer blockSize="xl" />
      <Table paddingBlock="10px" paddingInline="15px">
        <Table.Header>
          <Table.HeaderRow>
            <Table.HeaderCell>T-shirt size</Table.HeaderCell>
            <Table.HeaderCell>Resolved value</Table.HeaderCell>
          </Table.HeaderRow>
        </Table.Header>
        <Table.Body>
          {Object.keys(SIZING_SCALE).map(key => (
            <Table.Row key={key}>
              <Table.Cell>{key}</Table.Cell>
              <Table.Cell>{SIZING_SCALE[key as never]}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Spacer />
      <CodeSnippet
        lang="tsx"
        description="Scale values can be used anywhere sizing props are accepted."
        code={`<Box padding="md" />
<Box margin="lg" />
<Box inlineSize="2xl" />`}
      />
      <Spacer />
      <CodeSnippet
        lang="tsx"
        description="Custom CSS values are supported when needed, but using the scale is recommended for consistency."
        code={`<Box padding="20px" />
<Box inlineSize="50%" />`}
      />
    </Box>
  )
}
