import { useLocation } from 'react-router'

import { ButtonGroup, LinkButton } from 'lib/components'
import { useNavigateTo } from 'client/services'
import { PageKey } from 'client/definitions'
import { useComponentsPageStore, useFoundationsPageStore } from 'client/store'

type Props = {
  setMainOpen: (mainOpen: boolean) => Promise<boolean>
  mainOpen: boolean
}

export const PageNavigation = ({ setMainOpen, mainOpen }: Props) => {
  const { pathname } = useLocation()

  const navigateTo = useNavigateTo()

  const foundationsPageStore = useFoundationsPageStore()
  const componentsPageStore = useComponentsPageStore()

  const currentPageKey = pathname.split('/')[1]

  return (
    <ButtonGroup direction={{ base: 'column', md: 'row' }} attached stretch={{ base: true, md: false }}>
      <LinkButton
        href={`/${PageKey.foundations}`}
        onClick={async () => {
          if (mainOpen) await setMainOpen(false)
          navigateTo(
            `/${PageKey.foundations}/${foundationsPageStore.categoryKey}/${foundationsPageStore.itemKey}/${foundationsPageStore.sectionKey}`
          )
        }}
        intent={currentPageKey === PageKey.foundations ? 'tertiary' : 'muted'}
      >
        Foundations
      </LinkButton>
      <LinkButton
        href={`/${PageKey.components}`}
        onClick={async () => {
          if (mainOpen) await setMainOpen(false)
          navigateTo(
            `/${PageKey.components}/${componentsPageStore.categoryKey}/${componentsPageStore.itemKey}/${componentsPageStore.sectionKey}`
          )
        }}
        intent={currentPageKey === PageKey.components ? 'tertiary' : 'muted'}
      >
        Components
      </LinkButton>
    </ButtonGroup>
  )
}
