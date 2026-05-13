import { kebabCase } from 'change-case'

import { Icon, Section, Spacer, Table, Text, Link, Tooltip, Flex, WithIcon } from 'lib/components'
import { ComponentMeta } from 'client/definitions'

type Props = {
  category?: string
  data: ComponentMeta<Record<string, object>>['props']
}

const MIN_OPTIONS_FOR_TOOLTIP = 5
const VISIBLE_OPTIONS_COUNT = 3

export const PropsTable = ({ category, data }: Props) => {
  const table = (
    <Table color="blue" intent="neutral" paddingBlock="2xs" paddingInline="xs">
      <Table.Header>
        <Table.HeaderRow>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell minInlineSize="20ch">Value</Table.HeaderCell>
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
            const { options, isRequired, isResponsive, defaultValue, description, link } = data[name]

            const shouldShowTooltip = options.length >= MIN_OPTIONS_FOR_TOOLTIP
            const visibleOptions = options.slice(0, VISIBLE_OPTIONS_COUNT).join(', ')

            return (
              <Table.Row key={name}>
                <Table.Cell>
                  {!link ? (
                    <Text intent="primary" color="blue" bold>
                      {name}
                    </Text>
                  ) : (
                    <WithIcon iconName="external-link" iconPlacement="right" iconColor="blue" iconIntent="primary">
                      <Link
                        href={`https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/${kebabCase(name)}`}
                        target="_blank"
                      >
                        <Text intent="primary" color="blue" bold>
                          {name}
                        </Text>
                      </Link>
                    </WithIcon>
                  )}
                </Table.Cell>
                <Table.Cell>
                  {shouldShowTooltip ? (
                    <Tooltip content={options.join(', ')} placement="top-center" minInlineSize={100} maxInlineSize={350}>
                      <Text>
                        {visibleOptions}
                        <Text tag="span" noWrap>
                          {' '}
                          . . .
                        </Text>
                      </Text>
                    </Tooltip>
                  ) : (
                    <Text>{options.join(', ')}</Text>
                  )}
                </Table.Cell>
                <Table.Cell tagAttrs={{ style: { whiteSpace: 'nowrap' } }}>
                  <Text textAlign="center">{defaultValue !== undefined ? defaultValue : '-'}</Text>
                </Table.Cell>
                <Table.Cell>
                  <Flex justifyContent="center">
                    {isRequired ? <Icon name="check" intent="primary" color="blue" size="20px" /> : '-'}
                  </Flex>
                </Table.Cell>
                <Table.Cell>
                  <Flex justifyContent="center">
                    {isResponsive ? <Icon name="check" intent="primary" color="blue" size="20px" /> : '-'}
                  </Flex>
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
        <Spacer blockSize="2xl" />
      </>
    )
  } else {
    return (
      <>
        {table}
        <Spacer blockSize="2xl" />
      </>
    )
  }
}
