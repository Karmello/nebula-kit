import { useLayoutEffect, useState } from 'react'

import { PageKey, FOUNDATIONS_SECTIONS, CORE_PAGE_SECTIONS, PRO_PAGE_SECTIONS } from 'client/definitions'
import { useCorePageStore, useFoundationsPageStore, useProPageStore } from 'client/store'
import { useNavigateTo } from 'client/hooks'
import { Flex, Button, Link } from 'lib/components'

export type NextPageButtonProps = {
  pageKey: PageKey.foundations | PageKey.core | PageKey.pro
}

type Section = { categoryKey: string; itemKey: string; sectionKey: string }

export const NextPageButton = ({ pageKey }: NextPageButtonProps) => {
  const [sections, setSections] = useState<Section[]>([])

  const navigateTo = useNavigateTo()

  const foundationsPageCategoryKey = useFoundationsPageStore(state => state.categoryKey)
  const foundationsPageItemKey = useFoundationsPageStore(state => state.itemKey)
  const foundationsPageSectionKey = useFoundationsPageStore(state => state.sectionKey)
  const corePageCategoryKey = useCorePageStore(state => state.categoryKey)
  const corePageItemKey = useCorePageStore(state => state.itemKey)
  const corePageSectionKey = useCorePageStore(state => state.sectionKey)
  const proPageCategoryKey = useProPageStore(state => state.categoryKey)
  const proPageItemKey = useProPageStore(state => state.itemKey)
  const proPageSectionKey = useProPageStore(state => state.sectionKey)

  const MAP = {
    [PageKey.foundations]: {
      sections: FOUNDATIONS_SECTIONS,
      keys: {
        categoryKey: foundationsPageCategoryKey,
        itemKey: foundationsPageItemKey,
        sectionKey: foundationsPageSectionKey,
      },
    },
    [PageKey.core]: {
      sections: CORE_PAGE_SECTIONS,
      keys: {
        categoryKey: corePageCategoryKey,
        itemKey: corePageItemKey,
        sectionKey: corePageSectionKey,
      },
    },
    [PageKey.pro]: {
      sections: PRO_PAGE_SECTIONS,
      keys: {
        categoryKey: proPageCategoryKey,
        itemKey: proPageItemKey,
        sectionKey: proPageSectionKey,
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
        <Button iconName="arrow-right" iconPlacement="right" intent="primary" color="yellow" size="sm">
          Continue
        </Button>
      </Link>
    </Flex>
  )
}
