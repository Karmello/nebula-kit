import { useLayoutEffect, useMemo, useState } from 'react'

import { Box, Button, BUTTON_SIZE_TO_PROPS, ButtonProps, VStack } from 'lib/components'
import { scale } from 'lib/helpers'

type Group = Omit<ButtonProps, 'children' | 'size' | 'variant' | 'intent'> & {
  key: string
  label: string
  items?: Item[]
}

type Item = Omit<ButtonProps, 'children' | 'size' | 'variant' | 'intent'> & {
  key: string
  label: string
}

type Config = {
  default?: {
    variant?: ButtonProps['variant']
    intent?: ButtonProps['intent']
    textIntent?: ButtonProps['textIntent']
  }
  active?: {
    variant?: ButtonProps['variant']
    intent?: ButtonProps['intent']
    textIntent?: ButtonProps['textIntent']
  }
}

export type PageSideNavOwnProps = {
  groups: Group[]
  activeKey: string
  groupConfig?: Config
  itemConfig?: Config
}

export const SideNav = ({ groups = [], activeKey, groupConfig, itemConfig }: PageSideNavOwnProps) => {
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
        textIntent: groupConfig?.default?.textIntent || 'neutral',
      },
      active: {
        variant: groupConfig?.active?.variant || 'ghost',
        intent: groupConfig?.active?.intent || 'primary',
        textIntent: groupConfig?.active?.textIntent || 'primary',
      },
    }),
    [groupConfig]
  )

  const FINAL_ITEM_CONFIG: Config = useMemo(
    () => ({
      default: {
        variant: itemConfig?.default?.variant || 'solid',
        intent: itemConfig?.default?.intent || 'neutral',
        textIntent: itemConfig?.default?.textIntent || 'neutral',
      },
      active: {
        variant: itemConfig?.active?.variant || 'solid',
        intent: itemConfig?.active?.intent || 'tertiary',
        textIntent: itemConfig?.active?.textIntent || 'primary',
      },
    }),
    [itemConfig]
  )

  return (
    <VStack>
      {groups.map(({ key, label, items, ...rest }) => {
        const isGroupActive = items?.some(item => item.key === activeKey) || key === activeKey
        const isGroupOpen = key === openGroupKey
        const hasItems = !!items?.length

        return (
          <Box key={key}>
            <Button
              size="md"
              variant={
                isGroupActive ? FINAL_GROUP_CONFIG.active?.variant : FINAL_GROUP_CONFIG.default?.variant
              }
              intent={isGroupActive ? FINAL_GROUP_CONFIG.active?.intent : FINAL_GROUP_CONFIG.default?.intent}
              textIntent={
                isGroupActive ? FINAL_GROUP_CONFIG.active?.textIntent : FINAL_GROUP_CONFIG.default?.textIntent
              }
              borderRadius={0}
              iconName={hasItems ? (isGroupOpen ? 'chevron-up' : 'chevron-down') : undefined}
              style={{ justifyContent: 'flex-start', inlineSize: '100%' }}
              {...rest}
              onClick={e => {
                setOpenGroupKey(key === openGroupKey ? '' : key)
                rest.onClick?.(e)
              }}
            >
              {label}
            </Button>
            <Box
              blockSize={
                isGroupOpen ? `calc(${scale(BUTTON_SIZE_TO_PROPS.md.blockSize)} * ${items?.length || 0})` : 0
              }
              overflowY="hidden"
            >
              <VStack>
                {items?.map(({ key, label, ...rest }) => {
                  const isItemActive = key === activeKey

                  return (
                    <Button
                      key={key}
                      variant={
                        isItemActive ? FINAL_ITEM_CONFIG.active?.variant : FINAL_ITEM_CONFIG.default?.variant
                      }
                      intent={
                        isItemActive ? FINAL_ITEM_CONFIG.active?.intent : FINAL_ITEM_CONFIG.default?.intent
                      }
                      textIntent={
                        isItemActive
                          ? FINAL_ITEM_CONFIG.active?.textIntent
                          : FINAL_ITEM_CONFIG.default?.textIntent
                      }
                      borderRadius={0}
                      {...rest}
                    >
                      {label}
                    </Button>
                  )
                })}
              </VStack>
            </Box>
          </Box>
        )
      })}
    </VStack>
  )
}
