import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router'

import { useCorePageStore } from 'client/store'
import { CatalogPageTemplate } from 'client/components'
import { CORE_PAGE_CATEGORIES, PageKey } from 'client/definitions'

export const CorePage = () => {
  const { pathname } = useLocation()

  const categoryKey = useCorePageStore(state => state.categoryKey)
  const itemKey = useCorePageStore(state => state.itemKey)
  const sectionKey = useCorePageStore(state => state.sectionKey)

  const setCategoryKey = useCorePageStore(state => state.setCategoryKey)
  const setItemKey = useCorePageStore(state => state.setItemKey)
  const setSectionKey = useCorePageStore(state => state.setSectionKey)

  useLayoutEffect(() => {
    const [, categoryKey, itemKey, sectionKey] = pathname.split('/').filter(s => s)
    setCategoryKey(categoryKey)
    setItemKey(itemKey)
    setSectionKey(sectionKey)
  }, [pathname])

  const activeCategoryObj = CORE_PAGE_CATEGORIES?.find(c => c.key === categoryKey)
  const activeItemObj = activeCategoryObj?.items.find(i => i.key === itemKey)
  const activeSectionObj = activeItemObj?.sections.find(s => s.key === sectionKey)

  return (
    <CatalogPageTemplate
      pathname={pathname}
      pageKey={PageKey.core}
      data={CORE_PAGE_CATEGORIES}
      activeCategoryObj={activeCategoryObj}
      activeItemObj={activeItemObj}
      activeSectionObj={activeSectionObj}
    />
  )
}
