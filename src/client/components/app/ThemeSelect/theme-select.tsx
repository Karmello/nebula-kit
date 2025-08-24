import { Select } from 'lib/components'
import { useLibStore } from 'lib/state'
import { Theme } from 'lib/definitions'

export const ThemeSelect = () => {
  const { theme, setTheme } = useLibStore()

  return (
    <Select
      value={theme}
      onChange={setTheme}
      options={[...new Set(Object.values(Theme))].map(theme => ({ value: theme, label: theme }))}
    />
  )
}
