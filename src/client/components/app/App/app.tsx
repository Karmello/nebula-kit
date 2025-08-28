import { useEffect } from 'react'
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

  useEffect(() => {
    const validated = validateQueryParams(search)
    setLang(validated.lang)
    setTheme(validated.theme)
  }, [])

  useEffect(() => {
    i18n.changeLanguage(lang)
    push(`${pathname}?lang=${lang}&theme=${theme}`, { replace: true })
  }, [lang, theme])

  return (
    <>
      <AppFrame stickyHeader>
        <AppFrame.Header>
          <AppNavBar />
        </AppFrame.Header>
        <AppFrame.Main mt={10}>
          <RootPage />
        </AppFrame.Main>
      </AppFrame>
    </>
  )
}
