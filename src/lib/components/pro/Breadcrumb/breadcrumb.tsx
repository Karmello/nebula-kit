import { useCallback, useEffect, useRef, useState } from 'react'
import { Fragment } from 'react/jsx-runtime'

import { CONTROL_SCALE_MAP, NEB_LENGTH } from 'lib/constants'
import { Box, Divider, Icon, Resize, Text } from 'lib/index.core'
import { type BreadcrumbProps, Floating, type FloatingProps } from 'lib/index.pro'

import {
  DEFAULT_BREADCRUMB_INTENT,
  DEFAULT_BREADCRUMB_SIZE,
  DEFAULT_BREADCRUMB_VISIBLE_ITEMS_COUNT,
} from './constants'
import { convertTreeToLevels, resolveBreadcrumbValues } from './helpers'
import { type BreadcrumbNode, type BreadcrumbTag } from './types'

type BreadcrumbLevelProps = {
  nodes: BreadcrumbNode[]
  currentValue?: string
  onSelect: (value: string) => void
  color: BreadcrumbProps['color']
  intent: BreadcrumbProps['intent']
  size: BreadcrumbProps['size']
  isLast: boolean
}

const BreadcrumbLevel = ({
  nodes,
  currentValue,
  onSelect,
  color,
  intent,
  size,
  isLast,
}: BreadcrumbLevelProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const [visible, setVisible] = useState<boolean>(false)
  const [placement, setPlacement] = useState<FloatingProps['placement']>(
    isLast ? 'bottom-end' : 'bottom-start'
  )

  const selectedItemRef = useRef<HTMLButtonElement | null>(null)

  const isOpenDownwards = placement?.startsWith('bottom')
  const optionBlockSize = Number(CONTROL_SCALE_MAP[size || 'md'].blockSize.replace('px', ''))

  const { menuBlockSize } = resolveBreadcrumbValues({
    visibleItemsCount: DEFAULT_BREADCRUMB_VISIBLE_ITEMS_COUNT,
    optionBlockSize,
    itemsCount: nodes.length,
  })

  useEffect(() => {
    if (!open) return
    requestAnimationFrame(() => {
      selectedItemRef.current?.focus()
    })
  }, [open])

  useEffect(() => {
    requestAnimationFrame(() => {
      setVisible(open)
    })
  }, [open])

  const currentLabel = nodes.find(node => node.value === currentValue)?.label

  return (
    <Floating
      mode="click"
      open={open}
      onOpenChange={setOpen}
      placement={placement}
      onPlacementChange={setPlacement}
    >
      <Floating.Trigger display="block">
        <Box
          tag="button"
          cursor="pointer"
          interactive
          variant="ghost"
          intent="primary"
          surface={open ? 'selected' : undefined}
          ripple={!open}
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
            {currentLabel || 'Select ...'}
          </Text>
        </Box>
      </Floating.Trigger>
      <Floating.Content>
        <Resize visible={visible} property="blockSize" easing={visible ? 'ease-out' : undefined}>
          <Box
            drawable
            variant="solid"
            intent={intent}
            color={color}
            minInlineSize="auto"
            maxBlockSize={`${menuBlockSize}px`}
            overflowY="auto"
            overflowX="hidden"
            borderTopLeftRadius={isOpenDownwards ? '0px' : undefined}
            borderTopRightRadius={isOpenDownwards ? '0px' : undefined}
            borderBottomLeftRadius={!isOpenDownwards ? '0px' : undefined}
            borderBottomRightRadius={!isOpenDownwards ? '0px' : undefined}
          >
            <Box intent={intent} color={color} elevated>
              {nodes.map(node => {
                const isSelected = node.value === currentValue

                return (
                  <Box key={node.value}>
                    {isOpenDownwards ? (
                      <Divider
                        marginBlock={NEB_LENGTH.px_000}
                        elevated
                        color={color}
                        intent={intent}
                      />
                    ) : null}
                    <Box
                      tag="button"
                      tagRef={isSelected ? selectedItemRef : undefined}
                      tagAttrs={{
                        onClick: () => {
                          onSelect(node.value)
                          setOpen(false)
                        },
                      }}
                      drawable
                      interactive
                      variant="solid"
                      elevated
                      intent={intent}
                      color={color}
                      cursor="pointer"
                      surface={isSelected ? 'selected' : undefined}
                      inlineSize="100%"
                      borderRadius={NEB_LENGTH.px_000}
                    >
                      <Box
                        display="flex"
                        tagAttrs={{
                          style: {
                            blockSize: CONTROL_SCALE_MAP[size || 'md'].blockSize,
                            paddingInline: CONTROL_SCALE_MAP[size || 'md'].paddingInline,
                          },
                        }}
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Text
                          bold={isSelected}
                          fontSize={CONTROL_SCALE_MAP[size || 'md'].fontSize}
                          lineHeight={CONTROL_SCALE_MAP[size || 'md'].lineHeight}
                          textAlign="center"
                        >
                          {node.label}
                        </Text>
                      </Box>
                    </Box>
                    {!isOpenDownwards ? (
                      <Divider
                        marginBlock={NEB_LENGTH.px_000}
                        elevated
                        color={color}
                        intent={intent}
                      />
                    ) : null}
                  </Box>
                )
              })}
            </Box>
          </Box>
        </Resize>
      </Floating.Content>
    </Floating>
  )
}

export const Breadcrumb = <T extends BreadcrumbTag = 'div'>({
  // HtmlTag
  tag,
  tagAttrs,
  tagRef,
  // own
  color,
  intent = DEFAULT_BREADCRUMB_INTENT,
  tree,
  defaultPath,
  path,
  size = DEFAULT_BREADCRUMB_SIZE,
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
      <Box display="flex" gap="8px" alignItems="center">
        {levels.slice(0, currentPath.length + 1).map((level, index) => {
          return (
            <Fragment key={index}>
              <BreadcrumbLevel
                nodes={level}
                currentValue={currentPath[index]}
                onSelect={value => handleChange(index, value)}
                color={color}
                intent={intent}
                size={size}
                isLast={index !== 0 && index === levels.length - 1}
              />
              {index < levels.length - 1 ? (
                <Icon
                  name="chevron-right"
                  color={color}
                  intent="primary"
                  size={CONTROL_SCALE_MAP[size || 'md'].fontSize}
                />
              ) : null}
            </Fragment>
          )
        })}
      </Box>
    </Box>
  )
}

Breadcrumb.displayName = 'Breadcrumb'
