import { NEB_LENGTH, Select, SelectProps } from 'lib/components'

export const ContextMenu = (props: Partial<SelectProps>) => {
  return (
    <Select size="xs" inlineSize={NEB_LENGTH.px_096} intent="muted" staticLabel="Actions" value="" {...props}>
      <Select.Option value="new-chat">New chat</Select.Option>
    </Select>
  )
}
