import { COMPONENTS_PAGE_SECTIONS } from './components-page-routing'
import { FOUNDATIONS_SECTIONS } from './foundations-routing'

export enum PageKey {
  authLogin = '/auth/log-in',
  authRecover = '/auth/recover',
  authRegister = '/auth/register',
  confirmAction = '/confirm-action',
  components = '/components',
  faq = '/faq',
  blog = '/blog',
  feedback = '/feedback',
  assistant = '/assistant',
  foundations = '/foundations',
  home = '/home',
  playground = '/playground',
  patterns = '/patterns',
  pricing = '/pricing',
  pricingCore = '/pricing/core',
  pricingPro = '/pricing/pro',
  profileAccount = '/profile/account',
  profileSettings = '/profile/settings',
}

export const PAGE_SECTIONS = [
  ...FOUNDATIONS_SECTIONS.map(o => ({ ...o, pageKey: PageKey.foundations.replace('/', '') })),
  ...COMPONENTS_PAGE_SECTIONS.map(o => ({ ...o, pageKey: PageKey.components.replace('/', '') })),
]

export const DOCS_CSS_LABEL = '<CSS>'
