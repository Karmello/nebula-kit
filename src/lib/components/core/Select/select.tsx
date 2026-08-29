import { ReactElement, useEffect, useRef, useState } from 'react'

import { Box } from 'lib/components/core/Box'
import { Divider } from 'lib/components/core/Divider'
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
import { resolveSelectValues } from './helpers'
import type { SelectOptionProps } from './slots/SelectOption/types'
import type { SelectProps } from './types'

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
  const optionBlockSize = Number(CONTROL_SCALE_MAP[scale].blockSize.replace('px', ''))

  const { menuBlockSize } = resolveSelectValues({
    visibleItemsCount: visibleItemsCount !== undefined ? visibleItemsCount : 5,
    optionBlockSize,
    itemsCount: optionSlots.length,
  })

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
          variant={variant}
          intent={intent}
          color={color}
          inlineSize="100%"
          blockSize={CONTROL_SCALE_MAP[scale].blockSize}
          paddingInline={CONTROL_SCALE_MAP[scale].paddingInline}
          disabled={disabled}
          surface={open ? 'raised' : undefined}
          cursor="pointer"
          ripple={!open}
          interactive
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
            variant={variant}
            intent={intent}
            color={color}
            surface="raised"
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
              variant="solid"
              intent="neutral"
              color={color}
              inlineSize="100%"
            >
              {optionSlots.map((slot, key) => {
                const isSelected = currentValue === slot.props.value

                return (
                  <Box key={key}>
                    {(variant !== 'outline' && variant !== 'soft-outline') || key > 0 ? (
                      <Divider
                        intent={variant.startsWith('solid') ? intent : 'neutral'}
                        color={color}
                        marginBlock={NEB_LENGTH.px_000}
                        surface={variant.startsWith('solid') ? 'base' : undefined}
                      />
                    ) : null}
                    <Box
                      tag="button"
                      tagAttrs={{
                        onClick: () => {
                          setCurrentValue(slot.props.value)
                          setOpen(false)
                        },
                      }}
                      cursor="pointer"
                      interactive
                      inlineSize="100%"
                      variant={variant}
                      intent={intent}
                      color={color}
                      surface="raised"
                      selected={isSelected}
                      blockSize={CONTROL_SCALE_MAP[scale].blockSize}
                      paddingInline={CONTROL_SCALE_MAP[scale].paddingInline}
                      borderWidth={NEB_LENGTH.px_000}
                      borderRadius={NEB_LENGTH.px_000}
                    >
                      <Text
                        fontSize={CONTROL_SCALE_MAP[scale].fontSize}
                        lineHeight={CONTROL_SCALE_MAP[scale].lineHeight}
                      >
                        {slot}
                      </Text>
                    </Box>
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
