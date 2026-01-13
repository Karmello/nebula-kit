import { useLocation } from 'react-router'

import { useNavigateTo } from 'client/hooks'
import { PageKey } from 'client/definitions'
import { useAppStore } from 'client/store'
import { useLogoutUser } from 'client/api'
import { Button, Flex, Select } from 'lib/components'

export const UserActionMenu = () => {
  const { pathname } = useLocation()
  const navigateTo = useNavigateTo()
  const logoutUser = useLogoutUser()

  const user = useAppStore(state => state.user)
  const showAppJump = useAppStore(state => state.showAppJump)
  const setShowAppJump = useAppStore(state => state.setShowAppJump)

  const splitted = pathname.split('/')
  const currentPageKey = `/${splitted[1]}/${splitted[2]}`

  return (
    <Flex>
      <Button
        tagAttrs={{
          onClick: () => {
            setShowAppJump(!showAppJump)
          },
        }}
        iconName={showAppJump ? 'search-x' : 'search'}
        intent="muted"
      />
      <Select
        intent="muted"
        itemBorderIntent="tertiary"
        dropdownPlacement="bottom-end"
        staticLabel="Profile"
        inlineSize="110px"
        value={currentPageKey}
        onChange={async value => {
          if (value === 'logout') {
            await logoutUser.sendRequest()
            navigateTo(PageKey.authLogin)
          } else {
            navigateTo(value)
          }
        }}
      >
        {!user ? (
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
    </Flex>
  )
}
