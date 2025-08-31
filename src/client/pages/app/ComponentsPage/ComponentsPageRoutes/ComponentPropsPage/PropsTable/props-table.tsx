import { SvgIcon, Table, Text } from 'lib/components'
import { ComponentPropsMeta } from 'lib/definitions'

type Props = {
  data: ComponentPropsMeta<unknown>
}

export const PropsTable = ({ data }: Props) => {
  const isSomeRequired = data.some(prop => prop.isRequired)
  const isSomeResponsive = data.some(prop => prop.isResponsive)

  return (
    <>
      <Text typography="h6">{data[0].category}</Text>
      <Table zebra mt={5} mb={30}>
        <Table.Head>
          <Table.Row intent="tertiary">
            <Table.HeadCell style={{ width: '17ch' }}>Name</Table.HeadCell>
            <Table.HeadCell style={{ width: '30ch' }}>Options</Table.HeadCell>
            <Table.HeadCell textAlign="center" style={{ width: '10ch' }}>
              Default
            </Table.HeadCell>
            {isSomeRequired ? <Table.HeadCell style={{ width: '8ch' }}>Required</Table.HeadCell> : null}
            {isSomeResponsive ? <Table.HeadCell style={{ width: '10ch' }}>Responsive</Table.HeadCell> : null}
            <Table.HeadCell style={{ width: '40ch' }}>Description</Table.HeadCell>
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
              <Table.Cell textAlign="center">{defaultValue}</Table.Cell>
              {isSomeRequired ? (
                <Table.Cell textAlign="center">
                  {isRequired ? <SvgIcon name="check" intent="primary" /> : ''}
                </Table.Cell>
              ) : null}
              {isSomeResponsive ? (
                <Table.Cell textAlign="center">
                  {isResponsive ? <SvgIcon name="check" intent="primary" /> : ''}
                </Table.Cell>
              ) : null}
              <Table.Cell>{description}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  )
}
