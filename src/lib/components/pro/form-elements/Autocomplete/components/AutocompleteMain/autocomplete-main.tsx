import { ReactElement, ReactNode, useLayoutEffect, useState } from 'react'
import classNames from 'classnames'

import { AutocompleteOptionProps, Button, DropdownList, Input } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { AutocompleteProps } from '../../definitions'
import { DEFAULT_AUTOCOMPLETE_OPTION_ALIGN } from '../../slots'

type AutocompleteMainProps = Omit<AutocompleteProps, 'children' | 'defaultValue' | 'value' | 'onChange'> & {
  items: ReactNode[]
  currentValue?: string
  handleChange: (value: string) => void
}

export const AutocompleteMain = ({
  tagAttrs,
  tagRef,
  // DropdownList
  color,
  size,
  intent,
  scrollAlign,
  visibleItemsCount,
  noOptionsLabel,
  // Box
  inlineSize,
  disabled,
  // own
  onInputChange,
  dropdownPlacement,
  disableFiltering,
  debounceDelay,
  placeholder,
  showToggle,
  // extra
  items,
  currentValue,
  handleChange,
}: AutocompleteMainProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState<string>('')
  const [queryValue, setQueryValue] = useState<string>('')
  const [filteredItems, setFilteredItems] = useState<AutocompleteMainProps['items']>([])

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

  const currentItemIndex = items.findIndex(item => (item as ReactElement<AutocompleteOptionProps>).props.value === currentValue)

  const currentItem = items[currentItemIndex] as ReactElement<AutocompleteOptionProps>

  useLayoutEffect(() => {
    if (currentValue === undefined) return
    const value = currentItem ? currentItem.props.label : (currentValue ?? '')
    setInputValue(value)
    setQueryValue(value)
  }, [currentValue])

  useLayoutEffect(() => {
    if (!isOpen) return

    if (!debounceDelay) {
      setQueryValue(inputValue)
      return
    }

    const id = setTimeout(() => {
      setQueryValue(inputValue)
    }, debounceDelay)

    return () => clearTimeout(id)
  }, [inputValue, debounceDelay, isOpen])

  useLayoutEffect(() => {
    if (!isOpen) {
      setQueryValue(inputValue)
    }
  }, [isOpen])

  return (
    <DropdownList
      tagRef={tagRef}
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('autocomplete'), tagAttrs?.className),
      }}
      intent={intent}
      color={color}
      size={size}
      scrollToIndex={currentItemIndex}
      scrollAlign={scrollAlign}
      visibleItemsCount={visibleItemsCount}
      noOptionsLabel={noOptionsLabel}
      disableListAnimation
      placement={dropdownPlacement}
      openOnFocus
      onOpened={() => {
        setIsOpen(true)
      }}
    >
      {({ open, setOpen, resolvedPlacement }) => {
        const opensUpDownwards = ['bottom-start', 'bottom-end', undefined].includes(resolvedPlacement)

        return (
          <>
            <DropdownList.Trigger inlineSize={inlineSize} disabled={disabled}>
              <Input
                tagAttrs={{
                  'aria-labelledby': tagAttrs?.['aria-labelledby'],
                  style: opensUpDownwards
                    ? {
                        borderBottomLeftRadius: open ? 0 : undefined,
                        borderBottomRightRadius: open ? 0 : undefined,
                      }
                    : {
                        borderTopLeftRadius: open ? 0 : undefined,
                        borderTopRightRadius: open ? 0 : undefined,
                      },
                }}
                value={inputValue}
                onChange={value => {
                  setInputValue(value)
                  if (!open) setOpen(true)
                  onInputChange?.(value)
                }}
                placeholder={placeholder}
                size={size}
                variant="solid"
                intent={intent}
                color={color}
                disabled={disabled}
                endAffix={
                  showToggle
                    ? props => (
                        <Button
                          {...props}
                          tagAttrs={{
                            onClick: () => {
                              setOpen(!open)
                            },
                            onFocus: e => {
                              e.stopPropagation()
                            },
                            style: opensUpDownwards
                              ? { borderBottomRightRadius: open ? 0 : undefined }
                              : { borderTopRightRadius: open ? 0 : undefined },
                          }}
                          iconName={opensUpDownwards ? 'chevron-down' : 'chevron-up'}
                          iconAngle={open ? (opensUpDownwards ? 180 : -180) : 0}
                          elevated={open}
                          interactive={!open}
                        />
                      )
                    : undefined
                }
              />
            </DropdownList.Trigger>
            {filteredItems.map((slot, index) => {
              const slotProps = (slot as ReactElement<AutocompleteOptionProps>).props
              const selected = slotProps.value === currentValue

              return (
                <DropdownList.Item
                  key={index}
                  {...slotProps}
                  tagAttrs={{
                    ...slotProps.tagAttrs,
                    onClick: () => {
                      setInputValue(slotProps.label)
                      setQueryValue(slotProps.label)
                      handleChange(slotProps.value)
                    },
                  }}
                  bold={selected}
                  selected={selected}
                  align={slotProps.align || DEFAULT_AUTOCOMPLETE_OPTION_ALIGN}
                  iconName={slotProps.iconName ? slotProps.iconName : selected ? 'check' : undefined}
                  iconPlacement="right"
                >
                  {slot}
                </DropdownList.Item>
              )
            })}
          </>
        )
      }}
    </DropdownList>
  )
}
