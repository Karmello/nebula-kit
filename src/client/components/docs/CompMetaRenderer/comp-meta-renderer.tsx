import { useDocsStore } from 'client/store'
import { ComponentMeta } from 'lib/definitions'

export const CompMetaRenderer = ({ data }: { data: ComponentMeta }) => {
  const { itemKey } = useDocsStore()

  if (!data) {
    return null
  }

  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Type</td>
          <td>Options</td>
          <td>Required</td>
          <td>Default</td>
          <td>Description</td>
        </tr>
      </thead>
      <tbody>
        {data.props.map(({ name, type, options, required, defaultValue, description }) => (
          <tr key={name}>
            <td>{name}</td>
            <td>{type}</td>
            <td>{typeof options === 'string' ? options : options.join(' | ')}</td>
            <td>{required ? 'true' : ''}</td>
            <td>{defaultValue}</td>
            <td>{description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
