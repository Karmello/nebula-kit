import { ReactElement, ReactNode, useLayoutEffect, useState } from 'react'
import classNames from 'classnames'

import { AutocompleteOptionProps, IconButton, Input, Text } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { AutocompleteProps } from '../../definitions'
import { CONTROL_SIZE_MAP } from 'lib/definitions'
import { DropdownList, DropdownListProps } from 'lib/components/shared'

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

  const [dropdownListState, setDropdownListState] = useState<DropdownListProps['state']>({
    open: false,
    placement: dropdownPlacement,
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
        setIsOpen(true)
      }}
    >
      <DropdownList.Trigger inlineSize={inlineSize} disabled={disabled} selected={dropdownListState.open}>
        <Input
          tagAttrs={{
            'aria-labelledby': tagAttrs?.['aria-labelledby'],
          }}
          value={inputValue}
          onChange={value => {
            setInputValue(value)
            if (!open) setIsOpen(true)
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
                      onFocus: e => {
                        e.stopPropagation()
                      },
                    }}
                    iconName={dropdownListState.placement?.startsWith('bottom') ? 'chevron-down' : 'chevron-up'}
                    iconAngle={dropdownListState.open ? 180 : 0}
                    // elevated={open}
                    // interactive={!open}
                    onClick={() => {
                      setIsOpen(!open)
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
            blockSize={CONTROL_SIZE_MAP[size].blockSize}
            paddingInline={CONTROL_SIZE_MAP[size].paddingInline}
            elevated={dropdownListState.open}
            selected={isSelected}
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
