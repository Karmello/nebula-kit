import { useLocation } from 'react-router'

import { useNavigateTo } from 'client/hooks'
import { PageKey } from 'client/definitions'
import { useAppStore, useCorePageStore, useProPageStore, useFoundationsPageStore } from 'client/store'
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
  const corePageStore = useCorePageStore()
  const proPageStore = useProPageStore()

  const currentPageKey = `/${pathname.split('/')[1]}`

  return (
    <Segment flexDirection={{ base: 'column', lg: 'row' }}>
      <Segment.Item>
        <Link
          href={PageKey.playground}
          onClick={async () => {
            if (mainOpen) await setMainOpen(false)
            navigateTo(PageKey.playground)
          }}
        >
          <Button
            intent={currentPageKey === PageKey.playground ? 'secondary' : 'muted'}
            iconName="shapes"
            fullWidth
          >
            Playground
          </Button>
        </Link>
      </Segment.Item>
      <Segment.Item>
        <Link
          href={`${PageKey.foundations}/${foundationsPageStore.categoryKey}/${foundationsPageStore.itemKey}/${foundationsPageStore.sectionKey}`}
          onClick={async () => {
            if (mainOpen) await setMainOpen(false)
            navigateTo(
              `${PageKey.foundations}/${foundationsPageStore.categoryKey}/${foundationsPageStore.itemKey}/${foundationsPageStore.sectionKey}`
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
          href={`${PageKey.core}/${corePageStore.categoryKey}/${corePageStore.itemKey}/${corePageStore.sectionKey}`}
          onClick={async () => {
            if (mainOpen) await setMainOpen(false)
            navigateTo(
              `${PageKey.core}/${corePageStore.categoryKey}/${corePageStore.itemKey}/${corePageStore.sectionKey}`
            )
          }}
        >
          <Button
            intent={currentPageKey === PageKey.core ? 'secondary' : 'muted'}
            iconName="package"
            fullWidth
          >
            Core
          </Button>
        </Link>
      </Segment.Item>
      <Segment.Item>
        <Link
          href={`${PageKey.pro}/${proPageStore.categoryKey}/${proPageStore.itemKey}/${proPageStore.sectionKey}`}
          onClick={async () => {
            if (mainOpen) await setMainOpen(false)
            navigateTo(
              `${PageKey.pro}/${proPageStore.categoryKey}/${proPageStore.itemKey}/${proPageStore.sectionKey}`
            )
          }}
        >
          <Button intent={currentPageKey === PageKey.pro ? 'secondary' : 'muted'} iconName="star" fullWidth>
            Pro
          </Button>
        </Link>
      </Segment.Item>
      <Segment.Item>
        <Link
          href={PageKey.faq}
          onClick={async () => {
            if (mainOpen) await setMainOpen(false)
            navigateTo(PageKey.faq)
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
            href={PageKey.pricing}
            onClick={async () => {
              if (mainOpen) await setMainOpen(false)
              navigateTo(PageKey.pricing)
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
      <Segment.Item>
        <Link
          href={PageKey.feedback}
          onClick={async () => {
            if (mainOpen) await setMainOpen(false)
            navigateTo(PageKey.feedback)
          }}
        >
          <Button
            intent={currentPageKey === PageKey.feedback ? 'secondary' : 'muted'}
            iconName="mail"
            fullWidth
          >
            Feedback
          </Button>
        </Link>
      </Segment.Item>
    </Segment>
  )
}
