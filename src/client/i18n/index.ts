import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import { Languages } from 'lib/enums'

import { COMMON_EN } from './common/en'
import { COMMON_PL } from './common/pl'
import { PLAYGROUND_EN } from './playground/en'
import { PLAYGROUND_PL } from './playground/pl'

const resources = {
  [Languages.ENGLISH]: {
    translation: {
      common: COMMON_EN,
      playground: PLAYGROUND_EN,
    },
  },
  [Languages.POLISH]: {
    translation: {
      common: COMMON_PL,
      playground: PLAYGROUND_PL,
    },
  },
}

i18next.use(initReactI18next).init({
  resources,
  lng: Languages.DEFAULT,
  interpolation: {
    escapeValue: false,
  },
})

export default i18next
