import { ActionSurface, Text } from 'lib/components'
import { CONTROL_SIZE_MAP } from 'lib/definitions'

import type { SelectOptionInternalProps, SelectOptionProps } from './types'

export const SelectOption = ({
  // ActionSurface
  children,
  // own
  value,
  // internal
  ...internalProps
}: SelectOptionProps) => {
  const { color, intent, onClick, selected, size, variant } = internalProps as SelectOptionInternalProps

  return (
    <ActionSurface
      variant={variant}
      intent={intent}
      color={color}
      inlineSize="100%"
      blockSize={CONTROL_SIZE_MAP[size].blockSize}
      paddingInline={CONTROL_SIZE_MAP[size].paddingInline}
      selected={selected}
      onClick={onClick}
      elevated
      borderRadius="0px"
    >
      <Text>{children}</Text>
    </ActionSurface>
  )
}

SelectOption.displayName = 'Select.Option'
