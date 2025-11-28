import { useLayoutEffect, useState } from 'react'

import { Flex, Button, Link } from 'lib/components'
import { FOUNDATION_CATEGORIES, CORE_PAGE_CATEGORIES, PageKey } from 'client/definitions'
import { useCorePageStore, useFoundationsPageStore } from 'client/store'
import { useNavigateTo } from 'client/hooks'

export type NextPageButtonProps = {
  pageKey: Extract<keyof typeof PageKey, 'foundations' | 'core' | 'pro'>
}

type Section = { categoryKey: string; itemKey: string; sectionKey: string }

const MAP = {
  [PageKey.foundations]: FOUNDATION_CATEGORIES,
  [PageKey.core]: CORE_PAGE_CATEGORIES,
}

export const NextPageButton = ({ pageKey }: NextPageButtonProps) => {
  const [sections, setSections] = useState<Section[]>([])

  const navigateTo = useNavigateTo()

  const foundationsPageStore = useFoundationsPageStore()
  const corePageStore = useCorePageStore()

  useLayoutEffect(() => {
    const categories = MAP[pageKey]

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

  const pageStore = pageKey === 'foundations' ? foundationsPageStore : corePageStore
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
  const href = `/${pageKey}/${categoryKey}/${itemKey}/${sectionKey}`

  return (
    <Flex justifyContent={{ base: 'center', lg: 'flex-start' }}>
      <Link
        href={href}
        onClick={() => {
          navigateTo(href)
        }}
      >
        <Button iconName="arrow-right" iconPosition="right" color="amber" size="sm">
          Continue
        </Button>
      </Link>
    </Flex>
  )
}
