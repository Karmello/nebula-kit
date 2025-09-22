import { Icon, Section, Spacer, Table, Text } from 'lib/components'
import { ComponentMeta } from 'client/definitions'

type Props = {
  category?: string
  data: ComponentMeta<Record<string, object>>['props']
}

export const PropsTable = ({ category, data }: Props) => {
  const table = (
    <Table zebra>
      <Table.Head>
        <Table.Row>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell tagAttrs={{ style: { minWidth: '15ch' } }}>Options</Table.HeadCell>
          <Table.HeadCell tagAttrs={{ style: { textAlign: 'center' } }}>Default</Table.HeadCell>
          <Table.HeadCell tagAttrs={{ style: { width: '8ch' } }}>Required</Table.HeadCell>
          <Table.HeadCell tagAttrs={{ style: { width: '10ch' } }}>Responsive</Table.HeadCell>
          <Table.HeadCell tagAttrs={{ style: { width: '40%', minWidth: '40ch' } }}>
            Description
          </Table.HeadCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {Object.keys(data)
          .sort((a, b) => a.localeCompare(b))
          .map(name => {
            const { options, isRequired, isResponsive, defaultValue, description } = data[name]
            return (
              <Table.Row key={name}>
                <Table.Cell>
                  <Text intent="primary" bold>
                    {name}
                  </Text>
                </Table.Cell>
                <Table.Cell>{typeof options === 'string' ? options : options.join(', ')}</Table.Cell>
                <Table.Cell tagAttrs={{ style: { textAlign: 'center', whiteSpace: 'nowrap' } }}>
                  {defaultValue !== undefined ? defaultValue : '-'}
                </Table.Cell>
                <Table.Cell tagAttrs={{ style: { textAlign: 'center' } }}>
                  {isRequired ? <Icon name="check" intent="primary" /> : '-'}
                </Table.Cell>
                <Table.Cell tagAttrs={{ style: { textAlign: 'center' } }}>
                  {isResponsive ? <Icon name="check" intent="primary" /> : '-'}
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
        <Spacer blockSize={30} />
      </>
    )
  } else {
    return (
      <>
        {table}
        <Spacer blockSize={30} />
      </>
    )
  }
}
