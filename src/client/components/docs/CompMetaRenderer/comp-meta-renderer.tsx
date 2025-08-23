import { Text, Table, TableHead, TableBody, TableRow, TableHeadCell, TableCell } from 'lib/components'
import { ComponentMeta } from 'lib/definitions'

export const CompMetaRenderer = ({ data }: { data: ComponentMeta }) => {
  if (!data) {
    return null
  }

  return (
    <>
      <Text>{data.name}</Text>
      <Text>{data.description}</Text>
      <Table zebra>
        <TableHead>
          <TableRow>
            <TableHeadCell>Name</TableHeadCell>
            <TableHeadCell>Type</TableHeadCell>
            <TableHeadCell>Options</TableHeadCell>
            <TableHeadCell>Required</TableHeadCell>
            <TableHeadCell>Default</TableHeadCell>
            <TableHeadCell>Description</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.props.map(({ name, type, options, required, defaultValue, description }) => (
            <TableRow key={name}>
              <TableCell>{name}</TableCell>
              <TableCell>{type}</TableCell>
              <TableCell>{typeof options === 'string' ? options : options.join(' | ')}</TableCell>
              <TableCell>{required ? 'true' : ''}</TableCell>
              <TableCell>{defaultValue}</TableCell>
              <TableCell>{description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
