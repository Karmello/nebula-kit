import { useLayoutEffect, useState } from 'react'

import { Flex, ButtonLink } from 'lib/components'
import { FOUNDATION_CATEGORIES, COMPONENT_CATEGORIES, PageKey } from 'client/definitions'
import { useComponentsPageStore, useFoundationsPageStore } from 'client/store'
import { useNavigateTo } from 'client/services'

export type NextPageButtonProps = {
  pageKey: Extract<keyof typeof PageKey, 'foundations' | 'components'>
}

type Section = { categoryKey: string; itemKey: string; sectionKey: string }

const MAP = {
  [PageKey.foundations]: FOUNDATION_CATEGORIES,
  [PageKey.components]: COMPONENT_CATEGORIES,
}

export const NextPageButton = ({ pageKey }: NextPageButtonProps) => {
  const [sections, setSections] = useState<Section[]>([])

  const navigateTo = useNavigateTo()

  const foundationsPageStore = useFoundationsPageStore()
  const componentsPageStore = useComponentsPageStore()

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

  const pageStore = pageKey === 'foundations' ? foundationsPageStore : componentsPageStore
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
      <ButtonLink
        href={href}
        onClick={() => {
          navigateTo(href)
        }}
        iconName="arrow-right"
        iconPosition="right"
        intent="highlight"
        size="sm"
      >
        Continue
      </ButtonLink>
    </Flex>
  )
}
