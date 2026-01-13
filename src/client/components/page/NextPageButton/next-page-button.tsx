import { useLayoutEffect, useState } from 'react'

import {
  FOUNDATIONS_CATEGORIES,
  CORE_PAGE_CATEGORIES,
  PageKey,
  PRO_PAGE_CATEGORIES,
} from 'client/definitions'

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
      CATEGORIES: FOUNDATIONS_CATEGORIES,
      keys: {
        categoryKey: foundationsPageCategoryKey,
        itemKey: foundationsPageItemKey,
        sectionKey: foundationsPageSectionKey,
      },
    },
    [PageKey.core]: {
      CATEGORIES: CORE_PAGE_CATEGORIES,
      keys: {
        categoryKey: corePageCategoryKey,
        itemKey: corePageItemKey,
        sectionKey: corePageSectionKey,
      },
    },
    [PageKey.pro]: {
      CATEGORIES: PRO_PAGE_CATEGORIES,
      keys: {
        categoryKey: proPageCategoryKey,
        itemKey: proPageItemKey,
        sectionKey: proPageSectionKey,
      },
    },
  }

  useLayoutEffect(() => {
    const categories = MAP[pageKey].CATEGORIES

    const sections: Section[] = []

    categories.forEach(c =>
      c.items.forEach(i =>
        i.sections.forEach(s => {
          sections.push({ categoryKey: c.key, itemKey: i.key, sectionKey: s.key })
        })
      )
    )

    setSections(sections)
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
