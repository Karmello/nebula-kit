import { Icon, Section, Spacer, Table, Text } from 'lib/components'
import { ComponentMeta } from 'client/definitions'

type Props = {
  category?: string
  data: ComponentMeta<Record<string, object>>['props']
}

export const PropsTable = ({ category, data }: Props) => {
  const table = (
    <Table color="blue" intent="tertiary" paddingBlock="5px" paddingInline="10px">
      <Table.Header>
        <Table.HeaderRow>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Value</Table.HeaderCell>
          <Table.HeaderCell textAlign="center">Default</Table.HeaderCell>
          <Table.HeaderCell textAlign="center">Required</Table.HeaderCell>
          <Table.HeaderCell textAlign="center">Responsive</Table.HeaderCell>
          <Table.HeaderCell minInlineSize="30ch">Description</Table.HeaderCell>
        </Table.HeaderRow>
      </Table.Header>
      <Table.Body>
        {Object.keys(data)
          .sort((a, b) => a.localeCompare(b))
          .map(name => {
            const { options, isRequired, isResponsive, defaultValue, description } = data[name]
            return (
              <Table.Row key={name}>
                <Table.Cell>
                  <Text intent="primary" color="blue" bold>
                    {name}
                  </Text>
                </Table.Cell>
                <Table.Cell>{typeof options === 'string' ? options : options.join(', ')}</Table.Cell>
                <Table.Cell tagAttrs={{ style: { textAlign: 'center', whiteSpace: 'nowrap' } }}>
                  {defaultValue !== undefined ? defaultValue : '-'}
                </Table.Cell>
                <Table.Cell tagAttrs={{ style: { textAlign: 'center' } }}>
                  {isRequired ? <Icon name="check" intent="primary" size="20px" /> : '-'}
                </Table.Cell>
                <Table.Cell tagAttrs={{ style: { textAlign: 'center' } }}>
                  {isResponsive ? <Icon name="check" intent="primary" size="20px" /> : '-'}
                </Table.Cell>
                <Table.Cell>{description}</Table.Cell>
              </Table.Row>
            )
          })}
      </Table.Body>
    </Table>
  )

  if (category) {
    return (
      <>
        <Section heading={category}>{table}</Section>
        <Spacer blockSize="60px" />
      </>
    )
  } else {
    return (
      <>
        {table}
        <Spacer blockSize="60px" />
      </>
    )
  }
}
