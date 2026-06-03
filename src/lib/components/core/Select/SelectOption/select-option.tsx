import { CONTROL_SIZE_MAP } from 'lib/constants'
import { Box, SelectOptionProps, Text } from 'lib/index.core'

import { SelectOptionInternalProps } from './types'

export const SelectOption = ({
  children,
  // own
  value,
  // internal
  ...internalProps
}: SelectOptionProps) => {
  const { tagRef, tagAttrs, color, intent, surface, size, variant, isOpeningDownwards, isFirst, isLast } =
    internalProps as SelectOptionInternalProps

  return (
    <Box
      tag="button"
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
      surface={surface ? 'selected' : undefined}
      elevated
      interactive
      cursor="pointer"
      borderRadius="0px"
    >
      <Text fontSize={CONTROL_SIZE_MAP[size || 'md'].fontSize} lineHeight={CONTROL_SIZE_MAP[size || 'md'].lineHeight}>
        {children}
      </Text>
    </Box>
  )
}

SelectOption.displayName = 'Select.Option'
