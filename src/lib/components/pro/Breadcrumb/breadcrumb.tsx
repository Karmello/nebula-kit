import { useCallback, useEffect, useRef, useState } from 'react'
import { Fragment } from 'react/jsx-runtime'

import { Box } from 'lib/components/core/Box'
import { Icon } from 'lib/components/core/Icon'
import { Resize } from 'lib/components/core/Resize'
import { Text } from 'lib/components/core/Text'
import { Floating, type FloatingProps } from 'lib/components/pro/Floating'
import { CONTROL_SCALE_MAP, NEB_LENGTH } from 'lib/constants'
import type { TShirtSize } from 'lib/types'

import {
  BREADCRUMB_VARIANT_MAP,
  DEFAULT_BREADCRUMB_INTENT,
  DEFAULT_BREADCRUMB_SCALE,
  DEFAULT_BREADCRUMB_VARIANT,
  DEFAULT_BREADCRUMB_VISIBLE_ITEMS_COUNT,
} from './constants'
import { convertTreeToLevels } from './helpers'
import {
  type BreadcrumbNode,
  type BreadcrumbProps,
  type BreadcrumbTag,
  type BreadcrumbVariant,
} from './types'

type BreadcrumbLevelProps = {
  nodes: BreadcrumbNode[]
  currentValue?: string
  onSelect: (value: string) => void
  color: BreadcrumbProps['color']
  intent: BreadcrumbProps['intent']
  scale: TShirtSize
  variant: BreadcrumbVariant
  isLast: boolean
}

const BreadcrumbLevel = ({
  nodes,
  currentValue,
  onSelect,
  color,
  intent,
  scale,
  variant,
  isLast,
}: BreadcrumbLevelProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const [visible, setVisible] = useState<boolean>(false)
  const [placement, setPlacement] = useState<FloatingProps['placement']>(
    isLast ? 'bottom-end' : 'bottom-start'
  )

  const selectedItemRef = useRef<HTMLButtonElement | null>(null)

  const isOpenDownwards = placement?.startsWith('bottom')
  const optionBlockSize = parseInt(CONTROL_SCALE_MAP[scale].blockSize)

  const finalVisibleItemsCount = Math.min(nodes.length, DEFAULT_BREADCRUMB_VISIBLE_ITEMS_COUNT)
  const menuBlockSize = finalVisibleItemsCount * optionBlockSize

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
          intent="primary"
          bgRole={open ? 'selection' : undefined}
          ripple={!open}
          blockSize={CONTROL_SCALE_MAP[scale].blockSize}
          paddingInline={CONTROL_SCALE_MAP[scale].paddingInline}
        >
          <Text
            bold
            intent="primary"
            color={color}
            fontSize={CONTROL_SCALE_MAP[scale].fontSize}
            lineHeight={CONTROL_SCALE_MAP[scale].lineHeight}
            noWrap
          >
            {currentLabel || 'Select ...'}
          </Text>
        </Box>
      </Floating.Trigger>
      <Floating.Content>
        <Resize visible={visible} property="blockSize" easing={visible ? 'ease-out' : undefined}>
          <Box drawable bgMode="filled" intent="neutral" color={color}>
            <Box
              drawable
              intent={intent}
              color={color}
              bgMode="tinted"
              borderMode={BREADCRUMB_VARIANT_MAP[variant].content.borderMode}
              surfaceDepth="raised"
              minInlineSize="auto"
              maxBlockSize={`${menuBlockSize}px`}
              overflowY="auto"
              overflowX="hidden"
              borderTopLeftRadius={isOpenDownwards ? NEB_LENGTH.px_000 : undefined}
              borderTopRightRadius={isOpenDownwards ? NEB_LENGTH.px_000 : undefined}
              borderBottomLeftRadius={!isOpenDownwards ? NEB_LENGTH.px_000 : undefined}
              borderBottomRightRadius={!isOpenDownwards ? NEB_LENGTH.px_000 : undefined}
              borderTopWidth={isOpenDownwards ? NEB_LENGTH.px_000 : undefined}
              borderBottomWidth={!isOpenDownwards ? NEB_LENGTH.px_000 : undefined}
            >
              <Box
                display="inline-flex"
                flexDirection="column"
                drawable
                bgMode="filled"
                intent="neutral"
                color={color}
                inlineSize="100%"
                borderRadius={NEB_LENGTH.px_000}
              >
                {nodes.map((node, key) => {
                  const isSelected = node.value === currentValue

                  return (
                    <Box
                      key={node.value}
                      tag="button"
                      tagRef={isSelected ? selectedItemRef : undefined}
                      onClick={() => {
                        onSelect(node.value)
                        setOpen(false)
                      }}
                      tagAttrs={{
                        style: { backgroundClip: 'padding-box' },
                      }}
                      cursor="pointer"
                      interactive
                      inlineSize="100%"
                      blockSize={
                        key === 0
                          ? !BREADCRUMB_VARIANT_MAP[variant].removeFirstTopBorder
                            ? optionBlockSize + 'px'
                            : optionBlockSize - parseInt(NEB_LENGTH.px_002) + 'px'
                          : `${optionBlockSize}px`
                      }
                      intent={intent}
                      color={color}
                      bgMode={BREADCRUMB_VARIANT_MAP[variant].item.bgMode}
                      borderMode={BREADCRUMB_VARIANT_MAP[variant].item.borderMode}
                      borderRole="divider"
                      surfaceDepth="raised"
                      bgRole={isSelected ? 'selection' : undefined}
                      textMode={BREADCRUMB_VARIANT_MAP[variant].item.textMode}
                      paddingInline={CONTROL_SCALE_MAP[scale].paddingInline}
                      borderWidth={NEB_LENGTH.px_000}
                      borderTopWidth={
                        BREADCRUMB_VARIANT_MAP[variant].removeFirstTopBorder && key === 0
                          ? NEB_LENGTH.px_000
                          : NEB_LENGTH.px_002
                      }
                      borderRadius={NEB_LENGTH.px_000}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Text
                        bold={isSelected}
                        fontSize={CONTROL_SCALE_MAP[scale].fontSize}
                        lineHeight={CONTROL_SCALE_MAP[scale].lineHeight}
                        textAlign="center"
                        noWrap
                      >
                        {node.label}
                      </Text>
                    </Box>
                  )
                })}
              </Box>
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
  scale = DEFAULT_BREADCRUMB_SCALE,
  variant = DEFAULT_BREADCRUMB_VARIANT,
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
                scale={scale}
                variant={variant}
                isLast={index !== 0 && index === levels.length - 1}
              />
              {index < levels.length - 1 ? (
                <Icon
                  name="chevron-right"
                  color={color}
                  intent="primary"
                  size={CONTROL_SCALE_MAP[scale].fontSize}
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
