import { Text, Table, TableHead, TableBody, TableRow, TableHeadCell, TableCell, Spacer } from 'lib/components'
import { ComponentMeta } from 'lib/definitions'

export const CompMetaRenderer = ({ data }: { data: ComponentMeta }) => {
  if (!data) {
    return null
  }

  return (
    <>
      <Text>{data.name}</Text>
      <Text>{data.description}</Text>
      <Spacer size={10} />
      <Table layout="fixed" scrollable>
        <TableHead>
          <TableRow>
            <TableHeadCell style={{ width: '15ch' }}>Name</TableHeadCell>
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
