import { useLocation } from 'react-router'

import { Button, Flex, Link } from 'lib/components'
import { PageKey } from 'client/definitions'
import { useNavigateTo } from 'client/hooks'
import { useAppStore, useComponentsPageStore, useFoundationsPageStore, usePatternsStore } from 'client/store'

type Props = {
  toolbarSlot: 'start' | 'main'
  mainOpen: boolean
  setMainOpen: (mainOpen: boolean) => Promise<boolean>
}

export const PageNavigation = ({ toolbarSlot, mainOpen, setMainOpen }: Props) => {
  const { pathname } = useLocation()
  const navigateTo = useNavigateTo()
  const user = useAppStore(state => state.user)
  const activePatternId = usePatternsStore(state => state.activePatternId)

  const foundationsPageCategoryKey = useFoundationsPageStore(state => state.categoryKey)
  const foundationsPageItemKey = useFoundationsPageStore(state => state.itemKey)
  const foundationsPageSectionKey = useFoundationsPageStore(state => state.sectionKey)

  const componentsPageCategoryKey = useComponentsPageStore(state => state.categoryKey)
  const componentsPageItemKey = useComponentsPageStore(state => state.itemKey)
  const componentsPageSectionKey = useComponentsPageStore(state => state.sectionKey)

  const currentPageKey = `/${pathname.split('/')[1]}`

  if (toolbarSlot === 'main' && !mainOpen) {
    return null
  }

  return (
    <Flex
      flexDirection={toolbarSlot === 'start' ? 'row' : { base: 'column', md: 'row' }}
      flexWrap={{ base: 'nowrap', md: 'wrap' }}
      alignItems="stretch"
    >
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
              inlineSize="110px"
            >
              NebulaKit
            </Button>
          </Link>
        </Flex.Item>
      ) : null}
      <Flex.Item hidden={{ base: toolbarSlot === 'start', md: toolbarSlot !== 'start' }}>
        <Link
          href={`${PageKey.patterns}?id=${activePatternId}`}
          onClick={async () => {
            if (mainOpen) await setMainOpen(false)
            navigateTo(`${PageKey.patterns}?id=${activePatternId}`)
          }}
        >
          <Button
            intent="muted"
            selected={currentPageKey === PageKey.patterns}
            bold={currentPageKey === PageKey.patterns}
            iconName="pyramid"
            fullWidth
            minInlineSize="120px"
          >
            Patterns
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
            minInlineSize="150px"
          >
            Foundations
          </Button>
        </Link>
      </Flex.Item>
      <Flex.Item hidden={{ base: toolbarSlot === 'start', lg: toolbarSlot !== 'start' }}>
        <Link
          href={`${PageKey.components}/${componentsPageCategoryKey}/${componentsPageItemKey}/${componentsPageSectionKey}`}
          onClick={async () => {
            if (mainOpen) await setMainOpen(false)
            navigateTo(`${PageKey.components}/${componentsPageCategoryKey}/${componentsPageItemKey}/${componentsPageSectionKey}`)
          }}
        >
          <Button
            intent="muted"
            selected={currentPageKey === PageKey.components}
            bold={currentPageKey === PageKey.components}
            iconName="package"
            fullWidth
            minInlineSize="150px"
          >
            Components
          </Button>
        </Link>
      </Flex.Item>
      <Flex.Item hidden={{ base: toolbarSlot === 'start', lg: toolbarSlot !== 'start' }}>
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
            iconName="flask-conical"
            fullWidth
            minInlineSize="140px"
          >
            Playground
          </Button>
        </Link>
      </Flex.Item>
      <Flex.Item hidden={{ base: toolbarSlot === 'start', xl: toolbarSlot !== 'start' }}>
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
            minInlineSize="90px"
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
            minInlineSize="95px"
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
              minInlineSize="110px"
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
            minInlineSize="130px"
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
            minInlineSize="130px"
          >
            Assistant
          </Button>
        </Link>
      </Flex.Item>
    </Flex>
  )
}
