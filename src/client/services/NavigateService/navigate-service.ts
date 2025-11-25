import { NavigateOptions, useLocation, useNavigate } from 'react-router'

export const useNavigateTo = () => {
  const { pathname } = useLocation()
  const push = useNavigate()

  return (path: string, options?: NavigateOptions): boolean => {
    if (path !== pathname) {
      push(path, options)
    }

    return path !== pathname
  }
}
