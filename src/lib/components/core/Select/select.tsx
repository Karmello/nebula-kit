import { ReactElement, useState, useLayoutEffect, useRef, cloneElement, RefObject, createRef, useEffect, Ref } from 'react'

import {
  FloatingPortal,
  flip,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
} from '@floating-ui/react'

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

import { resolveBlockSizes } from './helpers'
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
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const [currentValue, setCurrentValue] = useControlled({
    value,
    defaultValue,
    onChange,
  })

  useEffect(() => {
    if (!open) triggerRef.current?.focus()
  }, [open])

  const triggerRef = useRef<HTMLDivElement | null>(null)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const listRef = useRef<Array<HTMLElement | null>>([])

  useEffect(() => {
    listRef.current = itemRefs.current.map(ref => ref.current)
  })

  const itemRefs = useRef<RefObject<HTMLButtonElement>[]>(optionSlots.map(() => createRef<HTMLButtonElement>()))

  const { refs, floatingStyles, context, placement } = useFloating({
    open,
    onOpenChange: setOpen,
    placement: 'bottom-start',
    middleware: [flip(), shift()],
  })

  useLayoutEffect(() => {
    refs.setReference(triggerRef.current)
  }, [])

  const click = useClick(context)
  const dismiss = useDismiss(context, { outsidePress: true, escapeKey: true })

  const triggerWidth = triggerRef.current?.offsetWidth
  const optionBlockSize = Number(CONTROL_SIZE_MAP[size].blockSize.replace('px', ''))

  const { menuBlockSize, menuScrollingBlockSize } = resolveBlockSizes({
    visibleItemsCount,
    optionBlockSize,
    itemsCount: optionSlots.length,
  })

  const handleOnOptionClick = (value: string) => {
    setCurrentValue(value)
    setOpen(false)
  }

  const selectedOptionIndex = optionSlots.findIndex(slot => slot.props.value === currentValue)
  const selectedOptionSlot = optionSlots[selectedOptionIndex]

  const listNavigation = useListNavigation(context, {
    listRef,
    activeIndex,
    selectedIndex: selectedOptionIndex,
    onNavigate: setActiveIndex,
    loop: true,
    virtual: false,
    focusItemOnOpen: true,
  })

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([click, dismiss, listNavigation])

  const openDownwards = placement.includes('bottom')

  return (
    <>
      <ActionSurface
        tagRef={triggerRef}
        variant={variant}
        intent={intent}
        color={color}
        inlineSize={inlineSize}
        blockSize={CONTROL_SIZE_MAP[size].blockSize}
        paddingInline={CONTROL_SIZE_MAP[size].paddingInline}
        disabled={disabled}
        selected={open}
        borderBottomLeftRadius={open && openDownwards ? '0px' : undefined}
        borderBottomRightRadius={open && openDownwards ? '0px' : undefined}
        borderTopLeftRadius={open && !openDownwards ? '0px' : undefined}
        borderTopRightRadius={open && !openDownwards ? '0px' : undefined}
        {...getReferenceProps()}
      >
        <WithIcon
          iconName="chevron-down"
          iconPlacement="right"
          iconSize={CONTROL_SIZE_MAP[size].iconSize}
          justifyContent="space-between"
          iconAngle={open ? 180 : 0}
        >
          <Text fontSize={CONTROL_SIZE_MAP[size].fontSize} lineHeight={CONTROL_SIZE_MAP[size].lineHeight}>
            {staticLabel ?? selectedOptionSlot?.props.children ?? 'Select...'}
          </Text>
        </WithIcon>
      </ActionSurface>
      {open && (
        <FloatingPortal>
          <Box
            tagRef={refs.setFloating as unknown as RefObject<HTMLDivElement>}
            tagAttrs={{
              style: {
                ...floatingStyles,
                zIndex: 'var(--neb-z-dropdown)',
              },
              ...getFloatingProps({
                onKeyDown: e => {
                  if (e.key === 'Tab') setOpen(false)
                },
              }),
            }}
          >
            <Box
              tagRef={menuRef}
              drawable
              variant={variant}
              intent={intent}
              color={color}
              elevated
              overflowY="auto"
              inlineSize={`${triggerWidth}px`}
              blockSize={`${menuBlockSize}px`}
              borderTopWidth="0px"
              borderTopLeftRadius={openDownwards ? '0px' : undefined}
              borderTopRightRadius={openDownwards ? '0px' : undefined}
              borderBottomLeftRadius={!openDownwards ? '0px' : undefined}
              borderBottomRightRadius={!openDownwards ? '0px' : undefined}
            >
              <Box drawable variant="solid" intent="neutral" blockSize={`${menuScrollingBlockSize}px`}>
                <Flex flexDirection="column">
                  {optionSlots.map((optionSlot, index) =>
                    cloneElement(optionSlot, {
                      key: optionSlot.props.value,
                      tagRef: itemRefs.current[index],
                      tagAttrs: getItemProps({
                        onClick: () => handleOnOptionClick(optionSlot.props.value),
                      }),
                      selected: currentValue === optionSlot.props.value,
                      variant,
                      intent,
                      color,
                      size,
                      isLast: index === optionSlots.length - 1,
                    })
                  )}
                </Flex>
              </Box>
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
