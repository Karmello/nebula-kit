import { useMemo } from 'react'

import { CORE_PAGE_CATEGORIES, PRO_PAGE_CATEGORIES } from 'client/definitions'
import { Button } from 'lib/components'

import { usePlaygroundStore } from '../../store'

export const DocsButton = () => {
  const components = usePlaygroundStore(state => state.components)
  const activeComponent = usePlaygroundStore(state => state.activeComponent)

  const { bundle } = components[activeComponent]

  const url = useMemo(() => {
    const componentName = activeComponent.toLowerCase()

    const { key: category } = (bundle === 'core' ? CORE_PAGE_CATEGORIES : PRO_PAGE_CATEGORIES).find(obj =>
      obj.items.some(obj => obj.key === componentName)
    )
    return `${bundle}/${category}/${componentName}/props`
  }, [activeComponent])

  return (
    <Button
      tagAttrs={{
        onClick: () => window.open(url),
      }}
      size="xs"
      iconName="external-link"
      iconPlacement="right"
      variant="outline"
      intent="secondary"
      color="blue"
    >
      {activeComponent} props
    </Button>
  )
}
