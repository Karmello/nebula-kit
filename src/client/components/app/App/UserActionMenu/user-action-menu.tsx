import { useLocation } from 'react-router'

import { Flex, IconButton, Select } from 'lib/components'
import { useLogoutUser } from 'client/api'
import { PageKey } from 'client/definitions'
import { useNavigateTo } from 'client/hooks'
import { useAppStore } from 'client/store'

import { AppPrefsDialog } from './components/app-prefs-dialog'
import { WebsiteMapDialog } from './components/website-map-dialog'

export const UserActionMenu = () => {
  const { pathname } = useLocation()
  const navigateTo = useNavigateTo()
  const logoutUser = useLogoutUser()

  const user = useAppStore(state => state.user)
  const showWebsiteMap = useAppStore(state => state.showWebsiteMap)
  const setShowWebsiteMap = useAppStore(state => state.setShowWebsiteMap)
  const showAppJump = useAppStore(state => state.showAppJump)
  const setShowAppJump = useAppStore(state => state.setShowAppJump)
  const showAppSettings = useAppStore(state => state.showAppSettings)
  const setShowAppSettings = useAppStore(state => state.setShowAppSettings)

  const splitted = pathname.split('/')
  const currentPageKey = `/${splitted[1]}/${splitted[2]}`

  return (
    <>
      <Flex>
        <IconButton
          scale="md"
          iconName="compass"
          intent="muted"
          onClick={() => {
            if (!showWebsiteMap) setShowWebsiteMap(true)
          }}
        />
        <IconButton
          scale="md"
          iconName={showAppJump ? 'search-x' : 'search'}
          intent="muted"
          onClick={() => {
            if (!showAppJump) setShowAppJump(true)
          }}
        />
        <IconButton
          scale="md"
          iconName="settings"
          intent="muted"
          onClick={() => {
            if (!showAppSettings) setShowAppSettings(true)
          }}
        />
        <Select
          intent="muted"
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
      <WebsiteMapDialog />
      <AppPrefsDialog />
    </>
  )
}
