import { ReactElement, useState, useLayoutEffect, useRef, cloneElement, useEffect } from 'react'

import { FloatingPortal, flip, shift, useClick, useDismiss, useFloating, useInteractions } from '@floating-ui/react'

import { WithSlots } from 'lib/components/shared'
import { CONTROL_SIZE_MAP, DEFAULT_CONTROL_SIZE } from 'lib/definitions'
import { useControlled } from 'lib/hooks'

import {
  DEFAULT_SELECT_INLINE_SIZE,
  DEFAULT_SELECT_INTENT,
  DEFAULT_SELECT_SCROLL_ALIGN,
  DEFAULT_SELECT_VARIANT,
  DEFAULT_SELECT_VISIBLE_ITEMS_COUNT,
} from './constants'

import { SelectProps } from './types'
import { SelectOptionInternalProps, type SelectOptionProps } from './SelectOption'
import { ActionSurface } from '../ActionSurface'
import { Box } from '../Box'
import { Text } from '../Text'
import { WithIcon } from '../WithIcon'
import { Flex } from '../Flex'

export const SelectImpl = ({
  // ActionSurface
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
  scrollAlign = DEFAULT_SELECT_SCROLL_ALIGN,
  visibleItemsCount = DEFAULT_SELECT_VISIBLE_ITEMS_COUNT,
  staticLabel,
  // extra
  optionSlots,
}: SelectProps & { optionSlots: ReactElement<SelectOptionProps & SelectOptionInternalProps>[] }) => {
  const [open, setOpen] = useState(false)

  const [currentValue, setCurrentValue] = useControlled({
    value,
    defaultValue,
    onChange,
  })

  const triggerRef = useRef(null)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const selectedOptionRef = useRef<HTMLButtonElement | null>(null)

  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: 'bottom-start',
    middleware: [flip(), shift()],
  })

  useLayoutEffect(() => {
    refs.setReference(triggerRef.current)
  }, [])

  const click = useClick(context)
  const dismiss = useDismiss(context)

  const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss])

  const triggerWidth = triggerRef.current?.offsetWidth
  const optionBlockSize = Number(CONTROL_SIZE_MAP[size].blockSize.replace('px', ''))
  const menuBlockSize = visibleItemsCount * optionBlockSize

  const handleOnOptionClick = (value: string) => {
    setCurrentValue(value)
    setOpen(false)
  }

  const selectedOptionIndex = optionSlots.findIndex(slot => slot.props.value === currentValue)
  const selectedOptionSlot = optionSlots[selectedOptionIndex]

  return (
    <>
      <ActionSurface
        tagRef={triggerRef as any}
        variant={variant}
        intent={intent}
        color={color}
        inlineSize={inlineSize}
        blockSize={CONTROL_SIZE_MAP[size].blockSize}
        paddingInline={CONTROL_SIZE_MAP[size].paddingInline}
        disabled={disabled}
        selected={open}
        {...(getReferenceProps() as any)}
      >
        <WithIcon iconName="chevron-down" iconPlacement="right" justifyContent="space-between" iconAngle={open ? 180 : 0}>
          <Text>{staticLabel ?? selectedOptionSlot?.props.children ?? 'Select...'}</Text>
        </WithIcon>
      </ActionSurface>
      {open && (
        <FloatingPortal>
          <Box
            tagRef={refs.setFloating as any}
            tagAttrs={{
              style: {
                ...floatingStyles,
                zIndex: 'var(--neb-z-dropdown)',
              },
              ...getFloatingProps(),
            }}
          >
            <Box
              tagRef={menuRef}
              drawable
              variant={variant}
              intent={intent}
              color={color}
              overflowY="auto"
              inlineSize={`${triggerWidth}px`}
              maxBlockSize={`${menuBlockSize}px`}
            >
              <Flex flexDirection="column">
                {optionSlots.map(optionSlot =>
                  cloneElement(optionSlot, {
                    key: optionSlot.props.value,
                    selected: currentValue === optionSlot.props.value,
                    variant,
                    intent,
                    color,
                    size,
                    onClick: () => handleOnOptionClick(optionSlot.props.value),
                  })
                )}
              </Flex>
            </Box>
          </Box>
        </FloatingPortal>
      )}
    </>
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
        const optionSlots = slotsByName['Select.Option'] as ReactElement<SelectOptionProps & SelectOptionInternalProps>[]

        return <SelectImpl {...props} optionSlots={optionSlots} />
      }}
    </WithSlots>
  )
}

Select.displayName = 'Select'
