import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router'

import { Box } from 'lib/components/core/Box'
import { Loader } from 'lib/components/core/Loader'
import { NEB_LENGTH } from 'lib/constants'
import { PageKey } from 'client/definitions'

import styles from './root-page.module.scss'

const importHomePage = () =>
  import('client/pages/app/HomePage').then(m => ({ default: m.HomePage }))
const importPatternsPage = () =>
  import('client/pages/app/PatternsPage').then(m => ({ default: m.PatternsPage }))
const importPlaygroundPage = () =>
  import('client/pages/app/PlaygroundPage').then(m => ({ default: m.PlaygroundPage }))
const importFoundationsPage = () =>
  import('client/pages/app/FoundationsPage').then(m => ({ default: m.FoundationsPage }))
const importLibraryPage = () =>
  import('client/pages/app/LibraryPage').then(m => ({ default: m.LibraryPage }))
const importFaqPage = () => import('client/pages/app/FaqPage').then(m => ({ default: m.FaqPage }))
const importBlogPage = () =>
  import('client/pages/app/BlogPage').then(m => ({ default: m.BlogPage }))
const importPricingPage = () =>
  import('client/pages/app/PricingPage').then(m => ({ default: m.PricingPage }))
const importLibraryBundlePage = () =>
  import('client/pages/app/LibraryBundlePage').then(m => ({ default: m.LibraryBundlePage }))
const importFeedbackPage = () =>
  import('client/pages/app/FeedbackPage').then(m => ({ default: m.FeedbackPage }))
const importAssistantPage = () =>
  import('client/pages/app/AssistantPage').then(m => ({ default: m.AssistantPage }))
const importLoginPage = () =>
  import('client/pages/app/LoginPage').then(m => ({ default: m.LoginPage }))
const importRegisterPage = () =>
  import('client/pages/app/RegisterPage').then(m => ({ default: m.RegisterPage }))
const importRecoveryPage = () =>
  import('client/pages/app/RecoveryPage').then(m => ({ default: m.RecoveryPage }))
const importProfileAccountPage = () =>
  import('client/pages/app/ProfileAccountPage').then(m => ({ default: m.ProfileAccountPage }))
const importProfileSettingsPage = () =>
  import('client/pages/app/ProfileSettingsPage').then(m => ({ default: m.ProfileSettingsPage }))
const importConfirmActionPage = () =>
  import('client/pages/app/ConfirmActionPage').then(m => ({ default: m.ConfirmActionPage }))

// Single source of truth for every lazy-loaded page's dynamic import.
// The server calls each of these once at startup (see warmPageImports) so
// Node's module cache is already populated by request time - otherwise
// React.lazy() suspends on first render and renderToString (which never
// waits for Suspense) would emit the fallback instead of real page content.
export const PAGE_IMPORTS = [
  importHomePage,
  importPatternsPage,
  importPlaygroundPage,
  importFoundationsPage,
  importLibraryPage,
  importFaqPage,
  importBlogPage,
  importPricingPage,
  importLibraryBundlePage,
  importFeedbackPage,
  importAssistantPage,
  importLoginPage,
  importRegisterPage,
  importRecoveryPage,
  importProfileAccountPage,
  importProfileSettingsPage,
  importConfirmActionPage,
]

const HomePage = lazy(importHomePage)
const PatternsPage = lazy(importPatternsPage)
const PlaygroundPage = lazy(importPlaygroundPage)
const FoundationsPage = lazy(importFoundationsPage)
const LibraryPage = lazy(importLibraryPage)
const FaqPage = lazy(importFaqPage)
const BlogPage = lazy(importBlogPage)
const PricingPage = lazy(importPricingPage)
const LibraryBundlePage = lazy(importLibraryBundlePage)
const FeedbackPage = lazy(importFeedbackPage)
const AssistantPage = lazy(importAssistantPage)
const LoginPage = lazy(importLoginPage)
const RegisterPage = lazy(importRegisterPage)
const RecoveryPage = lazy(importRecoveryPage)
const ProfileAccountPage = lazy(importProfileAccountPage)
const ProfileSettingsPage = lazy(importProfileSettingsPage)
const ConfirmActionPage = lazy(importConfirmActionPage)

export const RootPage = () => {
  return (
    <div className={styles.RootPage}>
      <Suspense
        fallback={
          <Box textAlign="center" marginTop="300px">
            <Loader size={NEB_LENGTH.px_032} />
          </Box>
        }
      >
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
