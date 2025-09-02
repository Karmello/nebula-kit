import { useEffect, useLayoutEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { useLibStore } from 'lib/state'
import { AppFrame } from 'lib/components'
import { validateQueryParams } from 'client/services'

import { AppNavBar } from './AppNavBar'
import { RootPage } from '../RootPage'

export const App = () => {
  const { i18n } = useTranslation()
  const { pathname, search } = useLocation()
  const push = useNavigate()

  const { lang, setLang, theme, setTheme } = useLibStore()

  useLayoutEffect(() => {
    const validated = validateQueryParams(search)
    setLang(validated.lang)
    setTheme(validated.theme)
  }, [])

  useLayoutEffect(() => {
    i18n.changeLanguage(lang)
    push(`${pathname}?lang=${lang}&theme=${theme}`, { replace: true })
  }, [lang, theme])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <AppFrame stickyHeader>
      <AppFrame.Header intent="tertiary">
        <AppNavBar />
      </AppFrame.Header>
      <AppFrame.Main paddingTop={{ base: 5, lg: 20 }} paddingBottom={40}>
        <RootPage />
      </AppFrame.Main>
      <AppFrame.Footer intent="tertiary"></AppFrame.Footer>
    </AppFrame>
  )
}
