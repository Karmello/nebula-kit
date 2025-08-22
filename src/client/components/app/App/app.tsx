import { useEffect, useLayoutEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Loader } from 'lib/components'
import { useStore } from 'lib/state'
import { validateQueryParams } from 'client/services'
import { useAppStore } from 'client/store'

import { AppNavBar } from './AppNavBar'
import { AppFooter } from './AppFooter'
import { RootPage } from '../RootPage'

export const App = () => {
  const { i18n } = useTranslation()
  const { pathname, search } = useLocation()
  const push = useNavigate()

  const { lang, setLang, theme, setTheme } = useStore()
  const { loading, setLoading, distractionFreeMode } = useAppStore()

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
    window.scrollTo({ top: 0 })
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return (
    <div>
      {!loading && (
        <>
          {!distractionFreeMode ? (
            <>
              <AppNavBar>
                <RootPage />
              </AppNavBar>
              <AppFooter />
            </>
          ) : (
            <RootPage />
          )}
        </>
      )}
      <Loader surfaceProps={{ loading, size: 'xxl' }} verticallyCentered />
    </div>
  )
}
