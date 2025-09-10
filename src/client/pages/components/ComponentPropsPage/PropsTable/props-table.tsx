import { Section, SvgIcon, Table, Text } from 'lib/components'
import { ComponentMeta } from 'client/definitions'

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
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell elemProps={{ style: { minWidth: '15ch' } }}>Options</Table.HeadCell>
            <Table.HeadCell elemProps={{ style: { textAlign: 'center' } }}>Default</Table.HeadCell>
            {isSomeRequired ? (
              <Table.HeadCell elemProps={{ style: { textAlign: 'center' } }}>Required</Table.HeadCell>
            ) : null}
            {isSomeResponsive ? (
              <Table.HeadCell elemProps={{ style: { textAlign: 'center' } }}>Responsive</Table.HeadCell>
            ) : null}
            <Table.HeadCell elemProps={{ style: { width: '40%', minWidth: '40ch' } }}>
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
              <Table.Cell elemProps={{ style: { textAlign: 'center', whiteSpace: 'nowrap' } }}>
                {defaultValue !== undefined ? defaultValue : '-'}
              </Table.Cell>
              {isSomeRequired ? (
                <Table.Cell elemProps={{ style: { textAlign: 'center' } }}>
                  {isRequired ? <SvgIcon iconName="check" iconIntent="primary" iconSize={10} /> : '-'}
                </Table.Cell>
              ) : null}
              {isSomeResponsive ? (
                <Table.Cell elemProps={{ style: { textAlign: 'center' } }}>
                  {isResponsive ? <SvgIcon iconName="check" iconIntent="primary" iconSize={10} /> : '-'}
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
