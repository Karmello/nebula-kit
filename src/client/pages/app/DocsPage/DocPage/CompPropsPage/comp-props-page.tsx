import { useTranslation } from 'react-i18next'

import { useDocsPageStore } from 'client/store'
import { ComponentMeta } from 'lib/definitions'
import { Table, Text, SvgIcon, Spacer } from 'lib/components'

const EMPTY_CELL_MARKER = '-'

export const CompPropsPage = () => {
  const { t } = useTranslation()

  const { itemKey } = useDocsPageStore()

  let META_DATA: ComponentMeta

  try {
    META_DATA = require(`../../../../../../meta/${itemKey}.json`)
  } catch {
    META_DATA = null
  }

  if (!META_DATA) {
    return null
  }

  return (
    <>
      <Text typography="h6">{t('common.props')}</Text>
      <Spacer size={5} />
      <Table zebra>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell style={{ width: '17ch' }}>Name</Table.HeadCell>
            <Table.HeadCell style={{ width: '30ch' }}>Type</Table.HeadCell>
            <Table.HeadCell style={{ width: '30ch' }}>Options</Table.HeadCell>
            <Table.HeadCell style={{ width: '10ch' }}>Default</Table.HeadCell>
            <Table.HeadCell style={{ width: '50ch' }}>Description</Table.HeadCell>
            <Table.HeadCell style={{ width: '10ch' }}>Required</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {META_DATA.props.map(({ name, type, options, required, defaultValue, description }) => (
            <Table.Row key={name}>
              <Table.Cell>
                <Text bold>{name}</Text>
              </Table.Cell>
              <Table.Cell>
                <Text italic intent="primary">
                  {type}
                </Text>
              </Table.Cell>
              <Table.Cell>
                {typeof options === 'string' ? options : options.join(' | ') || EMPTY_CELL_MARKER}
              </Table.Cell>
              <Table.Cell>{defaultValue}</Table.Cell>
              <Table.Cell>{description || EMPTY_CELL_MARKER}</Table.Cell>
              <Table.Cell textAlign="center">
                {required ? <SvgIcon name="check" intent="primary" /> : ''}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  )
}
