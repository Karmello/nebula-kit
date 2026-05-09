import { useLocation } from 'react-router'

import { useNavigateTo } from 'client/hooks'
import { PageKey } from 'client/definitions'
import { useAppStore, useCorePageStore, useProPageStore, useFoundationsPageStore } from 'client/store'
import { Button, Flex, Link } from 'lib/components'

type Props = {
  toolbarSlot: 'start' | 'main'
  mainOpen: boolean
  setMainOpen: (mainOpen: boolean) => Promise<boolean>
}

export const PageNavigation = ({ toolbarSlot, mainOpen, setMainOpen }: Props) => {
  const { pathname } = useLocation()
  const navigateTo = useNavigateTo()
  const user = useAppStore(state => state.user)

  const foundationsPageCategoryKey = useFoundationsPageStore(state => state.categoryKey)
  const foundationsPageItemKey = useFoundationsPageStore(state => state.itemKey)
  const foundationsPageSectionKey = useFoundationsPageStore(state => state.sectionKey)
  const corePageCategoryKey = useCorePageStore(state => state.categoryKey)
  const corePageItemKey = useCorePageStore(state => state.itemKey)
  const corePageSectionKey = useCorePageStore(state => state.sectionKey)
  const proPageCategoryKey = useProPageStore(state => state.categoryKey)
  const proPageItemKey = useProPageStore(state => state.itemKey)
  const proPageSectionKey = useProPageStore(state => state.sectionKey)

  const currentPageKey = `/${pathname.split('/')[1]}`

  if (toolbarSlot === 'main' && !mainOpen) {
    return null
  }

  return (
    <Flex flexDirection={toolbarSlot === 'start' ? 'row' : 'column'} alignItems="stretch">
      {toolbarSlot === 'start' ? (
        <Flex.Item>
          <Link
            href={PageKey.home}
            onClick={async () => {
              if (mainOpen) await setMainOpen(false)
              navigateTo(PageKey.home)
            }}
          >
            <Button
              intent="muted"
              selected={pathname.startsWith(PageKey.home)}
              bold={pathname.startsWith(PageKey.home)}
              inlineSize="115px"
            >
              NebulaKit
            </Button>
          </Link>
        </Flex.Item>
      ) : null}
      <Flex.Item hidden={{ base: toolbarSlot === 'start', md: toolbarSlot !== 'start' }}>
        <Link
          href={PageKey.playground}
          onClick={async () => {
            if (mainOpen) await setMainOpen(false)
            navigateTo(PageKey.playground)
          }}
        >
          <Button
            intent="muted"
            selected={currentPageKey === PageKey.playground}
            bold={currentPageKey === PageKey.playground}
            iconName="shapes"
            fullWidth
            minInlineSize="155px"
          >
            Playground
          </Button>
        </Link>
      </Flex.Item>
      <Flex.Item hidden={{ base: toolbarSlot === 'start', md: toolbarSlot !== 'start' }}>
        <Link
          href={`${PageKey.foundations}/${foundationsPageCategoryKey}/${foundationsPageItemKey}/${foundationsPageSectionKey}`}
          onClick={async () => {
            if (mainOpen) await setMainOpen(false)
            navigateTo(
              `${PageKey.foundations}/${foundationsPageCategoryKey}/${foundationsPageItemKey}/${foundationsPageSectionKey}`
            )
          }}
        >
          <Button
            intent="muted"
            selected={currentPageKey === PageKey.foundations}
            bold={currentPageKey === PageKey.foundations}
            iconName="book-open-text"
            fullWidth
            minInlineSize="160px"
          >
            Foundations
          </Button>
        </Link>
      </Flex.Item>
      <Flex.Item hidden={{ base: toolbarSlot === 'start', lg: toolbarSlot !== 'start' }}>
        <Link
          href={`${PageKey.core}/${corePageCategoryKey}/${corePageItemKey}/${corePageSectionKey}`}
          onClick={async () => {
            if (mainOpen) await setMainOpen(false)
            navigateTo(`${PageKey.core}/${corePageCategoryKey}/${corePageItemKey}/${corePageSectionKey}`)
          }}
        >
          <Button
            intent="muted"
            selected={currentPageKey === PageKey.core}
            bold={currentPageKey === PageKey.core}
            iconName="package"
            fullWidth
            minInlineSize="100px"
          >
            Core
          </Button>
        </Link>
      </Flex.Item>
      <Flex.Item hidden={{ base: toolbarSlot === 'start', lg: toolbarSlot !== 'start' }}>
        <Link
          href={`${PageKey.pro}/${proPageCategoryKey}/${proPageItemKey}/${proPageSectionKey}`}
          onClick={async () => {
            if (mainOpen) await setMainOpen(false)
            navigateTo(`${PageKey.pro}/${proPageCategoryKey}/${proPageItemKey}/${proPageSectionKey}`)
          }}
        >
          <Button
            intent="muted"
            selected={currentPageKey === PageKey.pro}
            bold={currentPageKey === PageKey.pro}
            iconName="star"
            fullWidth
            minInlineSize="90px"
          >
            Pro
          </Button>
        </Link>
      </Flex.Item>
      <Flex.Item hidden={{ base: toolbarSlot === 'start', lg: toolbarSlot !== 'start' }}>
        <Link
          href={PageKey.faq}
          onClick={async () => {
            if (mainOpen) await setMainOpen(false)
            navigateTo(PageKey.faq)
          }}
        >
          <Button
            intent="muted"
            selected={currentPageKey === PageKey.faq}
            bold={currentPageKey === PageKey.faq}
            iconName="message-circle-question-mark"
            fullWidth
            minInlineSize="95px"
          >
            FAQ
          </Button>
        </Link>
      </Flex.Item>
      <Flex.Item hidden={{ base: toolbarSlot === 'start', xl: toolbarSlot !== 'start' }}>
        <Link
          href={PageKey.blog}
          onClick={async () => {
            if (mainOpen) await setMainOpen(false)
            navigateTo(PageKey.blog)
          }}
        >
          <Button
            intent="muted"
            selected={currentPageKey === PageKey.blog}
            bold={currentPageKey === PageKey.blog}
            iconName="rss"
            fullWidth
            minInlineSize="100px"
          >
            Blog
          </Button>
        </Link>
      </Flex.Item>
      {!user?.plan || user.plan === 'free' ? (
        <Flex.Item hidden={{ base: toolbarSlot === 'start', xl: toolbarSlot !== 'start' }}>
          <Link
            href={PageKey.pricing}
            onClick={async () => {
              if (mainOpen) await setMainOpen(false)
              navigateTo(PageKey.pricing)
            }}
          >
            <Button
              intent="muted"
              selected={currentPageKey === PageKey.pricing}
              bold={currentPageKey === PageKey.pricing}
              iconName="credit-card"
              fullWidth
              minInlineSize="120px"
            >
              Pricing
            </Button>
          </Link>
        </Flex.Item>
      ) : null}
      <Flex.Item hidden={{ base: toolbarSlot === 'start', xxl: toolbarSlot !== 'start' }}>
        <Link
          href={PageKey.feedback}
          onClick={async () => {
            if (mainOpen) await setMainOpen(false)
            navigateTo(PageKey.feedback)
          }}
        >
          <Button
            intent="muted"
            selected={currentPageKey === PageKey.feedback}
            bold={currentPageKey === PageKey.feedback}
            iconName="mail"
            fullWidth
            minInlineSize="140px"
          >
            Feedback
          </Button>
        </Link>
      </Flex.Item>
      <Flex.Item hidden={{ base: toolbarSlot === 'start', xxl: toolbarSlot !== 'start' }}>
        <Link
          href={PageKey.assistant}
          onClick={async () => {
            if (mainOpen) await setMainOpen(false)
            navigateTo(PageKey.assistant)
          }}
        >
          <Button
            intent="muted"
            selected={currentPageKey === PageKey.assistant}
            bold={currentPageKey === PageKey.assistant}
            iconName="sparkles"
            fullWidth
            minInlineSize="140px"
          >
            Assistant
          </Button>
        </Link>
      </Flex.Item>
    </Flex>
  )
}
