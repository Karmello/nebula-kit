import { ReactElement, useMemo, useState } from 'react'
import classNames from 'classnames'

import { DropdownList, Button } from 'lib/components'
import { WithSlots } from 'lib/components/internal'
import { withPrefix } from 'lib/helpers'

import { SelectProvider } from './SelectProvider'
import { SelectProps } from './definitions'

export const Select = ({
  // HtmlTag
  children,
  tagAttrs,
  tagRef,
  // DropdownList
  variant,
  intent,
  size,
  itemBorderIntent,
  scrollAlign,
  inlineSize,
  visibleItemsCount,
  // own
  defaultValue,
  value,
  onChange,
}: SelectProps) => {
  const [internalValue, setInternalValue] = useState<string | undefined>(defaultValue)

  const isControlled = value !== undefined
  const currentValue = isControlled ? value : internalValue

  const handleChange = (value: string) => {
    if (!isControlled) setInternalValue(value)
    onChange?.(value)
  }

  return (
    <WithSlots<'Select.Option'>
      childrenToVerify={children}
      componentName="Select"
      slotsConfig={[{ name: 'Select.Option', required: true, allowMultiple: true }]}
    >
      {({ slotsByName }) => {
        const currentSlotIndex = slotsByName['Select.Option'].findIndex(
          slot => (slot as any).props.value === currentValue
        )

        const currentSlot = slotsByName['Select.Option'][currentSlotIndex] as ReactElement<any>

        const RenderDropdownListInner = ({ open }: { open: boolean }) => {
          const items = useMemo(() => {
            return slotsByName['Select.Option'].map(slot => {
              const Wrapped = () => slot
              Wrapped.displayName = 'DropdownList.Item'
              return <Wrapped />
            })
          }, [])

          return (
            <>
              <DropdownList.Trigger>
                <Button
                  iconName="chevron-down"
                  iconPosition="right"
                  iconAngle={open ? 180 : 0}
                  justifyContent="space-between"
                >
                  {currentSlot?.props.children || '...'}
                </Button>
              </DropdownList.Trigger>
              {items}
            </>
          )
        }

        return (
          <SelectProvider currentValue={currentValue} handleChange={handleChange}>
            <DropdownList
              tagRef={tagRef}
              tagAttrs={{ ...tagAttrs, className: classNames(withPrefix('select'), tagAttrs?.className) }}
              variant={variant}
              intent={intent}
              size={size}
              inlineSize={inlineSize}
              itemBorderIntent={itemBorderIntent}
              scrollToIndex={currentSlotIndex}
              scrollAlign={scrollAlign}
              visibleItemsCount={visibleItemsCount}
            >
              {RenderDropdownListInner}
            </DropdownList>
          </SelectProvider>
        )
      }}
    </WithSlots>
  )
}

Select.displayName = 'Select'
