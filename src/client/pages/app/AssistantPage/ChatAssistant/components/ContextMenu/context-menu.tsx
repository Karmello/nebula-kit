import { Select, SelectProps } from 'lib/components'

export const ContextMenu = (props: Partial<SelectProps>) => {
  return (
    <Select size="xs" inlineSize="100px" intent="muted" staticLabel="Actions" value="" {...props}>
      <Select.Option value="new-chat">New chat</Select.Option>
    </Select>
  )
}
