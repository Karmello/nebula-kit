import { Box, Icon, Spacer, Table, Text } from 'lib/components'
import { IconName } from 'lib/definitions'
import { ICONS } from 'lib/icons/lucide'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Text typography="lead">
        All icons available in the NebulaKit system, presented as a curated subset of the Lucide icon set for
        use across components and interfaces.
      </Text>
      <Spacer blockSize={60} />
      <Table inlineSize={{ base: '100%', lg: '500px' }}>
        <Table.Header>
          <Table.HeaderRow>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Icon</Table.HeaderCell>
          </Table.HeaderRow>
        </Table.Header>
        <Table.Body>
          {Object.keys(ICONS).map(iconName => (
            <Table.Row key={iconName}>
              <Table.Cell minInlineSize="70%">
                <Text intent="primary">{iconName}</Text>
              </Table.Cell>
              <Table.Cell minInlineSize="30%" textAlign="center">
                <Icon name={iconName as IconName} size={30} intent="success" />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Box>
  )
}
