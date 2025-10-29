import { Button, DropdownList } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { SelectProps } from './definitions'

export const Select = ({
  // Box
  inlineSize,
  // Button
  variant,
  intent,
  size,
  // own
  options,
  value,
  onChange,
}: SelectProps) => {
  return (
    <DropdownList
      tagAttrs={{ className: withPrefix('select') }}
      size={size}
      inlineSize={inlineSize}
      itemVariant={variant}
      itemIntent={intent}
    >
      {({ open }) => (
        <>
          <DropdownList.Trigger>
            <Button
              tagAttrs={{
                style: {
                  inlineSize: '100%',
                  borderBottomLeftRadius: open ? 0 : undefined,
                  borderBottomRightRadius: open ? 0 : undefined,
                },
              }}
              iconName="chevron-down"
              iconPosition="right"
              iconAngle={open ? 180 : 0}
              size={size}
              variant={variant}
              intent={intent}
              justifyContent="space-between"
            >
              {options.find(o => o.value === value)?.label}
            </Button>
          </DropdownList.Trigger>
          {options.map(({ value, label }) => (
            <DropdownList.Item
              key={value}
              tagAttrs={{
                onClick: () => onChange(value),
              }}
              justifyContent="flex-start"
            >
              {label}
            </DropdownList.Item>
          ))}
        </>
      )}
    </DropdownList>
  )
}

Select.displayName = 'Select'
