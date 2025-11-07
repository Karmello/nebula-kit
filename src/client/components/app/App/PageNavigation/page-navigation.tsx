import { useLocation } from 'react-router'

import { ButtonGroup, Button, Link } from 'lib/components'
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
      <Link
        href={`/${PageKey.foundations}`}
        onClick={async () => {
          if (mainOpen) await setMainOpen(false)
          navigateTo(
            `/${PageKey.foundations}/${foundationsPageStore.categoryKey}/${foundationsPageStore.itemKey}/${foundationsPageStore.sectionKey}`
          )
        }}
      >
        <Button
          intent={currentPageKey === PageKey.foundations ? 'tertiary' : 'muted'}
          iconName="book-open-text"
        >
          Foundations
        </Button>
      </Link>
      <Link
        href={`/${PageKey.components}`}
        onClick={async () => {
          if (mainOpen) await setMainOpen(false)
          navigateTo(
            `/${PageKey.components}/${componentsPageStore.categoryKey}/${componentsPageStore.itemKey}/${componentsPageStore.sectionKey}`
          )
        }}
      >
        <Button intent={currentPageKey === PageKey.components ? 'tertiary' : 'muted'} iconName="component">
          Components
        </Button>
      </Link>
      <Link
        href={`/${PageKey.pricing}`}
        onClick={async () => {
          if (mainOpen) await setMainOpen(false)
          navigateTo(`/${PageKey.pricing}`)
        }}
      >
        <Button intent={currentPageKey === PageKey.pricing ? 'tertiary' : 'muted'} iconName="credit-card">
          Pricing
        </Button>
      </Link>
    </ButtonGroup>
  )
}
