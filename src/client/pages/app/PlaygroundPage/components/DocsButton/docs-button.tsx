import { useMemo } from 'react'
import { kebabCase } from 'change-case'

import { COMPONENT_CATEGORIES, PageKey } from 'client/definitions'
import { useNavigateTo } from 'client/hooks'
import { usePlaygroundStore } from 'client/store'
import { Button, Link } from 'lib/components'

export const DocsButton = () => {
  const navigateTo = useNavigateTo()
  const activeComponent = usePlaygroundStore(state => state.activeComponent)

  const url = useMemo(() => {
    const componentName = kebabCase(activeComponent)

    const { key: category } = COMPONENT_CATEGORIES.find(obj => obj.items.some(obj => obj.key === componentName))
    return `${PageKey.components}/${category}/${componentName}/overview`
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
