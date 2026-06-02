import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router'

import { CatalogPageTemplate } from 'client/components'
import { FOUNDATIONS_CATEGORIES, PageKey } from 'client/definitions'
import { useFoundationsPageStore } from 'client/store'

export const FoundationsPage = () => {
  const { pathname } = useLocation()

  const categoryKey = useFoundationsPageStore(state => state.categoryKey)
  const itemKey = useFoundationsPageStore(state => state.itemKey)
  const sectionKey = useFoundationsPageStore(state => state.sectionKey)

  const setCategoryKey = useFoundationsPageStore(state => state.setCategoryKey)
  const setItemKey = useFoundationsPageStore(state => state.setItemKey)
  const setSectionKey = useFoundationsPageStore(state => state.setSectionKey)

  useLayoutEffect(() => {
    const [, categoryKey, itemKey, sectionKey] = pathname.split('/').filter(s => s)
    setCategoryKey(categoryKey)
    setItemKey(itemKey)
    setSectionKey(sectionKey)
  }, [pathname])

  const activeCategoryObj = FOUNDATIONS_CATEGORIES?.find(c => c.key === categoryKey)
  const activeItemObj = activeCategoryObj?.items.find(i => i.key === itemKey)
  const activeSectionObj = activeItemObj?.sections.find(s => s.key === sectionKey)

  return (
    <CatalogPageTemplate
      pathname={pathname}
      pageKey={PageKey.foundations}
      data={FOUNDATIONS_CATEGORIES}
      activeCategoryObj={activeCategoryObj}
      activeItemObj={activeItemObj}
      activeSectionObj={activeSectionObj}
    />
  )
}
