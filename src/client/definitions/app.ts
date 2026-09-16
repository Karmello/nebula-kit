import { FOUNDATIONS_SECTIONS } from './foundations-routing'
import { LIBRARY_SECTIONS } from './library-routing'

export enum PageKey {
  authLogin = '/auth/log-in',
  authRecover = '/auth/recover',
  authRegister = '/auth/register',
  confirmAction = '/confirm-action',
  library = '/library',
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
  ...LIBRARY_SECTIONS.map(o => ({ ...o, pageKey: PageKey.library.replace('/', '') })),
]
