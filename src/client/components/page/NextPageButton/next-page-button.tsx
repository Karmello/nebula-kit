import { useLayoutEffect, useState } from 'react'

import { PageKey, FOUNDATIONS_SECTIONS, COMPONENTS_PAGE_SECTIONS } from 'client/definitions'
import { useComponentsPageStore, useFoundationsPageStore } from 'client/store'
import { useNavigateTo } from 'client/hooks'
import { Flex, Button, Link } from 'lib/components'

export type NextPageButtonProps = {
  pageKey: PageKey.foundations | PageKey.components
}

type Section = { categoryKey: string; itemKey: string; sectionKey: string }

export const NextPageButton = ({ pageKey }: NextPageButtonProps) => {
  const [sections, setSections] = useState<Section[]>([])

  const navigateTo = useNavigateTo()

  const foundationsPageCategoryKey = useFoundationsPageStore(state => state.categoryKey)
  const foundationsPageItemKey = useFoundationsPageStore(state => state.itemKey)
  const foundationsPageSectionKey = useFoundationsPageStore(state => state.sectionKey)

  const componentsPageCategoryKey = useComponentsPageStore(state => state.categoryKey)
  const componentsPageItemKey = useComponentsPageStore(state => state.itemKey)
  const componentsPageSectionKey = useComponentsPageStore(state => state.sectionKey)

  const MAP = {
    [PageKey.foundations]: {
      sections: FOUNDATIONS_SECTIONS,
      keys: {
        categoryKey: foundationsPageCategoryKey,
        itemKey: foundationsPageItemKey,
        sectionKey: foundationsPageSectionKey,
      },
    },
    [PageKey.components]: {
      sections: COMPONENTS_PAGE_SECTIONS,
      keys: {
        categoryKey: componentsPageCategoryKey,
        itemKey: componentsPageItemKey,
        sectionKey: componentsPageSectionKey,
      },
    },
  }

  useLayoutEffect(() => {
    setSections(MAP[pageKey].sections)
  }, [pageKey])

  const keys = MAP[pageKey].keys
  const currentSectionIndex = sections.findIndex(
    s => s.categoryKey === keys.categoryKey && s.itemKey === keys.itemKey && s.sectionKey === keys.sectionKey
  )

  const nextSectionIndex = currentSectionIndex + 1

  if (!sections[nextSectionIndex]) {
    return null
  }

  const { categoryKey, itemKey, sectionKey } = sections[nextSectionIndex]
  const href = `${pageKey}/${categoryKey}/${itemKey}/${sectionKey}`

  return (
    <Flex justifyContent={{ base: 'center', lg: 'flex-start' }}>
      <Link
        href={href}
        onClick={() => {
          navigateTo(href)
        }}
      >
        <Button iconName="arrow-right" iconPlacement="right" intent="primary" size="sm">
          Continue
        </Button>
      </Link>
    </Flex>
  )
}
