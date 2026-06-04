import { ReactElement, ReactNode, useLayoutEffect, useState } from 'react'
import classNames from 'classnames'

import { DropdownList, DropdownListState } from 'lib/components/shared'
import { CONTROL_SIZE_MAP } from 'lib/constants'
import { withPrefix } from 'lib/helpers'
import { IconButton, Input, Text } from 'lib/index.core'
import { AutocompleteOptionProps, AutocompleteProps } from 'lib/index.pro'

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
  const [inputValue, setInputValue] = useState<string>('')
  const [queryValue, setQueryValue] = useState<string>('')
  const [filteredItems, setFilteredItems] = useState<AutocompleteMainProps['items']>([])

  const [dropdownListState, setDropdownListState] = useState<DropdownListState>({
    open: false,
    placement: dropdownPlacement || 'bottom-center',
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

  const currentItemIndex = items.findIndex(item => (item as ReactElement<AutocompleteOptionProps>).props.value === currentValue)

  const currentItem = items[currentItemIndex] as ReactElement<AutocompleteOptionProps>

  useLayoutEffect(() => {
    if (currentValue === undefined) return
    const value = currentItem ? currentItem.props.label : (currentValue ?? '')
    setInputValue(value)
    setQueryValue(value)
  }, [currentValue])

  useLayoutEffect(() => {
    if (!dropdownListState?.open) return

    if (!debounceDelay) {
      setQueryValue(inputValue)
      return
    }

    const id = setTimeout(() => {
      setQueryValue(inputValue)
    }, debounceDelay)

    return () => clearTimeout(id)
  }, [inputValue, debounceDelay, dropdownListState?.open])

  useLayoutEffect(() => {
    if (!dropdownListState?.open) {
      setQueryValue(inputValue)
    }
  }, [dropdownListState?.open])

  return (
    <DropdownList
      tagRef={tagRef}
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('autocomplete'), tagAttrs?.className),
      }}
      state={dropdownListState}
      onStateChange={setDropdownListState}
      intent={intent}
      color={color}
      itemBlockSize={Number(CONTROL_SIZE_MAP[size || 'md'].blockSize.replace('px', ''))}
      scrollToIndex={currentItemIndex}
      scrollAlign={scrollAlign}
      visibleItemsCount={visibleItemsCount}
      noOptionsLabel={noOptionsLabel}
      disableListAnimation
      placement={dropdownPlacement}
      openOnFocus
      onOpened={() => {
        setDropdownListState(prev => ({ ...prev, open: true }))
      }}
    >
      <DropdownList.Trigger
        tag="div"
        inlineSize={inlineSize}
        disabled={disabled}
        surface={dropdownListState?.open ? 'selected' : undefined}
      >
        <Input
          tagAttrs={{
            'aria-labelledby': tagAttrs?.['aria-labelledby'],
            style: { borderRadius: '0px' },
          }}
          value={inputValue}
          onChange={value => {
            setInputValue(value)
            if (!dropdownListState?.open) setDropdownListState(prev => ({ ...prev, open: true }))
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
                  <IconButton
                    {...props}
                    tagAttrs={{
                      onFocus: (e: { stopPropagation: () => void }) => {
                        e.stopPropagation()
                      },
                    }}
                    iconName={dropdownListState?.placement?.startsWith('bottom') ? 'chevron-down' : 'chevron-up'}
                    elevated={dropdownListState?.open}
                    onClick={() => {
                      setDropdownListState(prev => ({ ...prev, open: !prev.open }))
                    }}
                  />
                )
              : undefined
          }
        />
      </DropdownList.Trigger>
      {filteredItems.map((slot, index) => {
        const slotProps = (slot as ReactElement<AutocompleteOptionProps>).props
        const isSelected = slotProps.value === currentValue

        return (
          <DropdownList.Item
            key={index}
            index={index}
            blockSize={CONTROL_SIZE_MAP[size || 'md'].blockSize}
            paddingInline={CONTROL_SIZE_MAP[size || 'md'].paddingInline}
            elevated={dropdownListState?.open}
            surface={isSelected ? 'selected' : undefined}
            inlineSize="100%"
            onClick={() => {
              setInputValue(slotProps.label)
              setQueryValue(slotProps.label)
              handleChange(slotProps.value)
            }}
          >
            <Text bold={isSelected}>{slot}</Text>
          </DropdownList.Item>
        )
      })}
    </DropdownList>
  )
}
