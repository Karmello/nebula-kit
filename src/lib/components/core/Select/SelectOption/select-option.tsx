import { ActionSurface, Text, Divider } from 'lib/components'
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
  const { tagRef, tagAttrs, color, intent, selected, size, variant, isOpeningUpwards, isFirst } =
    internalProps as SelectOptionInternalProps

  return (
    <>
      {isOpeningUpwards && (variant !== 'outline' || !isFirst) ? (
        <Divider intent={variant === 'outline' ? 'neutral' : intent} color={color} elevated marginBlock="0px" />
      ) : null}
      <ActionSurface
        tagRef={tagRef}
        tagAttrs={{
          tabIndex: -1,
          ...tagAttrs,
          style: { ...tagAttrs?.style, border: '0px' },
        }}
        variant={variant}
        intent={intent}
        color={color}
        inlineSize="100%"
        blockSize={CONTROL_SIZE_MAP[size || 'md'].blockSize}
        paddingInline={CONTROL_SIZE_MAP[size || 'md'].paddingInline}
        selected={selected}
        elevated
        borderRadius="0px"
      >
        <Text fontSize={CONTROL_SIZE_MAP[size || 'md'].fontSize} lineHeight={CONTROL_SIZE_MAP[size || 'md'].lineHeight}>
          {children}
        </Text>
      </ActionSurface>
      {!isOpeningUpwards ? <Divider intent={intent} color={color} elevated={variant === 'solid'} marginBlock="0px" /> : null}
    </>
  )
}

SelectOption.displayName = 'Select.Option'
