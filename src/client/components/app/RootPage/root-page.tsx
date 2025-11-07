import { Routes, Route, Navigate } from 'react-router'

import { HomePage, FoundationsPage, ComponentsPage, PricingPage, ComponentsBundlePage } from 'client/pages'
import { PageKey } from 'client/definitions'

import styles from './root-page.module.scss'

export const RootPage = () => {
  return (
    <div className={styles.RootPage}>
      <Routes>
        <Route path={`/${PageKey.home}`} Component={HomePage} />
        <Route path={`/${PageKey.foundations}/*`} Component={FoundationsPage} />
        <Route path={`/${PageKey.components}/*`} Component={ComponentsPage} />
        <Route path={PageKey.pricing} Component={PricingPage} />
        <Route path={`/${PageKey.pricing}/core`} element={<ComponentsBundlePage plan="free" />} />
        <Route path={`/${PageKey.pricing}/pro`} element={<ComponentsBundlePage plan="pro" />} />
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
