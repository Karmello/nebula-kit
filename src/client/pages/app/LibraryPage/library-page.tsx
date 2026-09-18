import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router'

import { CatalogPageTemplate } from 'client/components/reusable/CatalogPageTemplate'
import { LIBRARY_CATEGORIES, PageKey } from 'client/definitions'
import { useLibraryPageStore } from 'client/store'

export const LibraryPage = () => {
  const { pathname } = useLocation()

  const categoryKey = useLibraryPageStore(state => state.categoryKey)
  const itemKey = useLibraryPageStore(state => state.itemKey)
  const sectionKey = useLibraryPageStore(state => state.sectionKey)

  const setCategoryKey = useLibraryPageStore(state => state.setCategoryKey)
  const setItemKey = useLibraryPageStore(state => state.setItemKey)
  const setSectionKey = useLibraryPageStore(state => state.setSectionKey)

  useLayoutEffect(() => {
    const [, categoryKey, itemKey, sectionKey] = pathname.split('/').filter(s => s)
    setCategoryKey(categoryKey)
    setItemKey(itemKey)
    setSectionKey(sectionKey)
  }, [pathname])

  const activeCategoryObj = LIBRARY_CATEGORIES?.find(c => c.key === categoryKey)
  const activeItemObj = activeCategoryObj?.items.find(i => i.key === itemKey)
  const activeSectionObj = activeItemObj?.sections.find(s => s.key === sectionKey)

  return (
    <CatalogPageTemplate
      pathname={pathname}
      pageKey={PageKey.library}
      data={LIBRARY_CATEGORIES}
      activeCategoryObj={activeCategoryObj}
      activeItemObj={activeItemObj}
      activeSectionObj={activeSectionObj}
    />
  )
}
