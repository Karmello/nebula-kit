import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { AppNavBar as NebAppNavBar } from 'lib/components'
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
    <NebAppNavBar
      buttons={[
        { value: 'home', label: t('common.home') },
        { value: 'playground', label: t('common.playground') },
        { value: 'docs', label: t('common.docs') },
      ]}
      selectedValue={pageKey}
      onSelect={value => {
        switch (value) {
          case 'home': {
            navigateTo('/home')
            break
          }
          case 'playground': {
            navigateTo(`/playground/${playgroundStore.categoryKey}/${playgroundStore.itemKey}`)
            break
          }
          case 'docs': {
            navigateTo(`/docs/${docsStore.categoryKey}/${docsStore.itemKey}`)
          }
        }
      }}
    />
  )
}
