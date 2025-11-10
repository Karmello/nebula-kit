import { Select } from 'lib/components'

export const UserActionMenu = () => {
  return (
    <Select intent="muted">
      <Select.Option value="login">Log in</Select.Option>
      <Select.Option value="register">Register</Select.Option>
    </Select>
  )
}
