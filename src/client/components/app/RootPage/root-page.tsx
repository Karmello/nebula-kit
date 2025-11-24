import { useEffect, useRef } from 'react'
import { Routes, Route, Navigate } from 'react-router'

import {
  HomePage,
  FoundationsPage,
  ComponentsPage,
  PricingPage,
  ComponentsBundlePage,
  LoginPage,
  RegisterPage,
  ProfileDashboardPage,
} from 'client/pages'

import { useAppStore } from 'client/store'
import { useNavigateTo } from 'client/services'
import { PageKey } from 'client/definitions'

import styles from './root-page.module.scss'

export const RootPage = () => {
  const { token } = useAppStore()
  const navigateTo = useNavigateTo()

  const prevToken = useRef(token)

  useEffect(() => {
    if (prevToken.current !== token) {
      prevToken.current = token
      if (token) {
        navigateTo(`/${PageKey.profileDashboard}`)
      } else {
        navigateTo(`/${PageKey.authLogin}`)
      }
    }
  }, [token])

  return (
    <div className={styles.RootPage}>
      <Routes>
        <Route path={`/${PageKey.home}`} Component={HomePage} />
        <Route path={`/${PageKey.foundations}/*`} Component={FoundationsPage} />
        <Route path={`/${PageKey.components}/*`} Component={ComponentsPage} />
        <Route path={`/${PageKey.pricing}`} Component={PricingPage} />
        <Route path={`/${PageKey.pricingCore}`} element={<ComponentsBundlePage plan="free" />} />
        <Route path={`/${PageKey.pricingPro}`} element={<ComponentsBundlePage plan="pro" />} />
        {!token ? <Route path={`/${PageKey.authLogin}`} Component={LoginPage} /> : null}
        {!token ? <Route path={`/${PageKey.authRegister}`} Component={RegisterPage} /> : null}
        {token ? <Route path={`/${PageKey.profileDashboard}`} Component={ProfileDashboardPage} /> : null}
        <Route
          path="*"
          Component={() => {
            if (typeof window === 'undefined') return null
            return <Navigate to={{ pathname: `/${PageKey.home}` }} replace />
          }}
        />
      </Routes>
    </div>
  )
}
