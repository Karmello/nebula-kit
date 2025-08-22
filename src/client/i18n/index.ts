import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import { Language } from 'lib/definitions'

import { COMMON_EN } from './common/en'
import { PLAYGROUND_EN } from './playground/en'

const resources = {
  [Language.EN]: {
    translation: {
      common: COMMON_EN,
      playground: PLAYGROUND_EN,
    },
  },
}

i18next.use(initReactI18next).init({
  resources,
  lng: Language.DEFAULT,
  interpolation: {
    escapeValue: false,
  },
})

export default i18next
