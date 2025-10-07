import { useLocation, useNavigate } from 'react-router'

export const useNavigateTo = () => {
  const { pathname } = useLocation()
  const push = useNavigate()

  return (path: string): boolean => {
    if (path !== pathname) {
      push(path)
    }

    return path !== pathname
  }
}
