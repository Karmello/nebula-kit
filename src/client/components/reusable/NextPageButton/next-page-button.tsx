import { useLayoutEffect, useState } from 'react'

import { Box, Button, Link } from 'lib/components'
import { FOUNDATIONS_SECTIONS, LIBRARY_SECTIONS, PageKey } from 'client/definitions'
import { useNavigateTo } from 'client/hooks'
import { useFoundationsPageStore, useLibraryPageStore } from 'client/store'

export type NextPageButtonProps = {
  pageKey: PageKey.foundations | PageKey.library
}

type Section = { categoryKey: string; itemKey: string; sectionKey: string }

export const NextPageButton = ({ pageKey }: NextPageButtonProps) => {
  const [sections, setSections] = useState<Section[]>([])

  const navigateTo = useNavigateTo()

  const foundationsPageCategoryKey = useFoundationsPageStore(state => state.categoryKey)
  const foundationsPageItemKey = useFoundationsPageStore(state => state.itemKey)
  const foundationsPageSectionKey = useFoundationsPageStore(state => state.sectionKey)

  const libraryPageCategoryKey = useLibraryPageStore(state => state.categoryKey)
  const libraryPageItemKey = useLibraryPageStore(state => state.itemKey)
  const libraryPageSectionKey = useLibraryPageStore(state => state.sectionKey)

  const MAP = {
    [PageKey.foundations]: {
      sections: FOUNDATIONS_SECTIONS,
      keys: {
        categoryKey: foundationsPageCategoryKey,
        itemKey: foundationsPageItemKey,
        sectionKey: foundationsPageSectionKey,
      },
    },
    [PageKey.library]: {
      sections: LIBRARY_SECTIONS,
      keys: {
        categoryKey: libraryPageCategoryKey,
        itemKey: libraryPageItemKey,
        sectionKey: libraryPageSectionKey,
      },
    },
  }

  useLayoutEffect(() => {
    setSections(MAP[pageKey].sections)
  }, [pageKey])

  const keys = MAP[pageKey].keys
  const currentSectionIndex = sections.findIndex(
    s =>
      s.categoryKey === keys.categoryKey &&
      s.itemKey === keys.itemKey &&
      s.sectionKey === keys.sectionKey
  )

  const nextSectionIndex = currentSectionIndex + 1

  if (!sections[nextSectionIndex]) {
    return null
  }

  const { categoryKey, itemKey, sectionKey } = sections[nextSectionIndex]
  const href = `${pageKey}/${categoryKey}/${itemKey}/${sectionKey}`

  return (
    <Box display="flex" justifyContent={{ base: 'center', lg: 'flex-start' }}>
      <Link
        href={href}
        onClick={() => {
          navigateTo(href)
        }}
      >
        <Button
          iconName="arrow-right"
          iconPlacement="right"
          intent="secondary"
          color="blue"
          scale="sm"
        >
          Continue
        </Button>
      </Link>
    </Box>
  )
}
