import {
  BoxProps,
  ButtonProps,
  CalloutProps,
  CheckboxProps,
  IconProps,
  InputProps,
  SectionProps,
  SelectProps,
  SwitchProps,
  TableProps,
  TextProps,
} from 'lib/components'

export const PRESETS: Record<string, object[]> = {
  Box: [
    {
      blockSize: '100px',
      borderRadius: '10px',
      children: 'Drawable Box with variant, intent and color applied.',
      color: 'green',
      drawable: true,
      intent: 'primary',
      padding: '20px',
      variant: 'outline',
    },
    {
      blockSize: '100px',
      borderRadius: '10px',
      children: 'Interactive Box with variant, intent and color applied.',
      color: 'blue',
      drawable: true,
      intent: 'primary',
      interactive: true,
      padding: '20px',
      variant: 'solid',
    },
  ] as BoxProps[],
  Button: [
    {
      children: 'Simple primary button',
      color: 'blue',
      intent: 'primary',
    },
    {
      children: 'Full-width button',
      color: 'blue',
      fullWidth: true,
      intent: 'primary',
    },
  ] as ButtonProps[],
  Callout: [
    {
      content: 'This is message content.',
      heading: 'Custom success callout',
      status: 'success',
    },
    {
      content: 'This is message content.',
      heading: 'Outline warning callout',
      status: 'warning',
      variant: 'outline',
    },
  ] as CalloutProps[],
  Checkbox: [
    {
      color: 'blue',
      intent: 'secondary',
      size: 'md',
      variant: 'solid',
    },
  ] as CheckboxProps[],
  Icon: [
    {
      color: 'blue',
      intent: 'primary',
      name: 'mail',
      size: '30px',
    },
    {
      color: 'red',
      intent: 'secondary',
      name: 'globe',
      size: '40px',
    },
  ] as IconProps[],
  Input: [
    {
      color: 'blue',
      intent: 'primary',
      variant: 'solid',
    },
  ] as InputProps[],
  Section: [
    {
      children: 'This is section content.',
      heading: 'Basic section',
    },
    {
      children: 'This is section content.',
      color: 'blue',
      heading: 'Custom section',
      iconName: 'settings',
      intent: 'secondary',
      size: 'lg',
      variant: 'outline',
    },
  ] as SectionProps[],
  Select: [
    {
      color: 'blue',
      inlineSize: '250px',
    },
  ] as SelectProps[],
  Switch: [
    {
      color: 'blue',
      intent: 'primary',
    },
  ] as SwitchProps[],
  Table: [
    {
      color: 'green',
    },
  ] as TableProps[],
  Text: [
    {
      children: 'This is basic text with default body typography.',
    },
    {
      children: 'This is colored heading text with icon.',
      color: 'red',
      iconName: 'check',
      intent: 'primary',
      typography: 'h4',
    },
  ] as TextProps[],
}
