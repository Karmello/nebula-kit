import qs from 'qs'

import { Theme } from 'lib/definitions'
import { useLibStore } from 'lib/state'
import { useLocation, useNavigate } from 'react-router'

export type QueryParams = {
  theme: Theme
}

export const validateQueryParams = (search: string): QueryParams => {
  const queryParams = qs.parse(search.slice(1)) as QueryParams

  const { theme = 'light' } = (JSON.parse(localStorage.getItem('ui-bb'))?.state || {}) as QueryParams

  if (!Object.values(Theme).includes(queryParams.theme)) {
    queryParams.theme = theme
  }

  return queryParams
}

export const formatAsQueryString = ({ theme = 'light' }: QueryParams): string => {
  return `theme=${theme}`
}

export const useNavigateTo = () => {
  const { pathname } = useLocation()
  const push = useNavigate()
  const { theme } = useLibStore()

  return (path: string): boolean => {
    if (path !== pathname) {
      push(`${path}?${formatAsQueryString({ theme })}`)
    }

    return path !== pathname
  }
}
