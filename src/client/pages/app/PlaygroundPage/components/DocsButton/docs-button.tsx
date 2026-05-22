import { useMemo } from 'react'
import { kebabCase } from 'change-case'

import { CORE_PAGE_CATEGORIES, PRO_PAGE_CATEGORIES } from 'client/definitions'
import { useNavigateTo } from 'client/hooks'
import { usePlaygroundStore } from 'client/store'
import { Button, Link } from 'lib/components'

export const DocsButton = () => {
  const navigateTo = useNavigateTo()

  const components = usePlaygroundStore(state => state.components)
  const activeComponent = usePlaygroundStore(state => state.activeComponent)

  const { bundle } = components[activeComponent]

  const url = useMemo(() => {
    const componentName = kebabCase(activeComponent)

    const { key: category } = (bundle === 'core' ? CORE_PAGE_CATEGORIES : PRO_PAGE_CATEGORIES).find(obj =>
      obj.items.some(obj => obj.key === componentName)
    )
    return `/${bundle}/${category}/${componentName}/overview`
  }, [activeComponent])

  return (
    <Link
      href={url}
      onClick={() => {
        navigateTo(url)
      }}
    >
      <Button size="xs" iconName="arrow-right" iconPlacement="right" variant="outline" intent="tertiary" color="blue">
        Docs
      </Button>
    </Link>
  )
}
