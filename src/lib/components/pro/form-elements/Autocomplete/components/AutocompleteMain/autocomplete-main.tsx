import { ReactElement, ReactNode, useLayoutEffect, useState } from 'react'
import classNames from 'classnames'

import { AutocompleteOptionProps, Button, DropdownList, Input } from 'lib/components'
import { DEFAULT_RESIZE_DURATION } from 'lib/components/core/motion/Resize'
import { withPrefix } from 'lib/helpers'

import { AutocompleteProps } from '../../definitions'
import { DEFAULT_AUTOCOMPLETE_OPTION_JUSTIFY_CONTENT } from '../../slots'

type AutocompleteMainProps = Omit<AutocompleteProps, 'children' | 'defaultValue' | 'value' | 'onChange'> & {
  items: ReactNode[]
  currentValue?: string
  handleChange: (value: string) => void
}

export const AutocompleteMain = ({
  tagAttrs,
  tagRef,
  // DropdownList
  intent,
  color,
  size,
  itemBorderIntent,
  scrollAlign,
  visibleItemsCount,
  // Box
  inlineSize,
  disabled,
  // own
  onInputChange,
  dropdownPlacement,
  disableFiltering,
  placeholder,
  // extra
  items,
  currentValue,
  handleChange,
}: AutocompleteMainProps) => {
  const [inputValue, setInputValue] = useState<string>('')
  const [filteredItems, setFilteredItems] = useState<AutocompleteMainProps['items']>([])

  const currentItemIndex = items.findIndex(
    item => (item as ReactElement<AutocompleteOptionProps>).props.value === currentValue
  )

  const currentItem = items[currentItemIndex] as ReactElement<AutocompleteOptionProps>

  useLayoutEffect(() => {
    setTimeout(() => {
      setInputValue(currentItem ? currentItem.props.label : '')
    }, DEFAULT_RESIZE_DURATION)
  }, [currentItem])

  useLayoutEffect(() => {
    if (inputValue && !disableFiltering) {
      setFilteredItems(
        items.filter(item => {
          const { label } = (item as ReactElement<AutocompleteOptionProps>).props
          return label.trim().toLowerCase().includes(inputValue.trim().toLowerCase())
        })
      )
    } else {
      setFilteredItems(items)
    }
  }, [inputValue, disableFiltering, items])

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
      itemBorderIntent={itemBorderIntent}
      scrollToIndex={currentItemIndex}
      scrollAlign={scrollAlign}
      visibleItemsCount={visibleItemsCount}
      placement={dropdownPlacement}
      openOnFocus
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
                  onInputChange?.(value)
                }}
                placeholder={placeholder}
                size={size}
                variant="solid"
                intent={intent}
                color={color}
                disabled={disabled}
                endAffix={props => (
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
                  />
                )}
              />
            </DropdownList.Trigger>
            {filteredItems.length ? (
              filteredItems.map((slot, index) => {
                const slotProps = (slot as ReactElement<AutocompleteOptionProps>).props
                return (
                  <DropdownList.Item
                    key={index}
                    {...slotProps}
                    tagAttrs={{
                      ...slotProps.tagAttrs,
                      onClick: () => {
                        handleChange(slotProps.value)
                        setTimeout(() => {
                          setInputValue(slotProps.label)
                        }, DEFAULT_RESIZE_DURATION)
                      },
                    }}
                    bold={slotProps.value === currentValue}
                    justifyContent={slotProps.justifyContent || DEFAULT_AUTOCOMPLETE_OPTION_JUSTIFY_CONTENT}
                  >
                    {slot}
                  </DropdownList.Item>
                )
              })
            ) : (
              <DropdownList.Item>No options</DropdownList.Item>
            )}
          </>
        )
      }}
    </DropdownList>
  )
}
