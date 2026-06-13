import { useCallback, useState } from 'react'
import { Fragment } from 'react/jsx-runtime'

import { DropdownList } from 'lib/components/shared'
import { CONTROL_SCALE_MAP } from 'lib/constants'
import { Box, Flex, Icon, Text } from 'lib/index.core'
import { BreadcrumbProps } from 'lib/index.pro'
import { type BreadcrumbTag } from 'lib/types'

import { DEFAULT_BREADCRUMB_INTENT, DEFAULT_BREADCRUMB_SIZE } from './definitions'
import { convertTreeToLevels } from './helpers'

export const Breadcrumb = <T extends BreadcrumbTag = 'div'>({
  // HtmlTag
  tag,
  tagAttrs,
  tagRef,
  // DropdownList
  color,
  intent = DEFAULT_BREADCRUMB_INTENT,
  // own
  tree,
  defaultPath,
  path,
  size = DEFAULT_BREADCRUMB_SIZE,
  onChange,
}: BreadcrumbProps<T>) => {
  const [openIndex, setOpenIndex] = useState<number>(-1)

  const [internalPath, setInternalPath] = useState<string[]>(defaultPath || [])
  const isControlled = path !== undefined
  const currentPath = isControlled ? path : internalPath

  const handleChange = useCallback(
    (index: number, value: string) => {
      if (!isControlled) {
        setInternalPath(prev => {
          const next = prev.slice(0, index)
          next[index] = value
          return next
        })
      }

      onChange?.(
        (() => {
          const next = currentPath.slice(0, index)
          next[index] = value
          return next
        })()
      )
    },
    [isControlled, setInternalPath, onChange, currentPath]
  )

  const levels = convertTreeToLevels(tree, currentPath)

  return (
    <Box tag={tag} tagAttrs={tagAttrs} tagRef={tagRef} overflowX="auto">
      <Flex gap="8px" alignItems="center">
        {levels.slice(0, currentPath.length + 1).map((level, index) => {
          const scrollToIndex = levels[index].findIndex(node => node.value === currentPath[index])

          const isOpen = index === openIndex

          return (
            <Fragment key={index}>
              <DropdownList
                tagAttrs={{ style: { minInlineSize: 'auto' } }}
                itemBlockSize={Number(CONTROL_SCALE_MAP[size || 'md'].blockSize.replace('px', ''))}
                color={color}
                intent={intent}
                scrollToIndex={scrollToIndex > -1 ? scrollToIndex : undefined}
                scrollAlign="center"
                placement={index === 0 || index < levels.length - 1 ? 'bottom-start' : 'bottom-end'}
                state={{ open: false, placement: 'bottom-center' }}
                onStateChange={prev => {
                  setOpenIndex(prev.open ? index : -1)
                }}
              >
                <DropdownList.Trigger
                  variant="ghost"
                  intent="primary"
                  surface={isOpen ? 'selected' : undefined}
                  ripple={!isOpen}
                  blockSize={CONTROL_SCALE_MAP[size || 'md'].blockSize}
                  paddingInline={CONTROL_SCALE_MAP[size || 'md'].paddingInline}
                >
                  <Text
                    bold
                    intent="primary"
                    fontSize={CONTROL_SCALE_MAP[size || 'md'].fontSize}
                    lineHeight={CONTROL_SCALE_MAP[size || 'md'].lineHeight}
                    noWrap
                  >
                    {levels[index].find(node => node.value === currentPath[index])?.label || 'Select ...'}
                  </Text>
                </DropdownList.Trigger>
                {level.map(node => {
                  const isSelected = node.value === currentPath[index]
                  return (
                    <DropdownList.Item
                      key={node.value}
                      index={index}
                      inlineSize="100%"
                      blockSize={CONTROL_SCALE_MAP[size || 'md'].blockSize}
                      paddingInline={CONTROL_SCALE_MAP[size || 'md'].paddingInline}
                      onClick={() => handleChange(index, node.value)}
                      surface={isSelected ? 'selected' : undefined}
                      elevated
                    >
                      <Text
                        bold={isSelected}
                        fontSize={CONTROL_SCALE_MAP[size || 'md'].fontSize}
                        lineHeight={CONTROL_SCALE_MAP[size || 'md'].lineHeight}
                        textAlign="center"
                      >
                        {node.label}
                      </Text>
                    </DropdownList.Item>
                  )
                })}
              </DropdownList>
              {index < levels.length - 1 ? (
                <Icon name="chevron-right" color={color} intent="primary" size={CONTROL_SCALE_MAP[size || 'md'].fontSize} />
              ) : null}
            </Fragment>
          )
        })}
      </Flex>
    </Box>
  )
}

Breadcrumb.displayName = 'Breadcrumb'
