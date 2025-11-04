import { DropdownList } from 'lib/components'

import { DEFAULT_SELECT_JUSTIFY_CONTENT, SelectOptionProps } from './definitions'
import { useSelectContext } from '../../SelectProvider'

export const SelectOption = ({
  // HtmlTag
  children,
  tag,
  tagAttrs,
  tagRef,
  // Button
  disabled,
  iconAngle,
  iconName,
  iconPosition,
  justifyContent = DEFAULT_SELECT_JUSTIFY_CONTENT,
  labelIntent,
  // own
  value,
}: SelectOptionProps) => {
  const { currentValue, handleChange } = useSelectContext()

  return (
    <DropdownList.Item
      tag={tag}
      tagAttrs={{
        ...tagAttrs,
        onClick: () => handleChange(value),
      }}
      tagRef={tagRef}
      bold={value === currentValue}
      disabled={disabled}
      iconAngle={iconAngle}
      iconName={iconName}
      iconPosition={iconPosition}
      justifyContent={justifyContent}
      labelIntent={labelIntent}
    >
      {children}
    </DropdownList.Item>
  )
}

SelectOption.displayName = 'DropdownList.Item'
