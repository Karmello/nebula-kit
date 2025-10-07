import { useLocation } from 'react-router'

import { Button, ButtonGroup } from 'lib/components'
import { useNavigateTo } from 'client/services'
import { PageKey } from 'client/definitions'
import { useComponentsPageStore, useFoundationsPageStore } from 'client/store'

type Props = {
  setMainOpen: (mainOpen: boolean) => Promise<boolean>
}

export const PageNavigation = ({ setMainOpen }: Props) => {
  const { pathname } = useLocation()

  const navigateTo = useNavigateTo()

  const foundationsPageStore = useFoundationsPageStore()
  const componentsPageStore = useComponentsPageStore()

  const currentPageKey = pathname.split('/')[1]

  return (
    <ButtonGroup direction={{ base: 'column', md: 'row' }} attached stretch={{ base: true, md: false }}>
      <Button
        tag="a"
        tagAttrs={{
          href: `/${PageKey.home}`,
          onClick: async e => {
            e.preventDefault()
            await setMainOpen(false)
            navigateTo(`/${PageKey.home}`)
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
          onClick: async e => {
            e.preventDefault()
            await setMainOpen(false)
            navigateTo(
              `/${PageKey.foundations}/${foundationsPageStore.categoryKey}/${foundationsPageStore.itemKey}/${foundationsPageStore.sectionKey}`
            )
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
          onClick: async e => {
            e.preventDefault()
            await setMainOpen(false)
            navigateTo(
              `/${PageKey.components}/${componentsPageStore.categoryKey}/${componentsPageStore.itemKey}/${componentsPageStore.sectionKey}`
            )
          },
        }}
        intent={currentPageKey === PageKey.components ? 'secondary' : 'tertiary'}
      >
        Components
      </Button>
    </ButtonGroup>
  )
}
