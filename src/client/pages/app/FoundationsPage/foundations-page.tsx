import { useEffect } from 'react'
import { useLocation } from 'react-router'

import { useFoundationsPageStore } from 'client/store'
import { CatalogPageTemplate } from 'client/components'
import { FOUNDATION_CATEGORIES, PageKey } from 'client/definitions'

export const FoundationsPage = () => {
  const { pathname } = useLocation()

  const foundationsPageStore = useFoundationsPageStore()

  useEffect(() => {
    const [, categoryKey, itemKey, sectionKey] = pathname.split('/').filter(s => s)
    foundationsPageStore.setCategoryKey(categoryKey)
    foundationsPageStore.setItemKey(itemKey)
    foundationsPageStore.setSectionKey(sectionKey)
  }, [pathname])

  const activeCategoryObj = FOUNDATION_CATEGORIES?.find(c => c.key === foundationsPageStore.categoryKey)
  const activeItemObj = activeCategoryObj?.items.find(i => i.key === foundationsPageStore.itemKey)
  const activeSectionObj = activeItemObj?.sections.find(s => s.key === foundationsPageStore.sectionKey)

  return (
    <CatalogPageTemplate
      pageKey={PageKey.foundations}
      data={FOUNDATION_CATEGORIES}
      activeCategoryObj={activeCategoryObj}
      activeItemObj={activeItemObj}
      activeSectionObj={activeSectionObj}
    />
  )
}
