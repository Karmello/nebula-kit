import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { useStore } from 'lib/state'
import { FieldLabels, Select } from 'lib/components'
import { Languages } from 'lib/enums'

export const LangSelect = () => {
  const { t, i18n } = useTranslation()

  const { lang, setLang } = useStore()

  const LANGS = useMemo(() => {
    return [...new Set(Object.values(Languages))].map(value => ({
      value,
      text: t(`common.languages.${value}`),
    }))
  }, [i18n.language])

  return (
    <FieldLabels label={t('common.language')}>
      <Select options={LANGS} value={lang} onChange={setLang} />
    </FieldLabels>
  )
}
