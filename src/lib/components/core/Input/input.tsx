import { useState } from 'react'
import classNames from 'classnames'

import { CONTROL_SCALE_MAP } from 'lib/constants'
import { withPrefix } from 'lib/helpers'
import { InputAffixProps, InputProps, Segment } from 'lib/index.core'

import { Box } from '../Box'
import { DEFAULT_INPUT_INTENT, DEFAULT_INPUT_SCALE, DEFAULT_INPUT_VARIANT } from './definitions'

import './input.scss'

export const Input = ({
  // Box
  tagAttrs,
  tagRef,
  variant = DEFAULT_INPUT_VARIANT,
  color,
  intent = DEFAULT_INPUT_INTENT,
  disabled,
  // own
  defaultValue,
  value,
  onChange,
  onFocus,
  onBlur,
  scale = DEFAULT_INPUT_SCALE,
  startAffix,
  endAffix,
  placeholder,
  readOnly,
  maxLength,
  autoComplete,
}: InputProps) => {
  const [internalValue, setInternalValue] = useState<string | undefined>(defaultValue)

  const isControlled = value !== undefined
  const currentValue = isControlled ? value : internalValue

  const handleChange = (value: string) => {
    if (!isControlled) setInternalValue(value)
    onChange?.(value)
  }

  const affixProps: InputAffixProps = {
    ...(variant !== undefined && { variant }),
    ...(color !== undefined && { color }),
    ...(intent !== undefined && { intent }),
    ...(disabled !== undefined && { disabled }),
    ...(scale !== undefined && { scale }),
  }

  return (
    <Segment>
      {startAffix ? <Segment.Item>{startAffix(affixProps)}</Segment.Item> : null}
      <Segment.Item flex="1">
        <Box
          tag="input"
          tagAttrs={{
            ...tagAttrs,
            className: classNames(withPrefix('input'), tagAttrs?.className),
            style: {
              ...tagAttrs?.style,
              fontSize: CONTROL_SCALE_MAP[scale || 'md'].fontSize,
              lineHeight: CONTROL_SCALE_MAP[scale || 'md'].lineHeight,
            },
            value: currentValue,
            onChange: e => {
              handleChange((e.target as HTMLInputElement).value)
            },
            onFocus,
            onBlur,
            placeholder,
            readOnly,
            maxLength,
            autoComplete,
          }}
          tagRef={tagRef}
          drawable
          variant={variant}
          color={color}
          intent={intent}
          disabled={disabled}
          inlineSize="100%"
          interactive
          activeOnFocus
          blockSize={CONTROL_SCALE_MAP[scale || 'md'].blockSize}
          paddingInline={CONTROL_SCALE_MAP[scale || 'md'].paddingInline}
        />
      </Segment.Item>
      {endAffix ? <Segment.Item>{endAffix(affixProps)}</Segment.Item> : null}
    </Segment>
  )
}

Input.displayName = 'Input'
