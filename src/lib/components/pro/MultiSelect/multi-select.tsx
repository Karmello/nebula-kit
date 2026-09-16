import { ReactElement, useEffect, useRef, useState } from 'react'

import { Box } from 'lib/components/core/Box'
import { Icon } from 'lib/components/core/Icon'
import { Resize } from 'lib/components/core/Resize'
import { Text } from 'lib/components/core/Text'
import { Floating, type FloatingProps } from 'lib/components/pro/Floating'
import { CONTROL_SCALE_MAP, DEFAULT_TSHIRT_SIZE, NEB_LENGTH } from 'lib/constants'
import { useControlled, useSlots } from 'lib/hooks'

import {
  DEFAULT_MULTI_SELECT_INLINE_SIZE,
  DEFAULT_MULTI_SELECT_INTENT,
  DEFAULT_MULTI_SELECT_VARIANT,
  DEFAULT_MULTI_SELECT_VISIBLE_ITEMS_COUNT,
  MULTI_SELECT_VARIANT_MAP,
} from './constants'
import type { MultiSelectOptionProps } from './slots/MultiSelectOption/types'
import type { MultiSelectProps } from './types'

export const MultiSelectImpl = ({
  intent = DEFAULT_MULTI_SELECT_INTENT,
  color,
  inlineSize = DEFAULT_MULTI_SELECT_INLINE_SIZE,
  disabled,
  // own
  defaultValue,
  value,
  onChange,
  scale = DEFAULT_TSHIRT_SIZE,
  visibleItemsCount = DEFAULT_MULTI_SELECT_VISIBLE_ITEMS_COUNT,
  staticLabel,
  variant = DEFAULT_MULTI_SELECT_VARIANT,
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
  const optionBlockSize = parseInt(CONTROL_SCALE_MAP[scale].blockSize)

  const finalVisibleItemsCount = Math.min(optionSlots.length, visibleItemsCount)
  const menuBlockSize = finalVisibleItemsCount * optionBlockSize

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
      <Floating.Trigger display="block" inlineSize={inlineSize}>
        <Box
          tag="button"
          tagRef={triggerRef}
          tagAttrs={{
            style: {
              userSelect: 'none',
            },
          }}
          intent={intent}
          color={color}
          bgMode={MULTI_SELECT_VARIANT_MAP[variant].trigger.bgMode}
          borderMode={MULTI_SELECT_VARIANT_MAP[variant].trigger.borderMode}
          textMode={MULTI_SELECT_VARIANT_MAP[variant].trigger.textMode}
          inlineSize="100%"
          blockSize={CONTROL_SCALE_MAP[scale].blockSize}
          paddingInline={CONTROL_SCALE_MAP[scale].paddingInline}
          disabled={disabled}
          surfaceDepth={open ? 'raised' : undefined}
          cursor="pointer"
          ripple={!open}
          drawable
          interactive={!open}
          borderBottomLeftRadius={open && isOpenDownwards ? '0px' : undefined}
          borderBottomRightRadius={open && isOpenDownwards ? '0px' : undefined}
          borderTopLeftRadius={open && !isOpenDownwards ? '0px' : undefined}
          borderTopRightRadius={open && !isOpenDownwards ? '0px' : undefined}
          display="inline-flex"
          alignItems="center"
          justifyContent="space-between"
          columnGap={NEB_LENGTH.px_008}
        >
          <Text
            fontSize={CONTROL_SCALE_MAP[scale].fontSize}
            lineHeight={CONTROL_SCALE_MAP[scale].lineHeight}
            truncate
          >
            {staticLabel ?? (currentLabel || 'Select...')}
          </Text>
          <Icon name="chevron-down" size={CONTROL_SCALE_MAP[scale].fontSize} />
        </Box>
      </Floating.Trigger>
      <Floating.Content>
        <Resize visible={visible} property="blockSize" easing={visible ? 'ease-out' : undefined}>
          <Box drawable bgMode="filled" intent="neutral" color={color}>
            <Box
              drawable
              intent={intent}
              color={color}
              bgMode="tinted"
              borderMode={MULTI_SELECT_VARIANT_MAP[variant].content.borderMode}
              surfaceDepth="raised"
              inlineSize={`${triggerWidth}px`}
              maxBlockSize={`${menuBlockSize}px`}
              overflowY="auto"
              borderTopLeftRadius={isOpenDownwards ? NEB_LENGTH.px_000 : undefined}
              borderTopRightRadius={isOpenDownwards ? NEB_LENGTH.px_000 : undefined}
              borderBottomLeftRadius={!isOpenDownwards ? NEB_LENGTH.px_000 : undefined}
              borderBottomRightRadius={!isOpenDownwards ? NEB_LENGTH.px_000 : undefined}
              borderTopWidth={isOpenDownwards ? NEB_LENGTH.px_000 : undefined}
              borderBottomWidth={!isOpenDownwards ? NEB_LENGTH.px_000 : undefined}
            >
              <Box
                display="inline-flex"
                flexDirection="column"
                drawable
                bgMode="filled"
                intent="neutral"
                color={color}
                inlineSize="100%"
                borderRadius={NEB_LENGTH.px_000}
              >
                {optionSlots.map((slot, key) => {
                  const isSelected = currentValue.includes(slot.props.value)

                  return (
                    <Box
                      key={key}
                      tag="button"
                      tagAttrs={{
                        onClick: () => {
                          toggleValue(slot.props.value)
                        },
                        style: { backgroundClip: 'padding-box' },
                      }}
                      cursor="pointer"
                      interactive
                      inlineSize="100%"
                      blockSize={
                        key === 0
                          ? !MULTI_SELECT_VARIANT_MAP[variant].removeFirstTopBorder
                            ? optionBlockSize + 'px'
                            : optionBlockSize - parseInt(NEB_LENGTH.px_002) + 'px'
                          : `${optionBlockSize}px`
                      }
                      intent={intent}
                      color={color}
                      bgMode={MULTI_SELECT_VARIANT_MAP[variant].item.bgMode}
                      borderMode={MULTI_SELECT_VARIANT_MAP[variant].item.borderMode}
                      borderRole="divider"
                      surfaceDepth="raised"
                      bgRole={isSelected ? 'selection' : undefined}
                      textMode={MULTI_SELECT_VARIANT_MAP[variant].item.textMode}
                      paddingInline={CONTROL_SCALE_MAP[scale].paddingInline}
                      borderWidth={NEB_LENGTH.px_000}
                      borderTopWidth={
                        MULTI_SELECT_VARIANT_MAP[variant].removeFirstTopBorder && key === 0
                          ? NEB_LENGTH.px_000
                          : NEB_LENGTH.px_002
                      }
                      borderRadius={NEB_LENGTH.px_000}
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      columnGap={NEB_LENGTH.px_008}
                    >
                      <Text
                        fontSize={CONTROL_SCALE_MAP[scale].fontSize}
                        lineHeight={CONTROL_SCALE_MAP[scale].lineHeight}
                        bold={isSelected}
                        truncate
                      >
                        {slot}
                      </Text>
                      {isSelected ? (
                        <Icon name="check" size={CONTROL_SCALE_MAP[scale].fontSize} />
                      ) : null}
                    </Box>
                  )
                })}
              </Box>
            </Box>
          </Box>
        </Resize>
      </Floating.Content>
    </Floating>
  )
}

export const MultiSelect = (props: MultiSelectProps) => {
  const slots = useSlots<'MultiSelect.Option'>({
    childrenToVerify: props.children,
    componentName: 'MultiSelect',
    slotsConfig: [{ name: 'MultiSelect.Option', required: true, allowMultiple: true }],
  })

  if (!slots) return null

  const optionSlots = slots.slotsByName[
    'MultiSelect.Option'
  ] as ReactElement<MultiSelectOptionProps>[]

  return <MultiSelectImpl {...props} optionSlots={optionSlots} />
}

MultiSelect.displayName = 'MultiSelect'
