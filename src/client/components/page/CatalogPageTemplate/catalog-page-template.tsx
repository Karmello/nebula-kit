import { useLocation } from 'react-router'
import { pascalCase } from 'change-case'

import meta from 'client/meta'
import { useNavigateTo } from 'client/hooks'
import { ComponentsPageRoutes, FoundationsPageRoutes } from 'client/pages'
import { PageKey } from 'client/definitions'
import { Box, Breadcrumb, SideNav, Spacer, SplitView, Text, Divider, Flex } from 'lib/components'

type Props = {
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

export const CatalogPageTemplate = ({
  pageKey,
  data,
  activeCategoryObj,
  activeItemObj,
  activeSectionObj,
}: Props) => {
  const { pathname } = useLocation()
  const navigateTo = useNavigateTo()

  const bundleLabel = meta[activeItemObj?.label]?.[activeItemObj?.label]?.overview.bundle

  return (
    <SplitView>
      {({ mode, setSideOpen }) => (
        <>
          <SplitView.Side>
            <SideNav>
              {data.map(({ key: categoryKey, label, items }) => {
                const isCategorySelected = activeCategoryObj?.key === categoryKey
                return (
                  <SideNav.Category
                    key={categoryKey}
                    label={label}
                    variant="ghost"
                    color="blue"
                    intent={isCategorySelected ? 'primary' : 'neutral'}
                    initiallyExpanded={isCategorySelected}
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
                <Breadcrumb
                  items={[
                    pascalCase(pageKey),
                    activeCategoryObj?.label,
                    activeItemObj?.label,
                    activeSectionObj?.label,
                  ]}
                />
              </Box>
            </SplitView.MainBar>
            <Spacer blockSize="30px" />
            <SplitView sidePosition="right">
              {({ mode, setSideOpen }) => (
                <>
                  <SplitView.Side>
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
                            variant="solid"
                            color="blue"
                            intent={bundleLabel === 'core' ? 'tertiary' : 'primary'}
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
