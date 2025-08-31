import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { AppNavBar as NebAppNavBar } from 'lib/components'
import { useFoundationsPageStore, useComponentsPageStore } from 'client/store'
import { useNavigateTo } from 'client/services'
import { PageKey } from 'client/definitions'

export const AppNavBar = () => {
  const { t } = useTranslation()
  const { pathname } = useLocation()

  const foundationsPageStore = useFoundationsPageStore()
  const componentsPageStore = useComponentsPageStore()
  const navigateTo = useNavigateTo()

  const [pageKey] = pathname.split('/').filter(s => s)

  return (
    <NebAppNavBar
      buttons={[
        { value: PageKey.home, label: t('common.home') },
        { value: PageKey.foundations, label: t('common.foundations') },
        { value: PageKey.components, label: t('common.components') },
      ]}
      selectedValue={pageKey}
      onSelect={value => {
        switch (value) {
          case PageKey.home: {
            navigateTo(`/${PageKey.home}`)
            break
          }
          case PageKey.foundations: {
            navigateTo(
              `/${PageKey.foundations}/${foundationsPageStore.categoryKey}/${foundationsPageStore.itemKey}`
            )
            break
          }
          case PageKey.components: {
            navigateTo(
              `/${PageKey.components}/${componentsPageStore.categoryKey}/${componentsPageStore.itemKey}/${componentsPageStore.sectionKey}`
            )
          }
        }
      }}
    />
  )
}
