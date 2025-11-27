import { useLocation } from 'react-router'

import { useNavigateTo } from 'client/hooks'
import { PageKey } from 'client/definitions'
import { useAppStore, useComponentsPageStore, useFoundationsPageStore } from 'client/store'
import { Button, Link, Segment } from 'lib/components'

type Props = {
  setMainOpen: (mainOpen: boolean) => Promise<boolean>
  mainOpen: boolean
}

export const PageNavigation = ({ setMainOpen, mainOpen }: Props) => {
  const { pathname } = useLocation()
  const navigateTo = useNavigateTo()
  const { user } = useAppStore()

  const foundationsPageStore = useFoundationsPageStore()
  const componentsPageStore = useComponentsPageStore()

  const currentPageKey = pathname.split('/')[1]

  return (
    <Segment flexDirection={{ base: 'column', md: 'row' }}>
      <Segment.Item>
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
            intent={currentPageKey === PageKey.foundations ? 'secondary' : 'muted'}
            iconName="book-open-text"
            fullWidth
          >
            Foundations
          </Button>
        </Link>
      </Segment.Item>
      <Segment.Item>
        <Link
          href={`/${PageKey.components}`}
          onClick={async () => {
            if (mainOpen) await setMainOpen(false)
            navigateTo(
              `/${PageKey.components}/${componentsPageStore.categoryKey}/${componentsPageStore.itemKey}/${componentsPageStore.sectionKey}`
            )
          }}
        >
          <Button
            intent={currentPageKey === PageKey.components ? 'secondary' : 'muted'}
            iconName="component"
            fullWidth
          >
            Components
          </Button>
        </Link>
      </Segment.Item>
      <Segment.Item>
        <Link
          href={`/${PageKey.faq}`}
          onClick={async () => {
            if (mainOpen) await setMainOpen(false)
            navigateTo(`/${PageKey.faq}`)
          }}
        >
          <Button
            intent={currentPageKey === PageKey.faq ? 'secondary' : 'muted'}
            iconName="message-circle-question-mark"
            fullWidth
          >
            FAQ
          </Button>
        </Link>
      </Segment.Item>
      {!user?.plan || user.plan === 'free' ? (
        <Segment.Item>
          <Link
            href={`/${PageKey.pricing}`}
            onClick={async () => {
              if (mainOpen) await setMainOpen(false)
              navigateTo(`/${PageKey.pricing}`)
            }}
          >
            <Button
              intent={currentPageKey === PageKey.pricing ? 'secondary' : 'muted'}
              iconName="credit-card"
              fullWidth
            >
              Pricing
            </Button>
          </Link>
        </Segment.Item>
      ) : null}
    </Segment>
  )
}
