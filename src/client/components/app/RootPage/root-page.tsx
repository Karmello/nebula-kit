import { Routes, Route, Navigate } from 'react-router-dom'

import { HomePage, PlaygroundPage, DocsPage, FeedbackPage } from 'client/pages'
import { formatAsQueryString } from 'client/services'
import { useLibStore } from 'lib/state'

import styles from './root-page.module.scss'

export const RootPage = () => {
  const { lang, theme } = useLibStore()

  return (
    <div className={styles.RootPage}>
      <Routes>
        <Route path="/home" Component={HomePage} />
        <Route path="/playground/*" Component={PlaygroundPage} />
        <Route path="/docs/*" Component={DocsPage} />
        <Route path="/feedback" Component={FeedbackPage} />
        <Route
          path="*"
          element={
            <Navigate to={{ pathname: '/home', search: formatAsQueryString({ lang, theme }) }} replace />
          }
        />
      </Routes>
    </div>
  )
}
