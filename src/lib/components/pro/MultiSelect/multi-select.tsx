import { ReactElement, useEffect, useRef, useState } from 'react'

import { Box } from 'lib/components/core/Box'
import { Divider } from 'lib/components/core/Divider'
import { Icon } from 'lib/components/core/Icon'
import { Resize } from 'lib/components/core/Resize'
import { Text } from 'lib/components/core/Text'
import { Floating, FloatingProps } from 'lib/components/pro/Floating'
import { WithSlots } from 'lib/components/shared'
import { CONTROL_SCALE_MAP, DEFAULT_TSHIRT_SIZE, NEB_LENGTH } from 'lib/constants'
import { useControlled } from 'lib/hooks'

import {
  DEFAULT_MULTI_SELECT_INLINE_SIZE,
  DEFAULT_MULTI_SELECT_INTENT,
  DEFAULT_MULTI_SELECT_VARIANT,
  DEFAULT_MULTI_SELECT_VISIBLE_ITEMS_COUNT,
} from './constants'
import { resolveMultiSelectValues } from './helpers'
import { MultiSelectOptionProps } from './slots/MultiSelectOption/types'
import { MultiSelectProps } from './types'

export const MultiSelectImpl = ({
  variant = DEFAULT_MULTI_SELECT_VARIANT,
  intent = DEFAULT_MULTI_SELECT_INTENT,
  color,
  inlineSize = DEFAULT_MULTI_SELECT_INLINE_SIZE,
  disabled,
  // own
  defaultValue,
  value,
  onChange,
  size = DEFAULT_TSHIRT_SIZE,
  visibleItemsCount = DEFAULT_MULTI_SELECT_VISIBLE_ITEMS_COUNT,
  staticLabel,
  // extra
  optionSlots,
}: MultiSelectProps & { optionSlots: ReactElement<MultiSelectOptionProps>[] }) => {
  const [open, setOpen] = useState<boolean>(false)
  const [visible, setVisible] = useState<boolean>(false)
  const [placement, setPlacement] = useState<FloatingProps['placement']>('bottom-start')

  const [rawValue, setCurrentValue] = useControlled<string[]>({ value, defaultValue, onChange })
  const currentValue = rawValue || []

  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const selectedItemRef = useRef<HTMLButtonElement | null>(null)

  const triggerWidth = triggerRef.current?.offsetWidth
  const currentLabel = optionSlots
    .filter(slot => currentValue.includes(slot.props.value))
    .map(slot => slot.props.children)
    .join(', ')
  const isOpenDownwards = placement?.startsWith('bottom')
  const optionBlockSize = Number(CONTROL_SCALE_MAP[size].blockSize.replace('px', ''))

  const { menuBlockSize } = resolveMultiSelectValues({
    visibleItemsCount: visibleItemsCount !== undefined ? visibleItemsCount : 5,
    optionBlockSize,
    itemsCount: optionSlots.length,
  })

  const toggleValue = (optionValue: string) => {
    const nextValue = currentValue.includes(optionValue)
      ? currentValue.filter(v => v !== optionValue)
      : [...currentValue, optionValue]

    setCurrentValue(nextValue)
  }

  useEffect(() => {
    if (!open) return
    requestAnimationFrame(() => {
      selectedItemRef.current?.focus()
    })
  }, [open])

  useEffect(() => {
    requestAnimationFrame(() => {
      setVisible(open)
    })
  }, [open])

  return (
    <Floating
      mode="click"
      open={open}
      onOpenChange={setOpen}
      placement={placement}
      onPlacementChange={setPlacement}
      disabled={disabled}
    >
      <Floating.Trigger display="block">
        <Box
          tag="button"
          tagRef={triggerRef}
          variant={variant}
          intent={intent}
          color={color}
          inlineSize={inlineSize}
          blockSize={CONTROL_SCALE_MAP[size].blockSize}
          paddingInline={CONTROL_SCALE_MAP[size].paddingInline}
          disabled={disabled}
          surfaceRole={open ? 'selection' : undefined}
          cursor="pointer"
          ripple={!open}
          interactive
          borderBottomLeftRadius={open && isOpenDownwards ? '0px' : undefined}
          borderBottomRightRadius={open && isOpenDownwards ? '0px' : undefined}
          borderTopLeftRadius={open && !isOpenDownwards ? '0px' : undefined}
          borderTopRightRadius={open && !isOpenDownwards ? '0px' : undefined}
        >
          <Box
            display="flex"
            tag="span"
            alignItems="center"
            justifyContent="space-between"
            columnGap={NEB_LENGTH.px_008}
          >
            <Text
              fontSize={CONTROL_SCALE_MAP[size].fontSize}
              lineHeight={CONTROL_SCALE_MAP[size].lineHeight}
              truncate
            >
              {staticLabel ?? (currentLabel || 'Select...')}
            </Text>
            <Icon name="chevron-down" size={CONTROL_SCALE_MAP[size].fontSize} />
          </Box>
        </Box>
      </Floating.Trigger>
      <Floating.Content>
        <Resize visible={visible} property="blockSize" easing={visible ? 'ease-out' : undefined}>
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
            <Box intent={intent} color={color} surfaceDepth="raised">
              {optionSlots.map((slot, key) => {
                const isSelected = currentValue.includes(slot.props.value)

                return (
                  <Box key={key}>
                    {isOpenDownwards ? (
                      <Divider
                        marginBlock={NEB_LENGTH.px_000}
                        surfaceDepth="raised"
                        color={color}
                        intent={intent}
                      />
                    ) : null}
                    <Box
                      tag="button"
                      tagAttrs={{
                        onClick: () => {
                          toggleValue(slot.props.value)
                        },
                      }}
                      drawable
                      interactive
                      variant="solid"
                      surfaceDepth="raised"
                      intent={intent}
                      color={color}
                      cursor="pointer"
                      surfaceRole={isSelected ? 'selection' : undefined}
                      inlineSize="100%"
                      borderRadius={NEB_LENGTH.px_000}
                    >
                      <Box
                        display="flex"
                        tagAttrs={{
                          style: {
                            blockSize: CONTROL_SCALE_MAP[size].blockSize,
                            paddingInline: CONTROL_SCALE_MAP[size].paddingInline,
                          },
                        }}
                        alignItems="center"
                        justifyContent="space-between"
                        columnGap={NEB_LENGTH.px_008}
                      >
                        <Text
                          fontSize={CONTROL_SCALE_MAP[size].fontSize}
                          lineHeight={CONTROL_SCALE_MAP[size].lineHeight}
                          bold={isSelected}
                        >
                          {slot}
                        </Text>
                        {isSelected ? (
                          <Icon name="check" size={CONTROL_SCALE_MAP[size].fontSize} />
                        ) : null}
                      </Box>
                    </Box>
                    {!isOpenDownwards ? (
                      <Divider
                        marginBlock={NEB_LENGTH.px_000}
                        surfaceDepth="raised"
                        color={color}
                        intent={intent}
                      />
                    ) : null}
                  </Box>
                )
              })}
            </Box>
          </Box>
        </Resize>
      </Floating.Content>
    </Floating>
  )
}

export const MultiSelect = (props: MultiSelectProps) => {
  return (
    <WithSlots<'MultiSelect.Option'>
      childrenToVerify={props.children}
      componentName="MultiSelect"
      slotsConfig={[{ name: 'MultiSelect.Option', required: true, allowMultiple: true }]}
    >
      {({ slotsByName }) => {
        const optionSlots = slotsByName[
          'MultiSelect.Option'
        ] as ReactElement<MultiSelectOptionProps>[]
        return <MultiSelectImpl {...props} optionSlots={optionSlots} />
      }}
    </WithSlots>
  )
}

MultiSelect.displayName = 'MultiSelect'
