import { useLocation } from 'react-router'

import { useNavigateTo } from 'client/hooks'
import { PageKey } from 'client/definitions'
import { useAppStore } from 'client/store'
import { useLogoutUser } from 'client/api'
import { Button, Flex, Select } from 'lib/components'

import { AppPrefsDialog } from './components/app-prefs-dialog'

export const UserActionMenu = () => {
  const { pathname } = useLocation()
  const navigateTo = useNavigateTo()
  const logoutUser = useLogoutUser()

  const user = useAppStore(state => state.user)
  const showAppJump = useAppStore(state => state.showAppJump)
  const setShowAppJump = useAppStore(state => state.setShowAppJump)
  const showAppSettings = useAppStore(state => state.showAppSettings)
  const setShowAppSettings = useAppStore(state => state.setShowAppSettings)

  const splitted = pathname.split('/')
  const currentPageKey = `/${splitted[1]}/${splitted[2]}`

  return (
    <>
      <Flex>
        <Button
          tagAttrs={{
            onClick: () => {
              if (!showAppJump) setShowAppJump(true)
            },
          }}
          iconName={showAppJump ? 'search-x' : 'search'}
          intent="muted"
        />
        <Button
          tagAttrs={{
            onClick: () => {
              if (!showAppSettings) setShowAppSettings(true)
            },
          }}
          iconName="settings"
          intent="muted"
        />
        <Select
          triggerIntent="muted"
          listIntent="tertiary"
          itemBorderIntent="secondary"
          dropdownPlacement="bottom-end"
          staticLabel="Profile"
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
      <AppPrefsDialog />
    </>
  )
}
