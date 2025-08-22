import { ReactElement, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { useLibStore } from 'lib/state'
import { useDocsStore, usePlaygroundStore } from 'client/store'

export type AppNavBarProps = {
  children: ReactElement
}

export const AppNavBar = ({ children }: AppNavBarProps) => {
  const [settingsDialogOpen, setSettingsDialogOpen] = useState<boolean>(false)

  const { t } = useTranslation()
  const push = useNavigate()
  const { pathname } = useLocation()

  const { lang, theme } = useLibStore()
  const playgroundStore = usePlaygroundStore()
  const docsStore = useDocsStore()

  const pageKey = pathname.split('/').filter(s => s)[0]

  return 'AppNavBar'
}
