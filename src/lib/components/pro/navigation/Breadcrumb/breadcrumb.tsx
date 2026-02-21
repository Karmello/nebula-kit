import { useState, Fragment, useCallback } from 'react'

import { Box, Flex, Button, DropdownList, Icon } from 'lib/components'

import {
  BreadcrumbProps,
  BreadcrumbTag,
  DEFAULT_BREADCRUMB_SIZE,
  DEFAULT_BREADCRUMB_INTENT,
} from './definitions'

import { convertTreeToLevels } from './helpers'

export const Breadcrumb = <T extends BreadcrumbTag = 'div'>({
  // HtmlTag
  tag,
  tagAttrs,
  tagRef,
  // DropdownList
  color,
  intent = DEFAULT_BREADCRUMB_INTENT,
  size = DEFAULT_BREADCRUMB_SIZE,
  // own
  tree,
  defaultPath,
  path,
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
      <Flex gap="8px" alignItems="center">
        {levels.slice(0, currentPath.length + 1).map((level, index) => {
          const scrollToIndex = levels[index].findIndex(node => node.value === currentPath[index])

          return (
            <Fragment key={index}>
              <DropdownList
                tagAttrs={{ style: { minInlineSize: 'auto' } }}
                size={size}
                color={color}
                intent={intent}
                scrollToIndex={scrollToIndex > -1 ? scrollToIndex : undefined}
                scrollAlign="center"
                placement={index < levels.length - 1 ? 'bottom-start' : 'bottom-end'}
              >
                {({ open }) => (
                  <>
                    <DropdownList.Trigger>
                      <Button
                        size={size}
                        variant="ghost"
                        color={color}
                        intent="primary"
                        ripple={!open}
                        // highlighted={open ? true : undefined}
                        bold
                      >
                        {levels[index].find(node => node.value === currentPath[index])?.label || 'Select ...'}
                      </Button>
                    </DropdownList.Trigger>
                    {level.map(node => (
                      <DropdownList.Item
                        key={node.value}
                        tagAttrs={{
                          onClick: () => handleChange(index, node.value),
                        }}
                        bold={node.value === currentPath[index]}
                      >
                        {node.label}
                      </DropdownList.Item>
                    ))}
                  </>
                )}
              </DropdownList>
              {index < levels.length - 1 ? (
                <Icon name="chevron-right" color={color} intent="primary" />
              ) : null}
            </Fragment>
          )
        })}
      </Flex>
    </Box>
  )
}

Breadcrumb.displayName = 'Breadcrumb'
