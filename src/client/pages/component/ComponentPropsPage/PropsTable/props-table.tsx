import { kebabCase } from 'change-case'

import { Icon, Section, Spacer, Table, Text, Link } from 'lib/components'
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
      <Table.Body intent="neutral">
        {Object.keys(data)
          .sort((a, b) => a.localeCompare(b))
          .map(name => {
            const { options, isRequired, isResponsive, defaultValue, description, link } = data[name]
            return (
              <Table.Row key={name}>
                <Table.Cell>
                  {!link ? (
                    <Text intent="primary" color="blue" bold>
                      {name}
                    </Text>
                  ) : (
                    <Link
                      href={`https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/${kebabCase(name)}`}
                      target="_blank"
                    >
                      <Text
                        intent="primary"
                        color="blue"
                        bold
                        iconName="external-link"
                        iconPlacement="right"
                        underline={false}
                      >
                        {name}
                      </Text>
                    </Link>
                  )}
                </Table.Cell>
                <Table.Cell>
                  <Text>{typeof options === 'string' ? options : options.join(', ')}</Text>
                </Table.Cell>
                <Table.Cell tagAttrs={{ style: { textAlign: 'center', whiteSpace: 'nowrap' } }}>
                  <Text>{defaultValue !== undefined ? defaultValue : '-'}</Text>
                </Table.Cell>
                <Table.Cell tagAttrs={{ style: { textAlign: 'center' } }}>
                  {isRequired ? <Icon name="check" intent="primary" color="blue" size="20px" /> : '-'}
                </Table.Cell>
                <Table.Cell tagAttrs={{ style: { textAlign: 'center' } }}>
                  {isResponsive ? <Icon name="check" intent="primary" color="blue" size="20px" /> : '-'}
                </Table.Cell>
                <Table.Cell>
                  <Text>{description}</Text>
                </Table.Cell>
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
