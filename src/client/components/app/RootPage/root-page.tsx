import { useLayoutEffect, useRef } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router'

import {
  HomePage,
  FoundationsPage,
  CorePage,
  ProPage,
  FaqPage,
  PricingPage,
  ComponentsBundlePage,
  LoginPage,
  RegisterPage,
  RecoveryPage,
  ProfileAccountPage,
  ProfileSettingsPage,
} from 'client/pages'

import { useAppStore } from 'client/store'
import { useNavigateTo } from 'client/hooks'
import { PageKey } from 'client/definitions'

import styles from './root-page.module.scss'

export const RootPage = () => {
  const { token, setUser } = useAppStore()
  const navigateTo = useNavigateTo()
  const { pathname } = useLocation()

  const prevToken = useRef(token)

  useLayoutEffect(() => {
    if (prevToken.current !== token) {
      prevToken.current = token
      if (!token) {
        setUser(null)
        navigateTo(PageKey.authLogin)
      }
    }
  }, [token])

  useLayoutEffect(() => {
    if (token) {
      if (pathname.startsWith(PageKey.authLogin) || pathname.startsWith(PageKey.authRegister)) {
        navigateTo(PageKey.profileAccount, { replace: true })
      }
    } else {
      if (pathname.startsWith(PageKey.profileAccount) || pathname.startsWith(PageKey.profileSettings)) {
        navigateTo(PageKey.authLogin, { replace: true })
      }
    }
  }, [pathname])

  return (
    <div className={styles.RootPage}>
      <Routes>
        <Route path={PageKey.home} Component={HomePage} />
        <Route path={`${PageKey.foundations}/*`} Component={FoundationsPage} />
        <Route path={`${PageKey.core}/*`} Component={CorePage} />
        <Route path={`${PageKey.pro}/*`} Component={ProPage} />
        <Route path={`${PageKey.faq}/*`} Component={FaqPage} />
        <Route path={PageKey.pricing} Component={PricingPage} />
        <Route path={PageKey.pricingCore} element={<ComponentsBundlePage bundle="core" />} />
        <Route path={PageKey.pricingPro} element={<ComponentsBundlePage bundle="pro" />} />
        <Route path={PageKey.authLogin} Component={LoginPage} />
        <Route path={PageKey.authRegister} Component={RegisterPage} />
        <Route path={PageKey.authRecovery} Component={RecoveryPage} />
        <Route path={PageKey.profileAccount} Component={ProfileAccountPage} />
        <Route path={PageKey.profileSettings} Component={ProfileSettingsPage} />
        <Route
          path="*"
          Component={() => {
            if (typeof window === 'undefined') return null
            return <Navigate to={{ pathname: PageKey.home }} replace />
          }}
        />
      </Routes>
    </div>
  )
}
