import { useState } from 'react'

import { Textarea, TextareaProps } from 'lib/index.core'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../Box/meta'
import {
  DEFAULT_TEXTAREA_INTENT,
  DEFAULT_TEXTAREA_RESIZE,
  DEFAULT_TEXTAREA_ROWS,
  DEFAULT_TEXTAREA_VARIANT,
  TEXTAREA_RESIZE,
} from './definitions'

const TextareaControlled = () => {
  const [value, setValue] = useState<string>('value')
  return <Textarea value={value} onChange={setValue} />
}

export const TEXTAREA_META = {
  Textarea: {
    overview: {
      bundle: 'core',
      title: 'Multiline text input for entering and editing longer text.',
      features: ['supports both controlled and uncontrolled modes'],
      composedOf: ['Box'],
      topLevelTags: ['textarea'],
    },
    props: {
      color: BOX_META.Box.props.color,
      defaultValue: {
        options: ['string'],
        description: 'Initial value displayed when the component is used in uncontrolled mode.',
      },
      disabled: BOX_META.Box.props.disabled,
      inlineSize: BOX_META.Box.props.inlineSize,
      intent: {
        ...BOX_META.Box.props.intent,
        defaultValue: String(DEFAULT_TEXTAREA_INTENT),
      },
      maxInlineSize: BOX_META.Box.props.maxInlineSize,
      maxLength: {
        options: ['number'],
        description: 'Maximum number of characters allowed for the textarea value.',
      },
      minInlineSize: BOX_META.Box.props.minInlineSize,
      onBlur: {
        options: ['e => void'],
        description: 'Callback fired when the textarea loses focus.',
      },
      onChange: {
        options: ['(value: string) => void'],
        description: 'Callback fired when the value changes.',
      },
      onFocus: {
        options: ['e => void'],
        description: 'Callback fired when the textarea receives focus.',
      },
      placeholder: {
        options: ['string'],
        description: 'Hint text displayed when the textarea has no value.',
      },
      readOnly: {
        options: ['boolean'],
        description: 'Prevents editing the value while keeping the field focusable.',
      },
      resize: {
        options: TEXTAREA_RESIZE,
        defaultValue: DEFAULT_TEXTAREA_RESIZE,
        description: "Controls the textarea's resize behavior.",
      },
      rows: {
        options: ['number'],
        defaultValue: DEFAULT_TEXTAREA_ROWS as never,
        description: 'Initial number of text rows to display.',
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
      value: {
        options: ['string'],
        description: 'Current value displayed when the component is used in controlled mode.',
      },
      variant: {
        ...BOX_META.Box.props.variant,
        defaultValue: String(DEFAULT_TEXTAREA_VARIANT),
      },
    },
    examples: [
      {
        description: 'Textarea used in uncontrolled mode with its initial value set via the "defaultValue" prop.',
        jsx: <Textarea defaultValue="default value" />,
      },
      {
        description: 'Textarea used in controlled mode with its value managed through external state.',
        jsx: <TextareaControlled />,
        code: `const [value, setValue] = useState<string>('value')
    \n
return (
  <Textarea value={value} onChange={onChange} />
)`,
      },
      {
        description: 'Disabled Textarea.',
        jsx: <Textarea defaultValue="default value" disabled />,
      },
    ],
    changelog: {
      '0.9.0': ['added `maxLength` prop'],
      '0.2.3': ['released'],
    },
  } as ComponentMeta<TextareaProps>,
}
