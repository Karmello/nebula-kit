import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Button } from 'lib/components'
import { useDocsStore, usePlaygroundStore } from 'client/store'
import { useNavigateTo } from 'client/services'

export const AppNavBar = () => {
  const { t } = useTranslation()
  const { pathname } = useLocation()

  const playgroundStore = usePlaygroundStore()
  const docsStore = useDocsStore()
  const navigateTo = useNavigateTo()

  const [pageKey] = pathname.split('/').filter(s => s)

  return (
    <nav>
      <Button intent={pageKey === 'home' ? 'primary' : 'neutral'} onClick={() => navigateTo('/home')}>
        {t('common.home')}
      </Button>
      <Button
        intent={pageKey === 'playground' ? 'primary' : 'neutral'}
        onClick={() => navigateTo(`/playground/${playgroundStore.categoryKey}/${playgroundStore.itemKey}`)}
      >
        {t('common.playground')}
      </Button>
      <Button
        intent={pageKey === 'docs' ? 'primary' : 'neutral'}
        onClick={() => navigateTo(`/docs/${docsStore.categoryKey}/${docsStore.itemKey}`)}
      >
        {t('common.docs')}
      </Button>
    </nav>
  )
}
