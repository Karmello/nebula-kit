import { kebabCase } from 'change-case'

import { Icon, Section, Spacer, Table, Text, Link, Tooltip, Box } from 'lib/components'
import { ComponentMeta } from 'client/definitions'

type Props = {
  category?: string
  data: ComponentMeta<Record<string, object>>['props']
}

export const PropsTable = ({ category, data }: Props) => {
  const table = (
    <Table color="blue" intent="neutral" paddingBlock="5px" paddingInline="10px">
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
      <Table.Body intent="muted">
        {Object.keys(data)
          .sort((a, b) => a.localeCompare(b))
          .map(name => {
            const { options, isRequired, isResponsive, defaultValue, description, link, tooltip } = data[name]
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
                  {tooltip ? (
                    <Tooltip content={tooltip} placement="top-center" minInlineSize={250} maxInlineSize={350}>
                      <Box display="inline-block">
                        <Text iconName="info" iconPlacement="right">
                          {typeof options === 'string' ? options : options.join(', ')}
                        </Text>
                      </Box>
                    </Tooltip>
                  ) : (
                    <Text>{typeof options === 'string' ? options : options.join(', ')}</Text>
                  )}
                </Table.Cell>
                <Table.Cell tagAttrs={{ style: { whiteSpace: 'nowrap' } }}>
                  <Text textAlign="center">{defaultValue !== undefined ? defaultValue : '-'}</Text>
                </Table.Cell>
                <Table.Cell textAlign="center">
                  {isRequired ? <Icon name="check" intent="primary" color="blue" size="20px" /> : '-'}
                </Table.Cell>
                <Table.Cell textAlign="center">
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
