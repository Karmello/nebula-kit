import { Routes, Route, Navigate } from 'react-router-dom'

import { HomePage, FoundationsPage, ComponentsPage } from 'client/pages'
import { formatAsQueryString } from 'client/services'
import { PageKey } from 'client/definitions'
import { useLibStore } from 'lib/state'

import styles from './root-page.module.scss'

export const RootPage = () => {
  const { theme } = useLibStore()

  return (
    <div className={styles.RootPage}>
      <Routes>
        <Route path={`/${PageKey.home}`} Component={HomePage} />
        <Route path={`/${PageKey.foundations}/*`} Component={FoundationsPage} />
        <Route path={`/${PageKey.components}/*`} Component={ComponentsPage} />
        <Route
          path="*"
          element={
            <Navigate to={{ pathname: `/${PageKey.home}`, search: formatAsQueryString({ theme }) }} replace />
          }
        />
      </Routes>
    </div>
  )
}
