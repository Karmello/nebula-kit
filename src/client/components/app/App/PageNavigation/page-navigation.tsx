import { useLocation } from 'react-router'

import { Button, ButtonGroup, useToolbarContext } from 'lib/components'
import { useNavigateTo } from 'client/services'
import { PageKey } from 'client/definitions'
import { useComponentsPageStore, useFoundationsPageStore } from 'client/store'

export const PageNavigation = () => {
  const { pathname } = useLocation()

  const navigateTo = useNavigateTo()
  const { setMainOpen } = useToolbarContext()

  const foundationsPageStore = useFoundationsPageStore()
  const componentsPageStore = useComponentsPageStore()

  const currentPageKey = pathname.split('/')[1]

  return (
    <ButtonGroup direction={{ base: 'column', md: 'row' }} attached stretch={{ base: true, md: false }}>
      <Button
        tag="a"
        tagAttrs={{
          href: `/${PageKey.home}`,
          onClick: e => {
            e.preventDefault()
            navigateTo(`/${PageKey.home}`)
            setMainOpen(false)
          },
        }}
        intent={currentPageKey === PageKey.home ? 'secondary' : 'tertiary'}
      >
        Home
      </Button>
      <Button
        tag="a"
        tagAttrs={{
          href: `/${PageKey.foundations}`,
          onClick: e => {
            e.preventDefault()
            navigateTo(
              `/${PageKey.foundations}/${foundationsPageStore.categoryKey}/${foundationsPageStore.itemKey}/${foundationsPageStore.sectionKey}`
            )
            setMainOpen(false)
          },
        }}
        intent={currentPageKey === PageKey.foundations ? 'secondary' : 'tertiary'}
      >
        Foundations
      </Button>
      <Button
        tag="a"
        tagAttrs={{
          href: `/${PageKey.components}`,
          onClick: e => {
            e.preventDefault()
            navigateTo(
              `/${PageKey.components}/${componentsPageStore.categoryKey}/${componentsPageStore.itemKey}/${componentsPageStore.sectionKey}`
            )
            setMainOpen(false)
          },
        }}
        intent={currentPageKey === PageKey.components ? 'secondary' : 'tertiary'}
      >
        Components
      </Button>
    </ButtonGroup>
  )
}
