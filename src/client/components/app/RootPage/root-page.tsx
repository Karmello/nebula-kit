import { Routes, Route, Navigate } from 'react-router'

import {
  HomePage,
  FoundationsPage,
  ComponentsPage,
  FaqPage,
  BlogPage,
  PricingPage,
  ComponentsBundlePage,
  LoginPage,
  RegisterPage,
  RecoveryPage,
  ProfileAccountPage,
  ProfileSettingsPage,
  ConfirmActionPage,
  FeedbackPage,
  PlaygroundPage,
  PatternsPage,
  AssistantPage,
} from 'client/pages'

import { PageKey } from 'client/definitions'

import styles from './root-page.module.scss'

export const RootPage = () => {
  return (
    <div className={styles.RootPage}>
      <Routes>
        <Route path={PageKey.home} Component={HomePage} />
        <Route path={PageKey.patterns} Component={PatternsPage} />
        <Route path={PageKey.playground} Component={PlaygroundPage} />
        <Route path={`${PageKey.foundations}/*`} Component={FoundationsPage} />
        <Route path={`${PageKey.components}/*`} Component={ComponentsPage} />
        <Route path={PageKey.faq} Component={FaqPage} />
        <Route path={PageKey.blog} Component={BlogPage} />
        <Route path={PageKey.pricing} Component={PricingPage} />
        <Route path={PageKey.pricingCore} element={<ComponentsBundlePage bundle="core" />} />
        <Route path={PageKey.pricingPro} element={<ComponentsBundlePage bundle="pro" />} />
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
    </div>
  )
}
