import { useState } from 'react'
import classNames from 'classnames'

import { Box, Segment } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import {
  DEFAULT_INPUT_INTENT,
  DEFAULT_INPUT_SIZE,
  DEFAULT_INPUT_VARIANT,
  INPUT_SIZE_CONFIG,
  InputAffixProps,
  InputProps,
} from './definitions'

import './input.scss'

export const Input = ({
  // HtmlTag
  tagAttrs,
  tagRef,
  // Box
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
  size = DEFAULT_INPUT_SIZE,
  startAffix,
  endAffix,
  placeholder,
  readOnly,
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
    ...(size !== undefined && { size }),
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
              fontSize: INPUT_SIZE_CONFIG[size || 'md'].fontSize,
            },
            value: currentValue,
            onChange: e => {
              handleChange((e.target as HTMLInputElement).value)
            },
            onFocus,
            onBlur,
            placeholder,
            readOnly,
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
          {...INPUT_SIZE_CONFIG[size || 'md']}
        />
      </Segment.Item>
      {endAffix ? <Segment.Item>{endAffix(affixProps)}</Segment.Item> : null}
    </Segment>
  )
}

Input.displayName = 'Input'
