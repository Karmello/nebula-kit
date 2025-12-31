import { useState } from 'react'

import { Box, Flex, Select } from 'lib/components'

import { BreadcrumbProps, BreadcrumbTag } from './definitions'
import { convertTreeToLevels } from './helpers'

export const Breadcrumb = <T extends BreadcrumbTag = 'div'>({
  // HtmlTag
  tag,
  tagAttrs,
  tagRef,
  // own
  tree,
  defaultPath,
  path,
  onChange,
}: BreadcrumbProps<T>) => {
  const [internalPath, setInternalPath] = useState<string[]>(defaultPath || [])

  const isControlled = path !== undefined
  const currentPath = isControlled ? path : internalPath

  const handleChange = (index: number, value: string) => {
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
  }

  const levels = convertTreeToLevels(tree, currentPath)

  return (
    <Box tag={tag} tagAttrs={tagAttrs} tagRef={tagRef} overflowX="auto">
      <Flex gap="8px">
        {levels.slice(0, currentPath.length + 1).map((level, index) => {
          return (
            <Select
              key={currentPath.slice(0, index).join('|') || 'root'}
              value={currentPath[index]}
              onChange={value => handleChange(index, value)}
              size="xs"
              variant="solid"
              scrollAlign="center"
            >
              {level.map(node => (
                <Select.Option key={node.value} value={node.value}>
                  {node.label}
                </Select.Option>
              ))}
            </Select>
          )
        })}
      </Flex>
    </Box>
  )
}

Breadcrumb.displayName = 'Breadcrumb'
