import { useLocation } from 'react-router'

import { useNavigateTo } from 'client/hooks'
import { PageKey } from 'client/definitions'
import { useAppStore } from 'client/store'
import { Select } from 'lib/components'

export const UserActionMenu = () => {
  const { pathname } = useLocation()
  const { token, setToken } = useAppStore()

  const navigateTo = useNavigateTo()

  const splitted = pathname.split('/')
  const currentPageKey = `/${splitted[1]}/${splitted[2]}`

  return (
    <Select
      intent="muted"
      itemBorderIntent="tertiary"
      dropdownPlacement="bottom-end"
      staticLabel="Profile"
      inlineSize="125px"
      value={currentPageKey}
      onChange={value => {
        if (value === 'logout') {
          setToken('')
        } else {
          navigateTo(value)
        }
      }}
    >
      {!token ? (
        <>
          <Select.Option value={PageKey.authLogin}>Log in</Select.Option>
          <Select.Option value={PageKey.authRegister}>Register</Select.Option>
        </>
      ) : (
        <>
          <Select.Option value={PageKey.profileAccount}>Account</Select.Option>
          <Select.Option value={PageKey.profileSettings}>Settings</Select.Option>
          <Select.Option value="logout">Log out</Select.Option>
        </>
      )}
    </Select>
  )
}
