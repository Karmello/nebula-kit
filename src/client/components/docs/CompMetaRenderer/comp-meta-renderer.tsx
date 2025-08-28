import {
  Text,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeadCell,
  TableCell,
  Spacer,
  SvgIcon,
  Divider,
} from 'lib/components'

import { ComponentMeta } from 'lib/definitions'

const EMPTY_CELL_MARKER = '-'

export const CompMetaRenderer = ({ data }: { data: ComponentMeta }) => {
  if (!data) {
    return null
  }

  return (
    <>
      <Text typography="h3">{data.name}</Text>
      <Divider />
      <Spacer size={10} />
      <Text typography="lead" intent="primary">
        {data.description}
      </Text>
      <Spacer size={20} />
      <Table key={data.name} layout="fixed" scrollable>
        <TableHead>
          <TableRow>
            <TableHeadCell style={{ width: '17ch' }}>Name</TableHeadCell>
            <TableHeadCell style={{ width: '30ch' }}>Type</TableHeadCell>
            <TableHeadCell style={{ width: '30ch' }}>Options</TableHeadCell>
            <TableHeadCell style={{ width: '8ch' }}>Required</TableHeadCell>
            <TableHeadCell style={{ width: '10ch' }}>Default</TableHeadCell>
            <TableHeadCell style={{ width: '50ch' }}>Description</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.props.map(({ name, type, options, required, defaultValue, description }) => (
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
    </>
  )
}
