import { useDocsPageStore } from 'client/store'
import { ComponentMeta } from 'lib/definitions'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Text,
  SvgIcon,
} from 'lib/components'

const EMPTY_CELL_MARKER = '-'

export const CompPropsPage = () => {
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
    <Table scrollable>
      <TableHead>
        <TableRow>
          <TableHeadCell style={{ width: '17ch' }}>Name</TableHeadCell>
          <TableHeadCell style={{ width: '30ch' }}>Type</TableHeadCell>
          <TableHeadCell style={{ width: '30ch' }}>Options</TableHeadCell>
          <TableHeadCell style={{ width: '10ch' }}>Required</TableHeadCell>
          <TableHeadCell style={{ width: '10ch' }}>Default</TableHeadCell>
          <TableHeadCell style={{ width: '50ch' }}>Description</TableHeadCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {META_DATA.props.map(({ name, type, options, required, defaultValue, description }) => (
          <TableRow key={name}>
            <TableCell>{name}</TableCell>
            <TableCell>
              <Text italic intent="primary">
                {type}
              </Text>
            </TableCell>
            <TableCell>
              {typeof options === 'string' ? options : options.join(' | ') || EMPTY_CELL_MARKER}
            </TableCell>
            <TableCell textAlign="center">
              {required ? <SvgIcon name="check" intent="primary" /> : ''}
            </TableCell>
            <TableCell>{defaultValue}</TableCell>
            <TableCell>{description || EMPTY_CELL_MARKER}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
