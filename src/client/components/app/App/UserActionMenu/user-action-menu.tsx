import { useLocation } from 'react-router'

import { useNavigateTo } from 'client/services'
import { PageKey } from 'client/definitions'
import { Select } from 'lib/components'

export const UserActionMenu = () => {
  const { pathname } = useLocation()

  const navigateTo = useNavigateTo()

  const currentPageKey = pathname.split('/')[1]

  return (
    <Select
      intent="muted"
      dropdownPlacement="bottom-end"
      staticLabel="Account"
      value={currentPageKey}
      onChange={value => {
        navigateTo(`/${value}`)
      }}
    >
      <Select.Option value={PageKey.login}>Log in</Select.Option>
      <Select.Option value={PageKey.register}>Register</Select.Option>
    </Select>
  )
}
