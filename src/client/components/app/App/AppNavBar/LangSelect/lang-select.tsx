import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { useLibStore } from 'lib/state'
import { Language } from 'lib/definitions'

export const LangSelect = () => {
  const { t, i18n } = useTranslation()

  const { lang, setLang } = useLibStore()

  const LANGS = useMemo(() => {
    return [...new Set(Object.values(Language))].map(value => ({
      value,
      text: t(`common.languages.${value}`),
    }))
  }, [i18n.language])

  return 'LangSelect'
}
