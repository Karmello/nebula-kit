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

  const foundationsPageStore = useFoundationsPageStore()
  const corePageStore = useCorePageStore()
  const proPageStore = useProPageStore()

  const MAP = {
    [PageKey.foundations]: {
      CATEGORIES: FOUNDATIONS_CATEGORIES,
      store: foundationsPageStore,
    },
    [PageKey.core]: {
      CATEGORIES: CORE_PAGE_CATEGORIES,
      store: corePageStore,
    },
    [PageKey.pro]: {
      CATEGORIES: PRO_PAGE_CATEGORIES,
      store: proPageStore,
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

  const pageStore = MAP[pageKey].store
  const currentSectionIndex = sections.findIndex(
    s =>
      s.categoryKey === pageStore.categoryKey &&
      s.itemKey === pageStore.itemKey &&
      s.sectionKey === pageStore.sectionKey
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
        <Button iconName="arrow-right" iconPosition="right" intent="primary" color="yellow" size="sm">
          Continue
        </Button>
      </Link>
    </Flex>
  )
}
