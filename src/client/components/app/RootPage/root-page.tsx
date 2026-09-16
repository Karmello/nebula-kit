import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router'

import { Loader } from 'lib/components/core/Loader'
import { PageKey } from 'client/definitions'

import styles from './root-page.module.scss'

const HomePage = lazy(() =>
  import('client/pages/app/HomePage').then(m => ({ default: m.HomePage }))
)
const PatternsPage = lazy(() =>
  import('client/pages/app/PatternsPage').then(m => ({ default: m.PatternsPage }))
)
const PlaygroundPage = lazy(() =>
  import('client/pages/app/PlaygroundPage').then(m => ({ default: m.PlaygroundPage }))
)
const FoundationsPage = lazy(() =>
  import('client/pages/app/FoundationsPage').then(m => ({ default: m.FoundationsPage }))
)
const LibraryPage = lazy(() =>
  import('client/pages/app/LibraryPage').then(m => ({ default: m.LibraryPage }))
)
const FaqPage = lazy(() => import('client/pages/app/FaqPage').then(m => ({ default: m.FaqPage })))
const BlogPage = lazy(() =>
  import('client/pages/app/BlogPage').then(m => ({ default: m.BlogPage }))
)
const PricingPage = lazy(() =>
  import('client/pages/app/PricingPage').then(m => ({ default: m.PricingPage }))
)
const LibraryBundlePage = lazy(() =>
  import('client/pages/app/LibraryBundlePage').then(m => ({ default: m.LibraryBundlePage }))
)
const FeedbackPage = lazy(() =>
  import('client/pages/app/FeedbackPage').then(m => ({ default: m.FeedbackPage }))
)
const AssistantPage = lazy(() =>
  import('client/pages/app/AssistantPage').then(m => ({ default: m.AssistantPage }))
)
const LoginPage = lazy(() =>
  import('client/pages/app/LoginPage').then(m => ({ default: m.LoginPage }))
)
const RegisterPage = lazy(() =>
  import('client/pages/app/RegisterPage').then(m => ({ default: m.RegisterPage }))
)
const RecoveryPage = lazy(() =>
  import('client/pages/app/RecoveryPage').then(m => ({ default: m.RecoveryPage }))
)
const ProfileAccountPage = lazy(() =>
  import('client/pages/app/ProfileAccountPage').then(m => ({ default: m.ProfileAccountPage }))
)
const ProfileSettingsPage = lazy(() =>
  import('client/pages/app/ProfileSettingsPage').then(m => ({ default: m.ProfileSettingsPage }))
)
const ConfirmActionPage = lazy(() =>
  import('client/pages/app/ConfirmActionPage').then(m => ({ default: m.ConfirmActionPage }))
)

export const RootPage = () => {
  return (
    <div className={styles.RootPage}>
      <Suspense fallback={<Loader centered />}>
        <Routes>
          <Route path={PageKey.home} Component={HomePage} />
          <Route path={PageKey.patterns} Component={PatternsPage} />
          <Route path={PageKey.playground} Component={PlaygroundPage} />
          <Route path={`${PageKey.foundations}/*`} Component={FoundationsPage} />
          <Route path={`${PageKey.library}/*`} Component={LibraryPage} />
          <Route path={PageKey.faq} Component={FaqPage} />
          <Route path={PageKey.blog} Component={BlogPage} />
          <Route path={PageKey.pricing} Component={PricingPage} />
          <Route path={PageKey.pricingCore} element={<LibraryBundlePage bundle="core" />} />
          <Route path={PageKey.pricingPro} element={<LibraryBundlePage bundle="pro" />} />
          <Route path={PageKey.feedback} Component={FeedbackPage} />
          <Route path={PageKey.assistant} Component={AssistantPage} />
          <Route path={PageKey.authLogin} Component={LoginPage} />
          <Route path={PageKey.authRegister} Component={RegisterPage} />
          <Route path={PageKey.authRecover} Component={RecoveryPage} />
          <Route path={PageKey.profileAccount} Component={ProfileAccountPage} />
          <Route path={PageKey.profileSettings} Component={ProfileSettingsPage} />
          <Route path={PageKey.confirmAction} Component={ConfirmActionPage} />
          <Route
            path="*"
            Component={() => {
              if (typeof window === 'undefined') return null
              return <Navigate to={{ pathname: PageKey.home }} replace />
            }}
          />
        </Routes>
      </Suspense>
    </div>
  )
}
