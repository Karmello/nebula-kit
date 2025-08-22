import { Routes, Route, Navigate } from 'react-router-dom'

import { HomePage, PlaygroundPage, DocsPage, FeedbackPage } from 'client/pages'
import { formatAsQueryString } from 'client/services'
import { useStore } from 'lib/state'
import { Divider } from 'lib/components'

import styles from './root-page.module.scss'

export const RootPage = () => {
  const { lang, theme } = useStore()

  return (
    <div className={styles.RootPage}>
      <Divider size="s" />
      <Routes>
        <Route path="/home" Component={HomePage} />
        <Route path="/playground/*" Component={PlaygroundPage} />
        <Route path="/docs/*" Component={DocsPage} />
        <Route path="/feedback" Component={FeedbackPage} />
        <Route
          path="*"
          element={<Navigate to={{ pathname: '/home', search: formatAsQueryString({ lang, theme }) }} />}
        />
      </Routes>
    </div>
  )
}
