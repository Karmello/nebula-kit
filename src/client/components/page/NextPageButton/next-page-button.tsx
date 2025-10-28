import { LinkButton } from 'lib/components'
import { FOUNDATION_CATEGORIES, COMPONENT_CATEGORIES, PageKey } from 'client/definitions'
import { useNavigateTo } from 'client/services'

export type NextPageButtonProps = {
  pageKey: Extract<keyof typeof PageKey, 'foundations' | 'components'>
  currentSectionKey: string
}

const MAP = {
  [PageKey.foundations]: FOUNDATION_CATEGORIES,
  [PageKey.components]: COMPONENT_CATEGORIES,
}

export const NextPageButton = ({ pageKey, currentSectionKey }: NextPageButtonProps) => {
  const navigateTo = useNavigateTo()

  const CATEGORIES = MAP[pageKey]

  const SECTIONS: { categoryKey: string; itemKey: string; sectionKey: string }[] = []

  CATEGORIES.forEach(c =>
    c.items.forEach(i =>
      i.sections.forEach(s => {
        SECTIONS.push({ categoryKey: c.key, itemKey: i.key, sectionKey: s.key })
      })
    )
  )

  const currentSectionIndex = SECTIONS.findIndex(s => s.sectionKey === currentSectionKey)

  const nextSectionIndex = currentSectionIndex + 1

  if (!SECTIONS[nextSectionIndex]) {
    return null
  }

  const { categoryKey, itemKey, sectionKey } = SECTIONS[nextSectionIndex]
  const href = `/${pageKey}/${categoryKey}/${itemKey}/${sectionKey}`

  return (
    <LinkButton
      href={href}
      onClick={() => {
        navigateTo(href)
      }}
      iconName="arrow-right"
      intent="highlight"
      size="sm"
    >
      Continue
    </LinkButton>
  )
}
