import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { Theme } from 'lib/definitions'
import { useLibStore } from 'lib/state'

export const ThemeSelect = () => {
  const { t, i18n } = useTranslation()

  const { theme, setTheme } = useLibStore()

  const THEMES = useMemo(() => {
    return [...new Set(Object.values(Theme))].map(value => ({ value, text: t(`common.themes.${value}`) }))
  }, [i18n.language])

  return 'Theme Select'
}
