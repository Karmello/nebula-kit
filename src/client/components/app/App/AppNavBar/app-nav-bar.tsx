import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { AppNavBar as NebAppNavBar } from 'lib/components'
import { useDocsPageStore, usePlaygroundPageStore } from 'client/store'
import { useNavigateTo } from 'client/services'

export const AppNavBar = () => {
  const { t } = useTranslation()
  const { pathname } = useLocation()

  const playgroundPageStore = usePlaygroundPageStore()
  const docsPageStore = useDocsPageStore()
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
            navigateTo(`/playground/${playgroundPageStore.categoryKey}/${playgroundPageStore.itemKey}`)
            break
          }
          case 'docs': {
            navigateTo(`/docs/${docsPageStore.categoryKey}/${docsPageStore.itemKey}`)
          }
        }
      }}
    />
  )
}
