import { cloneElement, createRef, ReactElement, RefObject, useEffect, useLayoutEffect, useRef, useState } from 'react'
import {
  flip,
  FloatingPortal,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
} from '@floating-ui/react'
import { motion } from 'motion/react'

import { WithSlots } from 'lib/components/shared'
import { CONTROL_SIZE_MAP, DEFAULT_CONTROL_SIZE } from 'lib/constants'
import { useControlled } from 'lib/hooks'
import { Box, Flex, SelectOptionProps, SelectProps, Text, Title } from 'lib/index.core'

import {
  DEFAULT_SELECT_INLINE_SIZE,
  DEFAULT_SELECT_INTENT,
  DEFAULT_SELECT_VARIANT,
  DEFAULT_SELECT_VISIBLE_ITEMS_COUNT,
} from './constants'
import { resolveSelectValues } from './helpers'
import { SelectOptionInternalProps } from './SelectOption'

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

  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const listRef = useRef<Array<HTMLElement | null>>([])

  useEffect(() => {
    listRef.current = itemRefs.current.map(ref => ref.current)
  })

  const itemRefs = useRef<RefObject<HTMLButtonElement | null>[]>(optionSlots.map(() => createRef<HTMLButtonElement | null>()))

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

  const { menuBlockSize, menuScrollingBlockSize } = resolveSelectValues({
    visibleItemsCount: visibleItemsCount !== undefined ? visibleItemsCount : 5,
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

  const isOpeningDownwards = placement.includes('bottom')

  return (
    <>
      <Box
        tag="button"
        tagRef={triggerRef}
        tagAttrs={getReferenceProps()}
        variant={variant}
        intent={intent}
        color={color}
        inlineSize={inlineSize}
        blockSize={CONTROL_SIZE_MAP[size].blockSize}
        paddingInline={CONTROL_SIZE_MAP[size].paddingInline}
        disabled={disabled}
        surface={open ? 'selected' : undefined}
        borderBottomLeftRadius={open && isOpeningDownwards ? '0px' : undefined}
        borderBottomRightRadius={open && isOpeningDownwards ? '0px' : undefined}
        borderTopLeftRadius={open && !isOpeningDownwards ? '0px' : undefined}
        borderTopRightRadius={open && !isOpeningDownwards ? '0px' : undefined}
        cursor="pointer"
        ripple
        interactive
      >
        <Title
          iconName="chevron-down"
          iconPlacement="right"
          iconSize={CONTROL_SIZE_MAP[size].iconSize}
          justifyContent="space-between"
          iconAngle={open ? 180 : 0}
        >
          <Text fontSize={CONTROL_SIZE_MAP[size].fontSize} lineHeight={CONTROL_SIZE_MAP[size].lineHeight}>
            {staticLabel ?? selectedOptionSlot?.props.children ?? 'Select...'}
          </Text>
        </Title>
      </Box>
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
            <motion.div
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ duration: 0.18, ease: 'easeInOut' }}
              style={{ transformOrigin: isOpeningDownwards ? 'top' : 'bottom' }}
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
                borderTopLeftRadius={isOpeningDownwards ? '0px' : undefined}
                borderTopRightRadius={isOpeningDownwards ? '0px' : undefined}
                borderBottomLeftRadius={!isOpeningDownwards ? '0px' : undefined}
                borderBottomRightRadius={!isOpeningDownwards ? '0px' : undefined}
              >
                <Box drawable variant="solid" intent="neutral" blockSize={`${menuScrollingBlockSize}px`} borderRadius="0px">
                  <Flex flexDirection="column">
                    {optionSlots.map((optionSlot, index) =>
                      cloneElement(optionSlot, {
                        key: optionSlot.props.value,
                        tagRef: itemRefs.current[index],
                        tagAttrs: getItemProps({
                          onClick: () => handleOnOptionClick(optionSlot.props.value),
                        }),
                        surface: currentValue === optionSlot.props.value ? 'selected' : undefined,
                        variant,
                        intent,
                        color,
                        size,
                        isOpeningDownwards,
                        isFirst: index === 0,
                        isLast: index === optionSlots.length - 1,
                      })
                    )}
                  </Flex>
                </Box>
              </Box>
            </motion.div>
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
