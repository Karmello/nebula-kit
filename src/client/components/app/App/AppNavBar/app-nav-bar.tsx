import { useTranslation } from 'react-i18next'

import { Button } from 'lib/components'
import { useDocsStore, usePlaygroundStore } from 'client/store'
import { useNavigateTo } from 'client/services'

export const AppNavBar = () => {
  const { t } = useTranslation()

  const playgroundStore = usePlaygroundStore()
  const docsStore = useDocsStore()
  const navigateTo = useNavigateTo()

  return (
    <nav>
      <Button onClick={() => navigateTo('/home')}>{t('common.home')}</Button>
      <Button
        onClick={() => navigateTo(`/playground/${playgroundStore.categoryKey}/${playgroundStore.itemKey}`)}
      >
        {t('common.playground')}
      </Button>
      <Button onClick={() => navigateTo(`/docs/${docsStore.categoryKey}/${docsStore.itemKey}`)}>
        {t('common.docs')}
      </Button>
    </nav>
  )
}
