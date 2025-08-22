import qs from 'qs'

import { Languages, Themes } from 'lib/enums'

export type QueryParams = {
  lang: Languages
  theme: Themes
}

export const validateQueryParams = (search: string): QueryParams => {
  const queryParams = qs.parse(search.slice(1)) as QueryParams

  const { lang = Languages.DEFAULT, theme = Themes.DEFAULT } = (JSON.parse(localStorage.getItem('ui-bb'))
    ?.state || {}) as QueryParams

  if (!Object.values(Languages).includes(queryParams.lang)) {
    queryParams.lang = lang
  }

  if (!Object.values(Themes).includes(queryParams.theme)) {
    queryParams.theme = theme
  }

  return queryParams
}

export const formatAsQueryString = ({
  lang = Languages.DEFAULT,
  theme = Themes.DEFAULT,
}: QueryParams): string => {
  return `lang=${lang}&theme=${theme}`
}
