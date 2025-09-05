import { Section, SvgIcon, Table, Text } from 'lib/components'
import { ComponentMeta } from 'lib/definitions'

type Props = {
  data: ComponentMeta<unknown>['props']
}

export const PropsTable = ({ data }: Props) => {
  const isSomeRequired = data.some(prop => prop.isRequired)
  const isSomeResponsive = data.some(prop => prop.isResponsive)

  return (
    <Section heading={data[0].category} marginBottom={20}>
      <Table zebra>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell elemProps={{ style: { width: '17ch' } }}>Name</Table.HeadCell>
            <Table.HeadCell elemProps={{ style: { width: '30ch' } }}>Options</Table.HeadCell>
            <Table.HeadCell elemProps={{ style: { width: '10ch', textAlign: 'center' } }}>
              Default
            </Table.HeadCell>
            {isSomeRequired ? (
              <Table.HeadCell elemProps={{ style: { width: '8ch' } }}>Required</Table.HeadCell>
            ) : null}
            {isSomeResponsive ? (
              <Table.HeadCell elemProps={{ style: { width: '10ch' } }}>Responsive</Table.HeadCell>
            ) : null}
            <Table.HeadCell elemProps={{ style: { width: '40ch' } }}>Description</Table.HeadCell>
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
              <Table.Cell elemProps={{ style: { textAlign: 'center' } }}>{defaultValue}</Table.Cell>
              {isSomeRequired ? (
                <Table.Cell elemProps={{ style: { textAlign: 'center' } }}>
                  {isRequired ? <SvgIcon name="check" intent="primary" /> : ''}
                </Table.Cell>
              ) : null}
              {isSomeResponsive ? (
                <Table.Cell elemProps={{ style: { textAlign: 'center' } }}>
                  {isResponsive ? <SvgIcon name="check" intent="primary" /> : ''}
                </Table.Cell>
              ) : null}
              <Table.Cell>{description}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Section>
  )
}
