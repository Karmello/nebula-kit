import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { NavBar, NavBarProps, Button, Dialog, FlexContainer, Divider } from 'lib/components'
import { useStore } from 'lib/state'
import { useDocsStore, usePlaygroundStore } from 'client/store'
import { formatAsQueryString } from 'client/services'

import { LangSelect } from './LangSelect'
import { ThemeSelect } from './ThemeSelect'

export type AppNavBarProps = {
  children: NavBarProps['children']
}

export const AppNavBar = ({ children }: AppNavBarProps) => {
  const [settingsDialogOpen, setSettingsDialogOpen] = useState<boolean>(false)

  const { t } = useTranslation()
  const push = useNavigate()
  const { pathname } = useLocation()

  const { lang, theme } = useStore()
  const playgroundStore = usePlaygroundStore()
  const docsStore = useDocsStore()

  const pageKey = pathname.split('/').filter(s => s)[0]

  return (
    <>
      <NavBar
        mainMenuProps={{
          options: [
            { value: 'home', text: t('common.home') },
            { value: 'playground', text: t('common.playground') },
            { value: 'docs', text: t('common.docs') },
            { value: 'feedback', text: t('common.feedback') },
          ],
          value: pageKey,
          defaultValue: 'Jump to',
          width: '135px',
          onChange: (value: string) => {
            if (value !== pageKey) {
              const search = formatAsQueryString({ lang, theme })
              if (value === 'playground') {
                push(`/playground/${playgroundStore.categoryKey}/${playgroundStore.itemKey}?${search}`)
              } else if (value === 'docs') {
                push(`/docs/${docsStore.categoryKey}/${docsStore.itemKey}?${search}`)
              } else {
                push(`/${value}?${search}`)
              }
            }
          },
        }}
        // sideMenuProps={{
        //   options: [{ value: 'settings', text: 'Settings' }],
        //   value: pageKey,
        //   defaultValue: 'Account',
        //   width: '115px',
        //   onChange: () => {},
        // }}
        selectedItem={pageKey}
        CustomContent={() => (
          <>
            <Button
              iconProps={{ name: 'setting', surfaceProps: { color: 'blue-4' } }}
              nativeButtonProps={{
                onClick: () => {
                  setSettingsDialogOpen(true)
                },
              }}
            />
          </>
        )}
        sticky
      >
        {children}
      </NavBar>
      <Dialog
        open={settingsDialogOpen}
        setOpen={setSettingsDialogOpen}
        headingText={t('common.settings')}
        width="400px"
        disableScrollbar
      >
        <>
          <FlexContainer vGapSize="xs" flexDirection="column">
            <LangSelect />
            <ThemeSelect />
          </FlexContainer>
          <Divider size="xs" />
        </>
      </Dialog>
    </>
  )
}
