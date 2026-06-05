import { memo } from 'react'

import { Box, Button, Divider, Flex, Link, SideNav, Spacer, SplitView, Text } from 'lib/components'
import { PageKey, PLAYGROUND_PROPS_MAP } from 'client/definitions'
import { useNavigateTo } from 'client/hooks'
import meta from 'client/meta'
import { ComponentsPageRoutes, FoundationsPageRoutes } from 'client/pages'
import { usePlaygroundStore } from 'client/store'

import { CatalogPageBreadcrumb } from './CatalogPageBreadcrumb'

type Props = {
  pathname: string
  pageKey: PageKey.foundations | PageKey.components
  data: {
    key: string
    label: string
    items: { key: string; label: string; sections: { key: string; label: string }[] }[]
  }[]
  activeCategoryObj: { key: string; label: string }
  activeItemObj: { key: string; label: string }
  activeSectionObj: { key: string; label: string }
}

export const CatalogPageTemplate = memo(
  ({ pathname, pageKey, data, activeCategoryObj, activeItemObj, activeSectionObj }: Props) => {
    const navigateTo = useNavigateTo()
    const setActiveComponent = usePlaygroundStore(state => state.setActiveComponent)

    const bundleLabel = meta[activeItemObj?.label]?.[activeItemObj?.label]?.overview.bundle

    const isInPlayground = Object.keys(PLAYGROUND_PROPS_MAP).includes(activeItemObj?.label)

    return (
      <SplitView>
        {({ mode, setSideOpen }) => (
          <>
            <SplitView.Side inlineSize={{ base: '275px', lg: '225px' }} blockSize={{ lg: 'calc(100dvh - 125px)' }}>
              <SideNav expandMode="single">
                {data.map(({ key: categoryKey, label, items }) => {
                  const isCategorySelected = activeCategoryObj?.key === categoryKey
                  return (
                    <SideNav.Category
                      key={categoryKey}
                      label={label}
                      variant="ghost"
                      expanded={isCategorySelected}
                      align="start"
                      bold={isCategorySelected}
                    >
                      {items.map(({ key: itemKey, label, sections }) => {
                        const href = `${pageKey}/${categoryKey}/${itemKey}/${sections[0].key}`
                        const isItemSelected = isCategorySelected && itemKey === activeItemObj?.key
                        return (
                          <SideNav.Item
                            key={itemKey}
                            href={href}
                            onClick={async () => {
                              if (mode === 'overlay') {
                                await setSideOpen(false)
                              }
                              navigateTo(href)
                            }}
                            intent={{ base: 'tertiary', lg: 'neutral' }}
                            selected={isItemSelected}
                            bold={isItemSelected}
                          >
                            {label}
                          </SideNav.Item>
                        )
                      })}
                    </SideNav.Category>
                  )
                })}
              </SideNav>
            </SplitView.Side>
            <SplitView.Main paddingLeft="md">
              <SplitView.MainBar>
                <Box marginRight="md">
                  <CatalogPageBreadcrumb
                    pageKey={pageKey.replace('/', '')}
                    categoryKey={activeCategoryObj?.key}
                    itemKey={activeItemObj?.key}
                    sectionKey={activeSectionObj?.key}
                  />
                </Box>
              </SplitView.MainBar>
              <Spacer blockSize="md" />
              <SplitView sidePosition="right">
                {({ mode, setSideOpen }) => (
                  <>
                    <SplitView.Side inlineSize={{ base: '275px', lg: '225px' }}>
                      <SideNav>
                        {data
                          .find(c => c.key === activeCategoryObj?.key)
                          ?.items.find(i => i.key === activeItemObj?.key)
                          ?.sections.map(({ key: sectionKey, label }) => {
                            const href = `${pageKey}/${activeCategoryObj?.key}/${activeItemObj?.key}/${sectionKey}`
                            const isItemSelected = pathname === href
                            return (
                              <SideNav.Item
                                key={sectionKey}
                                href={href}
                                onClick={async () => {
                                  if (mode === 'overlay') {
                                    await setSideOpen(false)
                                  }
                                  navigateTo(href)
                                }}
                                intent={{ base: 'tertiary', lg: 'neutral' }}
                                selected={isItemSelected}
                                bold={isItemSelected}
                              >
                                {label}
                              </SideNav.Item>
                            )
                          })}
                      </SideNav>
                    </SplitView.Side>
                    <SplitView.Main paddingRight="20px">
                      <SplitView.MainBar>
                        <Flex columnGap="sm" rowGap="2xs" alignItems="center" flexWrap="wrap">
                          <Text typography="h3">
                            {pageKey === PageKey.foundations.toString()
                              ? activeSectionObj?.label
                              : `${activeItemObj?.label} ${activeSectionObj?.label.toLowerCase()}`}
                          </Text>
                          {pageKey !== PageKey.foundations.toString() && bundleLabel ? (
                            <Box
                              drawable
                              variant="solid"
                              intent="tertiary"
                              borderRadius="10px"
                              paddingBlock="6px"
                              paddingInline="9px"
                            >
                              <Text typography="small">{bundleLabel}</Text>
                            </Box>
                          ) : null}
                          {isInPlayground ? (
                            <Link
                              href={PageKey.playground}
                              onClick={async () => {
                                setActiveComponent(activeItemObj?.label)
                                navigateTo(PageKey.playground)
                              }}
                            >
                              <Button
                                iconName="arrow-right"
                                iconPlacement="right"
                                size="xs"
                                variant="ghost"
                                intent="primary"
                                color="blue"
                                bold
                              >
                                Try in Playground
                              </Button>
                            </Link>
                          ) : null}
                        </Flex>
                        <Divider marginTop="xs" />
                      </SplitView.MainBar>
                      {pageKey === PageKey.foundations.toString() ? (
                        <FoundationsPageRoutes />
                      ) : (
                        <ComponentsPageRoutes pageKey={pageKey as never} />
                      )}
                    </SplitView.Main>
                  </>
                )}
              </SplitView>
            </SplitView.Main>
          </>
        )}
      </SplitView>
    )
  }
)
