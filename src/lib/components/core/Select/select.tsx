import { ReactElement, useEffect, useRef, useState } from 'react'

import { Box, BoxBgMode, BoxBorderMode, BoxText } from 'lib/components/core/Box'
import { Icon } from 'lib/components/core/Icon'
import { Resize } from 'lib/components/core/Resize'
import { Text } from 'lib/components/core/Text'
import { Floating, type FloatingProps } from 'lib/components/pro/Floating'
import { WithSlots } from 'lib/components/shared'
import { CONTROL_SCALE_MAP, DEFAULT_TSHIRT_SIZE, NEB_LENGTH } from 'lib/constants'
import { useControlled } from 'lib/hooks'

import {
  DEFAULT_SELECT_INLINE_SIZE,
  DEFAULT_SELECT_INTENT,
  DEFAULT_SELECT_VARIANT,
  DEFAULT_SELECT_VISIBLE_ITEMS_COUNT,
} from './constants'
import type { SelectOptionProps } from './slots/SelectOption/types'
import type { SelectProps, SelectVariant } from './types'

const VARIANT_MAP: Record<
  SelectVariant,
  {
    trigger: { bgMode: BoxBgMode; borderMode: BoxBorderMode; text: BoxText }
    content: { borderMode: BoxBorderMode }
    item: { bgMode: BoxBgMode; borderMode: BoxBorderMode; text: BoxText }
    removeFirstTopBorder: boolean
  }
> = {
  solid: {
    trigger: { bgMode: 'filled', borderMode: 'none', text: 'default' },
    content: { borderMode: 'none' },
    item: { bgMode: 'filled', borderMode: 'filled', text: 'default' },
    removeFirstTopBorder: false,
  },
  outline: {
    trigger: { bgMode: 'tinted', borderMode: 'filled', text: 'default' },
    content: { borderMode: 'filled' },
    item: { bgMode: 'tinted', borderMode: 'tinted', text: 'default' },
    removeFirstTopBorder: true,
  },
  'soft-outline': {
    trigger: { bgMode: 'tinted', borderMode: 'filled', text: 'colored' },
    content: { borderMode: 'filled' },
    item: { bgMode: 'tinted', borderMode: 'tinted', text: 'colored' },
    removeFirstTopBorder: true,
  },
  ghost: {
    trigger: { bgMode: 'transparent', borderMode: 'none', text: 'colored' },
    content: { borderMode: 'none' },
    item: { bgMode: 'transparent', borderMode: 'none', text: 'colored' },
    removeFirstTopBorder: false,
  },
}

export const SelectImpl = ({
  intent = DEFAULT_SELECT_INTENT,
  color,
  inlineSize = DEFAULT_SELECT_INLINE_SIZE,
  disabled,
  // own
  defaultValue,
  value,
  onChange,
  scale = DEFAULT_TSHIRT_SIZE,
  visibleItemsCount = DEFAULT_SELECT_VISIBLE_ITEMS_COUNT,
  staticLabel,
  variant = DEFAULT_SELECT_VARIANT,
  // extra
  optionSlots,
}: SelectProps & { optionSlots: ReactElement<SelectOptionProps>[] }) => {
  const [open, setOpen] = useState<boolean>(false)
  const [visible, setVisible] = useState<boolean>(false)
  const [placement, setPlacement] = useState<FloatingProps['placement']>('bottom-start')

  const [currentValue, setCurrentValue] = useControlled({ value, defaultValue, onChange })
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const selectedItemRef = useRef<HTMLButtonElement | null>(null)

  const triggerWidth = triggerRef.current?.offsetWidth
  const currentLabel = optionSlots.find(slot => slot.props.value === currentValue)?.props.children
  const isOpenDownwards = placement?.startsWith('bottom')
  const optionBlockSize = parseInt(CONTROL_SCALE_MAP[scale].blockSize)

  const finalVisibleItemsCount = Math.min(optionSlots.length, visibleItemsCount)
  const menuBlockSize = finalVisibleItemsCount * optionBlockSize

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
          bgMode={VARIANT_MAP[variant].trigger.bgMode}
          borderMode={VARIANT_MAP[variant].trigger.borderMode}
          text={VARIANT_MAP[variant].trigger.text}
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
            {staticLabel ?? currentLabel ?? 'Select...'}
          </Text>
          <Icon name="chevron-down" size={CONTROL_SCALE_MAP[scale].fontSize} />
        </Box>
      </Floating.Trigger>
      <Floating.Content>
        <Resize visible={visible} property="blockSize" easing={visible ? 'ease-out' : undefined}>
          <Box
            drawable
            intent={intent}
            color={color}
            borderMode={VARIANT_MAP[variant].content.borderMode}
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
                const isSelected = currentValue === slot.props.value

                return (
                  <Box
                    key={key}
                    tag="button"
                    tagAttrs={{
                      onClick: () => {
                        setCurrentValue(slot.props.value)
                        setOpen(false)
                      },
                      style: { backgroundClip: 'padding-box' },
                    }}
                    cursor="pointer"
                    interactive
                    inlineSize="100%"
                    blockSize={
                      key === 0
                        ? !VARIANT_MAP[variant].removeFirstTopBorder
                          ? optionBlockSize + 'px'
                          : optionBlockSize - parseInt(NEB_LENGTH.px_002) + 'px'
                        : `${optionBlockSize}px`
                    }
                    intent={intent}
                    color={color}
                    bgMode={VARIANT_MAP[variant].item.bgMode}
                    borderMode={VARIANT_MAP[variant].item.borderMode}
                    borderRole="divider"
                    surfaceDepth="raised"
                    bgRole={isSelected ? 'selection' : undefined}
                    text={VARIANT_MAP[variant].item.text}
                    paddingInline={CONTROL_SCALE_MAP[scale].paddingInline}
                    borderWidth={NEB_LENGTH.px_000}
                    borderTopWidth={
                      VARIANT_MAP[variant].removeFirstTopBorder && key === 0
                        ? NEB_LENGTH.px_000
                        : NEB_LENGTH.px_002
                    }
                    borderRadius={NEB_LENGTH.px_000}
                  >
                    <Text
                      fontSize={CONTROL_SCALE_MAP[scale].fontSize}
                      lineHeight={CONTROL_SCALE_MAP[scale].lineHeight}
                      bold={isSelected}
                    >
                      {slot}
                    </Text>
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
