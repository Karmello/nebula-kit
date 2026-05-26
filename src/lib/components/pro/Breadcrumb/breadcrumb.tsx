import { useState, Fragment, useCallback } from 'react'

import { Box, Flex, Button, DropdownList, Icon } from 'lib/components'
import { CONTROL_SIZE_MAP, DEFAULT_CONTROL_SIZE } from 'lib/definitions'

import { BreadcrumbProps, BreadcrumbTag, DEFAULT_BREADCRUMB_INTENT } from './definitions'

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
  size = DEFAULT_CONTROL_SIZE,
  onChange,
}: BreadcrumbProps<T>) => {
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
      <Flex gap="xs" alignItems="center">
        {levels.slice(0, currentPath.length + 1).map((level, index) => {
          const scrollToIndex = levels[index].findIndex(node => node.value === currentPath[index])

          return (
            <Fragment key={index}>
              <DropdownList
                tagAttrs={{ style: { minInlineSize: 'auto' } }}
                itemBlockSize={Number(CONTROL_SIZE_MAP[size || 'md'].blockSize.replace('px', ''))}
                color={color}
                intent={intent}
                scrollToIndex={scrollToIndex > -1 ? scrollToIndex : undefined}
                scrollAlign="center"
                placement={index === 0 || index < levels.length - 1 ? 'bottom-start' : 'bottom-end'}
              >
                {({ open }) => (
                  <>
                    <DropdownList.Trigger>
                      <Button size={size} variant="ghost" color={color} intent="primary" ripple={!open} selected={open} bold>
                        {levels[index].find(node => node.value === currentPath[index])?.label || 'Select ...'}
                      </Button>
                    </DropdownList.Trigger>
                    {level.map(node => (
                      <DropdownList.Item
                        key={node.value}
                        tagAttrs={{
                          onClick: () => handleChange(index, node.value),
                        }}
                        selected={node.value === currentPath[index]}
                        bold={node.value === currentPath[index]}
                        align="center"
                      >
                        {node.label}
                      </DropdownList.Item>
                    ))}
                  </>
                )}
              </DropdownList>
              {index < levels.length - 1 ? <Icon name="chevron-right" color={color} intent="primary" size="sm" /> : null}
            </Fragment>
          )
        })}
      </Flex>
    </Box>
  )
}

Breadcrumb.displayName = 'Breadcrumb'
