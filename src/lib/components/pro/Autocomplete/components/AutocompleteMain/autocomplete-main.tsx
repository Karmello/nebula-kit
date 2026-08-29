import { ReactElement, ReactNode, useEffect, useLayoutEffect, useRef, useState } from 'react'

import { Box } from 'lib/components/core/Box'
import { Divider } from 'lib/components/core/Divider'
import { IconButton } from 'lib/components/core/IconButton'
import { Input } from 'lib/components/core/Input'
import { Resize } from 'lib/components/core/Resize'
import { Text } from 'lib/components/core/Text'
import { Floating, FloatingProps } from 'lib/components/pro/Floating'
import { CONTROL_SCALE_MAP, NEB_LENGTH } from 'lib/constants'

import { resolveAutocompleteValues } from '../../helpers'
import { AutocompleteOptionProps } from '../../slots/AutocompleteOption/types'
import { AutocompleteProps } from '../../types'

type AutocompleteMainProps = Omit<
  AutocompleteProps,
  'children' | 'defaultValue' | 'value' | 'onChange'
> & {
  items: ReactNode[]
  currentValue?: string
  handleChange: (value: string) => void
}

export const AutocompleteMain = ({
  tagRef,
  // own
  color,
  size,
  intent,
  visibleItemsCount,
  noOptionsLabel,
  // Box
  inlineSize,
  disabled,
  onInputChange,
  disableFiltering,
  debounceDelay,
  placeholder,
  showToggle,
  // extra
  items,
  currentValue,
  handleChange,
}: AutocompleteMainProps) => {
  const [inputValue, setInputValue] = useState<string>('')
  const [queryValue, setQueryValue] = useState<string>('')
  const [filteredItems, setFilteredItems] = useState<AutocompleteMainProps['items']>([])

  const [open, setOpen] = useState<boolean>(false)
  const [visible, setVisible] = useState<boolean>(false)
  const [placement, setPlacement] = useState<FloatingProps['placement']>('bottom-start')

  const internalRef = useRef<HTMLDivElement | null>(null)
  const triggerRef = tagRef || internalRef

  const triggerWidth = triggerRef.current?.offsetWidth
  const isOpenDownwards = placement?.startsWith('bottom')
  const optionBlockSize = Number(CONTROL_SCALE_MAP[size || 'md'].blockSize.replace('px', ''))

  const { menuBlockSize } = resolveAutocompleteValues({
    visibleItemsCount: visibleItemsCount !== undefined ? visibleItemsCount : 5,
    optionBlockSize,
    itemsCount: filteredItems.length || (noOptionsLabel ? 1 : 0),
  })

  useLayoutEffect(() => {
    if (queryValue && !disableFiltering) {
      setFilteredItems(
        items.filter(item => {
          const { label } = (item as ReactElement<AutocompleteOptionProps>).props
          return label.trim().toLowerCase().includes(queryValue.trim().toLowerCase())
        })
      )
    } else {
      setFilteredItems(items)
    }
  }, [queryValue, disableFiltering, items])

  const currentItem = items.find(
    item => (item as ReactElement<AutocompleteOptionProps>).props.value === currentValue
  ) as ReactElement<AutocompleteOptionProps>

  useLayoutEffect(() => {
    if (currentValue === undefined) return
    const value = currentItem ? currentItem.props.label : (currentValue ?? '')
    setInputValue(value)
    setQueryValue(value)
  }, [currentValue])

  useLayoutEffect(() => {
    if (!open) return

    if (!debounceDelay) {
      setQueryValue(inputValue)
      return
    }

    const id = setTimeout(() => {
      setQueryValue(inputValue)
    }, debounceDelay)

    return () => clearTimeout(id)
  }, [inputValue, debounceDelay, open])

  useLayoutEffect(() => {
    if (!open) {
      setQueryValue(inputValue)
    }
  }, [open])

  useEffect(() => {
    requestAnimationFrame(() => {
      setVisible(open)
    })
  }, [open])

  return (
    <Floating
      mode="click"
      open={open}
      onOpenChange={setOpen}
      placement={placement}
      onPlacementChange={setPlacement}
      disabled={disabled}
    >
      <Floating.Trigger display="block">
        <Box
          tagRef={triggerRef}
          display="flex"
          inlineSize={inlineSize}
          disabled={disabled}
          selected={open}
        >
          <Box
            flex="1"
            tagAttrs={{
              onClick: (e: { stopPropagation: () => void }) => {
                e.stopPropagation()
              },
            }}
          >
            <Input
              tagAttrs={{
                style: { borderTopRightRadius: 0, borderBottomRightRadius: 0 },
              }}
              value={inputValue}
              onChange={value => {
                setInputValue(value)
                if (!open) setOpen(true)
                onInputChange?.(value)
              }}
              onFocus={() => setOpen(true)}
              placeholder={placeholder}
              scale={size}
              variant="solid"
              intent={intent}
              color={color}
              disabled={disabled}
            />
          </Box>
          {showToggle ? (
            <IconButton
              tagAttrs={{
                onFocus: (e: { stopPropagation: () => void }) => {
                  e.stopPropagation()
                },
                style: {
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                },
              }}
              iconName={isOpenDownwards ? 'chevron-down' : 'chevron-up'}
              surface={open ? 'raised' : undefined}
              onClick={() => {
                setOpen(prev => !prev)
              }}
              scale={size}
            />
          ) : null}
        </Box>
      </Floating.Trigger>
      <Floating.Content>
        <Resize visible={visible} property="blockSize" easing={visible ? 'ease-out' : undefined}>
          <Box
            drawable
            variant="solid"
            intent={intent}
            color={color}
            inlineSize={`${triggerWidth}px`}
            maxBlockSize={`${menuBlockSize}px`}
            overflowY="auto"
            borderTopLeftRadius={isOpenDownwards ? '0px' : undefined}
            borderTopRightRadius={isOpenDownwards ? '0px' : undefined}
            borderBottomLeftRadius={!isOpenDownwards ? '0px' : undefined}
            borderBottomRightRadius={!isOpenDownwards ? '0px' : undefined}
          >
            <Box intent={intent} color={color} surface="raised">
              {filteredItems.length === 0 && noOptionsLabel ? (
                <Box
                  display="flex"
                  alignItems="center"
                  tagAttrs={{
                    style: {
                      blockSize: CONTROL_SCALE_MAP[size || 'md'].blockSize,
                      paddingInline: CONTROL_SCALE_MAP[size || 'md'].paddingInline,
                    },
                  }}
                >
                  <Text>{noOptionsLabel}</Text>
                </Box>
              ) : (
                filteredItems.map((slot, key) => {
                  const slotProps = (slot as ReactElement<AutocompleteOptionProps>).props
                  const isSelected = slotProps.value === currentValue

                  return (
                    <Box key={key}>
                      {isOpenDownwards ? (
                        <Divider
                          marginBlock={NEB_LENGTH.px_000}
                          surface="raised"
                          color={color}
                          intent={intent}
                        />
                      ) : null}
                      <Box
                        tag="button"
                        tagAttrs={{
                          onClick: () => {
                            setInputValue(slotProps.label)
                            setQueryValue(slotProps.label)
                            handleChange(slotProps.value)
                            setOpen(false)
                          },
                        }}
                        drawable
                        interactive
                        variant="solid"
                        surface="raised"
                        intent={intent}
                        color={color}
                        cursor="pointer"
                        selected={isSelected}
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
                        >
                          <Text bold={isSelected}>{slot}</Text>
                        </Box>
                      </Box>
                      {!isOpenDownwards ? (
                        <Divider
                          marginBlock={NEB_LENGTH.px_000}
                          surface="raised"
                          color={color}
                          intent={intent}
                        />
                      ) : null}
                    </Box>
                  )
                })
              )}
            </Box>
          </Box>
        </Resize>
      </Floating.Content>
    </Floating>
  )
}
