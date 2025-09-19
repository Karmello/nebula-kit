import { useLayoutEffect, useMemo, useState } from 'react'

import { Box, Button, Flex } from 'lib/components'
import { scale } from 'lib/helpers'
import { BUTTON_SIZE_CONFIG } from 'lib/components/controls/Button/definitions'

import { Config, SideNavProps } from './definitions'

export const SideNav = ({ groups = [], activeKey, groupConfig, itemConfig }: SideNavProps) => {
  const [openGroupKey, setOpenGroupKey] = useState<string>('')

  useLayoutEffect(() => {
    if (activeKey) {
      const newOpenGroupKey = groups.find(group => group.items?.some(item => item.key === activeKey))?.key
      if (newOpenGroupKey) {
        setOpenGroupKey(newOpenGroupKey)
      }
    }
  }, [activeKey])

  const FINAL_GROUP_CONFIG: Config = useMemo(
    () => ({
      default: {
        variant: groupConfig?.default?.variant || 'ghost',
        intent: groupConfig?.default?.intent || 'neutral',
      },
      active: {
        variant: groupConfig?.active?.variant || 'ghost',
        intent: groupConfig?.active?.intent || 'primary',
      },
    }),
    [groupConfig]
  )

  const FINAL_ITEM_CONFIG: Config = useMemo(
    () => ({
      default: {
        variant: itemConfig?.default?.variant || 'solid',
        intent: itemConfig?.default?.intent || 'neutral',
      },
      active: {
        variant: itemConfig?.active?.variant || 'solid',
        intent: itemConfig?.active?.intent || 'tertiary',
      },
    }),
    [itemConfig]
  )

  return (
    <Flex flexDirection="column" alignItems="stretch">
      {groups.map(({ key, label, items, elemProps, ...rest }) => {
        const isGroupActive = items?.some(item => item.key === activeKey) || key === activeKey
        const isGroupOpen = key === openGroupKey
        const hasItems = !!items?.length

        return (
          <Box key={key}>
            <Button
              {...rest}
              elemProps={{
                ...elemProps,
                onClick: e => {
                  setOpenGroupKey(key === openGroupKey ? '' : key)
                  elemProps?.onClick?.(e)
                },
                style: { justifyContent: 'flex-start', inlineSize: '100%', ...elemProps?.style },
              }}
              size="md"
              variant={
                isGroupActive ? FINAL_GROUP_CONFIG.active?.variant : FINAL_GROUP_CONFIG.default?.variant
              }
              intent={isGroupActive ? FINAL_GROUP_CONFIG.active?.intent : FINAL_GROUP_CONFIG.default?.intent}
              // textIntent={
              //   isGroupActive ? FINAL_GROUP_CONFIG.active?.textIntent : FINAL_GROUP_CONFIG.default?.textIntent
              // }
              iconName={hasItems ? (isGroupOpen ? 'chevron-up' : 'chevron-down') : undefined}
              // bold={isGroupActive}
            >
              {label}
            </Button>
            <Box
              blockSize={
                isGroupOpen ? `calc(${scale(BUTTON_SIZE_CONFIG.md.blockSize)} * ${items?.length || 0})` : 0
              }
              overflowX="hidden"
              overflowY="hidden"
            >
              <Flex flexDirection="column" alignItems="stretch">
                {(items || []).map(({ key, label, elemProps, ...rest }) => {
                  const isItemActive = key === activeKey

                  return (
                    <Button
                      key={key}
                      {...rest}
                      elemProps={{
                        ...elemProps,
                        style: {
                          justifyContent: 'flex-start',
                          paddingLeft: '45px',
                          inlineSize: '100%',
                          ...elemProps?.style,
                        },
                      }}
                      variant={
                        isItemActive ? FINAL_ITEM_CONFIG.active?.variant : FINAL_ITEM_CONFIG.default?.variant
                      }
                      intent={
                        isItemActive ? FINAL_ITEM_CONFIG.active?.intent : FINAL_ITEM_CONFIG.default?.intent
                      }
                      // textIntent={
                      //   isItemActive
                      //     ? FINAL_ITEM_CONFIG.active?.textIntent
                      //     : FINAL_ITEM_CONFIG.default?.textIntent
                      // }
                      // bold={isItemActive}
                    >
                      {label}
                    </Button>
                  )
                })}
              </Flex>
            </Box>
          </Box>
        )
      })}
    </Flex>
  )
}
