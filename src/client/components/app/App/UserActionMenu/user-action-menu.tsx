import { useLocation } from 'react-router'

import { useNavigateTo } from 'client/services'
import { PageKey } from 'client/definitions'
import { useAppStore } from 'client/store'
import { Select } from 'lib/components'

export const UserActionMenu = () => {
  const { pathname } = useLocation()
  const { token, setToken } = useAppStore()

  const navigateTo = useNavigateTo()

  const currentPageKey = pathname.split('/')[1]

  return (
    <Select
      intent="muted"
      itemBorderIntent="tertiary"
      dropdownPlacement="bottom-end"
      staticLabel="Account"
      value={currentPageKey}
      onChange={value => {
        if (value === 'logout') {
          setToken('')
        } else {
          navigateTo(`/${value}`)
        }
      }}
    >
      {!token ? (
        <>
          <Select.Option value={PageKey.login}>Log in</Select.Option>
          <Select.Option value={PageKey.register}>Register</Select.Option>
        </>
      ) : (
        <>
          <Select.Option value={PageKey.dashboard}>Dashboard</Select.Option>
          <Select.Option value="logout">Log out</Select.Option>
        </>
      )}
    </Select>
  )
}
