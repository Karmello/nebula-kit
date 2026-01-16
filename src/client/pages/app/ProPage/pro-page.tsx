import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router'

import { useProPageStore } from 'client/store'
import { CatalogPageTemplate } from 'client/components'
import { PRO_PAGE_CATEGORIES, PageKey } from 'client/definitions'

export const ProPage = () => {
  const { pathname } = useLocation()

  const categoryKey = useProPageStore(state => state.categoryKey)
  const itemKey = useProPageStore(state => state.itemKey)
  const sectionKey = useProPageStore(state => state.sectionKey)

  const setCategoryKey = useProPageStore(state => state.setCategoryKey)
  const setItemKey = useProPageStore(state => state.setItemKey)
  const setSectionKey = useProPageStore(state => state.setSectionKey)

  useLayoutEffect(() => {
    const [, categoryKey, itemKey, sectionKey] = pathname.split('/').filter(s => s)
    setCategoryKey(categoryKey)
    setItemKey(itemKey)
    setSectionKey(sectionKey)
  }, [pathname])

  const activeCategoryObj = PRO_PAGE_CATEGORIES?.find(c => c.key === categoryKey)
  const activeItemObj = activeCategoryObj?.items.find(i => i.key === itemKey)
  const activeSectionObj = activeItemObj?.sections.find(s => s.key === sectionKey)

  return (
    <CatalogPageTemplate
      pathname={pathname}
      pageKey={PageKey.pro}
      data={PRO_PAGE_CATEGORIES}
      activeCategoryObj={activeCategoryObj}
      activeItemObj={activeItemObj}
      activeSectionObj={activeSectionObj}
    />
  )
}
