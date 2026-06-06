import { ReactElement, useEffect, useLayoutEffect, useRef, useState } from 'react'

import { WithSlots } from 'lib/components/shared'
import { CONTROL_SIZE_MAP, DEFAULT_CONTROL_SIZE } from 'lib/constants'
import { useControlled } from 'lib/hooks'
import { Box, Flex, Icon, SelectOptionProps, SelectProps, Text } from 'lib/index.core'
import { ActionGroup, Floating, FloatingProps } from 'lib/index.pro'

import {
  DEFAULT_SELECT_INLINE_SIZE,
  DEFAULT_SELECT_INTENT,
  DEFAULT_SELECT_VARIANT,
  DEFAULT_SELECT_VISIBLE_ITEMS_COUNT,
} from './constants'
import { resolveSelectValues } from './helpers'

export const SelectImpl = ({
  variant = DEFAULT_SELECT_VARIANT,
  intent = DEFAULT_SELECT_INTENT,
  color,
  inlineSize = DEFAULT_SELECT_INLINE_SIZE,
  disabled,
  // own
  defaultValue,
  value,
  onChange,
  size = DEFAULT_CONTROL_SIZE,
  visibleItemsCount = DEFAULT_SELECT_VISIBLE_ITEMS_COUNT,
  staticLabel,
  // extra
  optionSlots,
}: SelectProps & { optionSlots: ReactElement<SelectOptionProps>[] }) => {
  const [open, setOpen] = useState<boolean>(false)
  const [placement, setPlacement] = useState<FloatingProps['placement']>('bottom-start')

  const [currentValue, setCurrentValue] = useControlled({ value, defaultValue, onChange })
  const triggerRef = useRef<HTMLButtonElement | null>(null)

  const triggerWidth = triggerRef.current?.offsetWidth
  const currentLabel = optionSlots.find(slot => slot.props.value === currentValue)?.props.children
  const isOpenDownwards = placement.startsWith('bottom')
  const optionBlockSize = Number(CONTROL_SIZE_MAP[size].blockSize.replace('px', ''))

  const { menuBlockSize } = resolveSelectValues({
    visibleItemsCount: visibleItemsCount !== undefined ? visibleItemsCount : 5,
    optionBlockSize,
    itemsCount: optionSlots.length,
  })

  return (
    <Floating mode="click" open={open} onOpenChange={setOpen} placement={placement} onPlacementChange={setPlacement}>
      <Floating.Trigger>
        <Box
          tag="button"
          tagRef={triggerRef}
          variant={variant}
          intent={intent}
          color={color}
          inlineSize={inlineSize}
          blockSize={CONTROL_SIZE_MAP[size].blockSize}
          paddingInline={CONTROL_SIZE_MAP[size].paddingInline}
          disabled={disabled}
          surface={open ? 'selected' : undefined}
          cursor="pointer"
          ripple={!open}
          interactive
          borderBottomLeftRadius={open && isOpenDownwards ? '0px' : undefined}
          borderBottomRightRadius={open && isOpenDownwards ? '0px' : undefined}
          borderTopLeftRadius={open && !isOpenDownwards ? '0px' : undefined}
          borderTopRightRadius={open && !isOpenDownwards ? '0px' : undefined}
        >
          <Flex tag="span" alignItems="center" justifyContent="space-between" columnGap="xs">
            <Text fontSize={CONTROL_SIZE_MAP[size].fontSize} lineHeight={CONTROL_SIZE_MAP[size].lineHeight} truncate>
              {staticLabel ?? currentLabel ?? 'Select...'}
            </Text>
            <Icon name="chevron-down" size={CONTROL_SIZE_MAP[size].iconSize} />
          </Flex>
        </Box>
      </Floating.Trigger>
      <Floating.Content>
        <Box
          drawable
          variant="solid"
          intent={intent}
          color={color}
          inlineSize={`${triggerWidth}px`}
          maxBlockSize={`${menuBlockSize}px`}
          overflowY="auto"
          borderTopLeftRadius={isOpenDownwards ? '0px' : undefined}
          borderTopRightRadius={isOpenDownwards ? '0px' : undefined}
          borderBottomLeftRadius={!isOpenDownwards ? '0px' : undefined}
          borderBottomRightRadius={!isOpenDownwards ? '0px' : undefined}
        >
          <ActionGroup direction="column" attached={isOpenDownwards ? 'start' : 'end'} intent={intent} color={color} elevated>
            {optionSlots.map((slot, key) => (
              <ActionGroup.Item
                key={key}
                selected={currentValue === slot.props.value}
                onClick={() => {
                  setCurrentValue(slot.props.value)
                  setOpen(false)
                }}
              >
                <Flex
                  alignItems="center"
                  alignContent="stretch"
                  blockSize={CONTROL_SIZE_MAP[size].blockSize}
                  paddingInline={CONTROL_SIZE_MAP[size].paddingInline}
                >
                  <Text fontSize={CONTROL_SIZE_MAP[size].fontSize} lineHeight={CONTROL_SIZE_MAP[size].lineHeight}>
                    {slot}
                  </Text>
                </Flex>
              </ActionGroup.Item>
            ))}
          </ActionGroup>
        </Box>
      </Floating.Content>
    </Floating>
  )
}

export const Select = (props: SelectProps) => {
  return (
    <WithSlots<'Select.Option'>
      childrenToVerify={props.children}
      componentName="Select"
      slotsConfig={[{ name: 'Select.Option', required: true, allowMultiple: true }]}
    >
      {({ slotsByName }) => {
        const optionSlots = slotsByName['Select.Option'] as ReactElement<SelectOptionProps>[]
        return <SelectImpl {...props} optionSlots={optionSlots} />
      }}
    </WithSlots>
  )
}

Select.displayName = 'Select'
