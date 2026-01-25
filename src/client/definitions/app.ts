import { FOUNDATIONS_SECTIONS } from './foundations-routing'
import { CORE_PAGE_SECTIONS } from './core-page-routing'
import { PRO_PAGE_SECTIONS } from './pro-page-routing'

export enum PageKey {
  authLogin = '/auth/log-in',
  authRecover = '/auth/recover',
  authRegister = '/auth/register',
  confirmAction = '/confirm-action',
  core = '/core',
  faq = '/faq',
  blog = '/blog',
  feedback = '/feedback',
  foundations = '/foundations',
  home = '/home',
  playground = '/playground',
  pricing = '/pricing',
  pricingCore = '/pricing/core',
  pricingPro = '/pricing/pro',
  pro = '/pro',
  profileAccount = '/profile/account',
  profileSettings = '/profile/settings',
}

export const PAGE_SECTIONS = [
  ...FOUNDATIONS_SECTIONS.map(o => ({ ...o, pageKey: PageKey.foundations.replace('/', '') })),
  ...CORE_PAGE_SECTIONS.map(o => ({ ...o, pageKey: PageKey.core.replace('/', '') })),
  ...PRO_PAGE_SECTIONS.map(o => ({ ...o, pageKey: PageKey.pro.replace('/', '') })),
]
