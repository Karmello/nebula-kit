import { Section, Spacer, SvgIcon, Table, Text } from 'lib/components'
import { ComponentMeta } from 'client/definitions'

type Props = {
  category?: string
  data: ComponentMeta<unknown>['ownProps']
}

export const PropsTable = ({ category, data }: Props) => {
  const isSomeRequired = data.some(prop => prop.isRequired)
  const isSomeResponsive = data.some(prop => prop.isResponsive)

  const table = (
    <Table zebra>
      <Table.Head>
        <Table.Row>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell tagAttrs={{ style: { minWidth: '15ch' } }}>Options</Table.HeadCell>
          <Table.HeadCell tagAttrs={{ style: { textAlign: 'center' } }}>Default</Table.HeadCell>
          {isSomeRequired ? (
            <Table.HeadCell tagAttrs={{ style: { textAlign: 'center' } }}>Required</Table.HeadCell>
          ) : null}
          {isSomeResponsive ? (
            <Table.HeadCell tagAttrs={{ style: { textAlign: 'center' } }}>Responsive</Table.HeadCell>
          ) : null}
          <Table.HeadCell tagAttrs={{ style: { width: '40%', minWidth: '40ch' } }}>
            Description
          </Table.HeadCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {data.map(({ name, options, isRequired, isResponsive, defaultValue, description }) => (
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
            {isSomeRequired ? (
              <Table.Cell tagAttrs={{ style: { textAlign: 'center' } }}>
                {isRequired ? <SvgIcon iconName="check" iconIntent="primary" iconSize={10} /> : '-'}
              </Table.Cell>
            ) : null}
            {isSomeResponsive ? (
              <Table.Cell tagAttrs={{ style: { textAlign: 'center' } }}>
                {isResponsive ? <SvgIcon iconName="check" iconIntent="primary" iconSize={10} /> : '-'}
              </Table.Cell>
            ) : null}
            <Table.Cell>{description}</Table.Cell>
          </Table.Row>
        ))}
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
