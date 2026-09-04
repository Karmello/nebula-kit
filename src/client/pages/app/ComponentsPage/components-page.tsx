import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router'

import { CatalogPageTemplate } from 'client/components/page/CatalogPageTemplate'
import { COMPONENT_CATEGORIES, PageKey } from 'client/definitions'
import { useComponentsPageStore } from 'client/store'

export const ComponentsPage = () => {
  const { pathname } = useLocation()

  const categoryKey = useComponentsPageStore(state => state.categoryKey)
  const itemKey = useComponentsPageStore(state => state.itemKey)
  const sectionKey = useComponentsPageStore(state => state.sectionKey)

  const setCategoryKey = useComponentsPageStore(state => state.setCategoryKey)
  const setItemKey = useComponentsPageStore(state => state.setItemKey)
  const setSectionKey = useComponentsPageStore(state => state.setSectionKey)

  useLayoutEffect(() => {
    const [, categoryKey, itemKey, sectionKey] = pathname.split('/').filter(s => s)
    setCategoryKey(categoryKey)
    setItemKey(itemKey)
    setSectionKey(sectionKey)
  }, [pathname])

  const activeCategoryObj = COMPONENT_CATEGORIES?.find(c => c.key === categoryKey)
  const activeItemObj = activeCategoryObj?.items.find(i => i.key === itemKey)
  const activeSectionObj = activeItemObj?.sections.find(s => s.key === sectionKey)

  return (
    <CatalogPageTemplate
      pathname={pathname}
      pageKey={PageKey.library}
      data={COMPONENT_CATEGORIES}
      activeCategoryObj={activeCategoryObj}
      activeItemObj={activeItemObj}
      activeSectionObj={activeSectionObj}
    />
  )
}
