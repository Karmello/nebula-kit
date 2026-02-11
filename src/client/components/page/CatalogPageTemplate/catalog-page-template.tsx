import { memo } from 'react'

import meta from 'client/meta'
import { useNavigateTo } from 'client/hooks'
import { ComponentsPageRoutes, FoundationsPageRoutes } from 'client/pages'
import { PageKey } from 'client/definitions'
import { Box, SideNav, Spacer, SplitView, Text, Divider, Flex } from 'lib/components'

import { CatalogPageBreadcrumb } from './CatalogPageBreadcrumb'

type Props = {
  pathname: string
  pageKey: PageKey.foundations | PageKey.core | PageKey.pro
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

    const bundleLabel = meta[activeItemObj?.label]?.[activeItemObj?.label]?.overview.bundle

    return (
      <SplitView>
        {({ mode, setSideOpen }) => (
          <>
            <SplitView.Side inlineSize={{ base: '275px', lg: '225px' }}>
              <SideNav>
                {data.map(({ key: categoryKey, label, items }) => {
                  const isCategorySelected = activeCategoryObj?.key === categoryKey
                  return (
                    <SideNav.Category
                      key={categoryKey}
                      label={label}
                      variant="ghost"
                      intent={isCategorySelected ? 'primary' : 'neutral'}
                      expanded={isCategorySelected}
                      justifyContent="flex-start"
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
                            intent={{
                              base: isItemSelected ? 'secondary' : 'tertiary',
                              lg: isItemSelected ? 'muted' : 'neutral',
                            }}
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
            <SplitView.Main paddingLeft="20px">
              <SplitView.MainBar>
                <Box marginRight="20px">
                  <CatalogPageBreadcrumb
                    pageKey={pageKey.replace('/', '')}
                    categoryKey={activeCategoryObj?.key}
                    itemKey={activeItemObj?.key}
                    sectionKey={activeSectionObj?.key}
                  />
                </Box>
              </SplitView.MainBar>
              <Spacer blockSize="30px" />
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
                                intent={{
                                  base: isItemSelected ? 'secondary' : 'tertiary',
                                  lg: isItemSelected ? 'muted' : 'neutral',
                                }}
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
                        <Flex gap="15px" alignItems="center">
                          <Text typography="h3">
                            {pageKey === PageKey.foundations.toString()
                              ? activeSectionObj?.label
                              : activeItemObj?.label}
                          </Text>
                          {pageKey !== PageKey.foundations.toString() && bundleLabel ? (
                            <Box
                              drawable
                              variant="solid"
                              intent="primary"
                              color="blue"
                              borderRadius="10px"
                              paddingBlock="3px"
                              paddingInline="7px"
                            >
                              <Text scale="compact">{bundleLabel}</Text>
                            </Box>
                          ) : null}
                        </Flex>
                        <Divider />
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
