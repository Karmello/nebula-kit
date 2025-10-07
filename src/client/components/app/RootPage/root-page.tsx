import { Routes, Route, Navigate } from 'react-router'

import { HomePage, FoundationsPage, ComponentsPage } from 'client/pages'
import { PageKey } from 'client/definitions'

import styles from './root-page.module.scss'

export const RootPage = () => {
  return (
    <div className={styles.RootPage}>
      <Routes>
        <Route path={`/${PageKey.home}`} Component={HomePage} />
        <Route path={`/${PageKey.foundations}/*`} Component={FoundationsPage} />
        <Route path={`/${PageKey.components}/*`} Component={ComponentsPage} />
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
