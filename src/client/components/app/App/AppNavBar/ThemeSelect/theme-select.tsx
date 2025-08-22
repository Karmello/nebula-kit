import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { FieldLabels, Select } from 'lib/components'
import { Themes } from 'lib/enums'
import { useStore } from 'lib/state'

export const ThemeSelect = () => {
  const { t, i18n } = useTranslation()

  const { theme, setTheme } = useStore()

  const THEMES = useMemo(() => {
    return [...new Set(Object.values(Themes))].map(value => ({ value, text: t(`common.themes.${value}`) }))
  }, [i18n.language])

  return (
    <FieldLabels label={t('common.theme')}>
      <Select options={THEMES} value={theme} onChange={setTheme} />
    </FieldLabels>
  )
}
