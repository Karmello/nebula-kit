import qs from 'qs'

import { Language, Theme } from 'lib/definitions'
import { useLibStore } from 'lib/state'
import { useLocation, useNavigate } from 'react-router-dom'

export type QueryParams = {
  lang: Language
  theme: Theme
}

export const validateQueryParams = (search: string): QueryParams => {
  const queryParams = qs.parse(search.slice(1)) as QueryParams

  const { lang = Language.DEFAULT, theme = Theme.DEFAULT } = (JSON.parse(localStorage.getItem('ui-bb'))
    ?.state || {}) as QueryParams

  if (!Object.values(Language).includes(queryParams.lang)) {
    queryParams.lang = lang
  }

  if (!Object.values(Theme).includes(queryParams.theme)) {
    queryParams.theme = theme
  }

  return queryParams
}

export const formatAsQueryString = ({
  lang = Language.DEFAULT,
  theme = Theme.DEFAULT,
}: QueryParams): string => {
  return `lang=${lang}&theme=${theme}`
}

export const useNavigateTo = () => {
  const { pathname } = useLocation()
  const push = useNavigate()
  const { theme, lang } = useLibStore()

  return (path: string): boolean => {
    if (path !== pathname) {
      push(`${path}?${formatAsQueryString({ lang, theme })}`)
    }

    return path !== pathname
  }
}
