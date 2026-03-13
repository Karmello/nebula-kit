import { useLocation } from 'react-router'

import { useNavigateTo } from 'client/hooks'
import { PageKey } from 'client/definitions'
import { useAppStore, useCorePageStore, useProPageStore, useFoundationsPageStore } from 'client/store'
import { Button, Grid, Link } from 'lib/components'

type Props = {
  setMainOpen: (mainOpen: boolean) => Promise<boolean>
  mainOpen: boolean
}

export const PageNavigation = ({ setMainOpen, mainOpen }: Props) => {
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

  return (
    <Grid
      gridTemplateColumns={{
        base: 'repeat(2, 1fr)',
        sm: 'repeat(3, 1fr)',
        md: 'repeat(4, 1fr)',
        lg: 'repeat(8, auto)',
      }}
    >
      <Grid.Item>
        <Link
          href={PageKey.playground}
          onClick={async () => {
            if (mainOpen) await setMainOpen(false)
            navigateTo(PageKey.playground)
          }}
        >
          <Button
            intent="muted"
            elevated={currentPageKey === PageKey.playground}
            bold={currentPageKey === PageKey.playground}
            iconName="shapes"
            fullWidth
            minInlineSize="155px"
          >
            Playground
          </Button>
        </Link>
      </Grid.Item>
      <Grid.Item>
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
            elevated={currentPageKey === PageKey.foundations}
            bold={currentPageKey === PageKey.foundations}
            iconName="book-open-text"
            fullWidth
            minInlineSize="160px"
          >
            Foundations
          </Button>
        </Link>
      </Grid.Item>
      <Grid.Item>
        <Link
          href={`${PageKey.core}/${corePageCategoryKey}/${corePageItemKey}/${corePageSectionKey}`}
          onClick={async () => {
            if (mainOpen) await setMainOpen(false)
            navigateTo(`${PageKey.core}/${corePageCategoryKey}/${corePageItemKey}/${corePageSectionKey}`)
          }}
        >
          <Button
            intent="muted"
            elevated={currentPageKey === PageKey.core}
            bold={currentPageKey === PageKey.core}
            iconName="package"
            fullWidth
            minInlineSize="100px"
          >
            Core
          </Button>
        </Link>
      </Grid.Item>
      <Grid.Item>
        <Link
          href={`${PageKey.pro}/${proPageCategoryKey}/${proPageItemKey}/${proPageSectionKey}`}
          onClick={async () => {
            if (mainOpen) await setMainOpen(false)
            navigateTo(`${PageKey.pro}/${proPageCategoryKey}/${proPageItemKey}/${proPageSectionKey}`)
          }}
        >
          <Button
            intent="muted"
            elevated={currentPageKey === PageKey.pro}
            bold={currentPageKey === PageKey.pro}
            iconName="star"
            fullWidth
            minInlineSize="90px"
          >
            Pro
          </Button>
        </Link>
      </Grid.Item>
      <Grid.Item>
        <Link
          href={PageKey.faq}
          onClick={async () => {
            if (mainOpen) await setMainOpen(false)
            navigateTo(PageKey.faq)
          }}
        >
          <Button
            intent="muted"
            elevated={currentPageKey === PageKey.faq}
            bold={currentPageKey === PageKey.faq}
            iconName="message-circle-question-mark"
            fullWidth
            minInlineSize="95px"
          >
            FAQ
          </Button>
        </Link>
      </Grid.Item>
      <Grid.Item>
        <Link
          href={PageKey.blog}
          onClick={async () => {
            if (mainOpen) await setMainOpen(false)
            navigateTo(PageKey.blog)
          }}
        >
          <Button
            intent="muted"
            elevated={currentPageKey === PageKey.blog}
            bold={currentPageKey === PageKey.blog}
            iconName="rss"
            fullWidth
            minInlineSize="100px"
          >
            Blog
          </Button>
        </Link>
      </Grid.Item>
      {!user?.plan || user.plan === 'free' ? (
        <Grid.Item>
          <Link
            href={PageKey.pricing}
            onClick={async () => {
              if (mainOpen) await setMainOpen(false)
              navigateTo(PageKey.pricing)
            }}
          >
            <Button
              intent="muted"
              elevated={currentPageKey === PageKey.pricing}
              bold={currentPageKey === PageKey.pricing}
              iconName="credit-card"
              fullWidth
              minInlineSize="120px"
            >
              Pricing
            </Button>
          </Link>
        </Grid.Item>
      ) : null}
      <Grid.Item>
        <Link
          href={PageKey.feedback}
          onClick={async () => {
            if (mainOpen) await setMainOpen(false)
            navigateTo(PageKey.feedback)
          }}
        >
          <Button
            intent="muted"
            elevated={currentPageKey === PageKey.feedback}
            bold={currentPageKey === PageKey.feedback}
            iconName="mail"
            fullWidth
            minInlineSize="140px"
          >
            Feedback
          </Button>
        </Link>
      </Grid.Item>
    </Grid>
  )
}
