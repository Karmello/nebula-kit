import {
  BoxProps,
  ButtonProps,
  CalloutProps,
  CheckboxProps,
  IconProps,
  InputProps,
  LoaderProps,
  SectionProps,
  SelectProps,
  SwitchProps,
  TableProps,
  TextProps,
} from 'lib/components'

export const PRESETS: Record<string, Array<{ name: string; props: object }>> = {
  Box: [
    {
      name: 'Non-drawable Box',
      props: {
        children: 'Non-drawable Box used as a simple container.',
      } as BoxProps,
    },
    {
      name: 'Drawable Box',
      props: {
        children: 'Drawable Box with solid variant, primary intent and green color applied.',
        drawable: true,
        variant: 'solid',
        color: 'green',
        intent: 'primary',
        padding: '20px',
      } as BoxProps,
    },
    {
      name: 'Interactive Box',
      props: {
        children: 'Interactive Box with solid variant, primary intent and blue color applied.',
        drawable: true,
        interactive: true,
        variant: 'solid',
        color: 'blue',
        intent: 'primary',
        padding: '20px',
      } as BoxProps,
    },
  ],
  Button: [
    {
      name: 'Simple button',
      props: {
        children: 'Button',
        color: 'green',
        intent: 'primary',
      } as ButtonProps,
    },
    {
      name: 'Full-width button',
      props: {
        children: 'Full-width button',
        color: 'blue',
        intent: 'primary',
        fullWidth: true,
      } as ButtonProps,
    },
  ],
  Callout: [
    {
      name: 'Success callout',
      props: {
        content: 'Success callout with solid variant applied.',
        status: 'success',
      } as CalloutProps,
    },
    {
      name: 'Info callout',
      props: {
        content: 'Info callout with outline variant applied.',
        status: 'info',
        variant: 'outline',
      } as CalloutProps,
    },
  ],
  Checkbox: [
    {
      name: 'Standard checkbox',
      props: {
        color: 'gray',
      } as CheckboxProps,
    },
    {
      name: 'Solid checkbox',
      props: {
        variant: 'solid',
        color: 'blue',
      } as CheckboxProps,
    },
  ],
  Icon: [
    {
      name: 'Default size icon',
      props: {
        name: 'mail',
        color: 'green',
        intent: 'primary',
      } as IconProps,
    },
    {
      name: 'Custom size icon',
      props: {
        name: 'globe',
        color: 'blue',
        intent: 'secondary',
        size: '50px',
      } as IconProps,
    },
  ],
  Input: [
    {
      name: 'Default Input',
      props: {
        placeholder: 'Input with solid variant applied',
      } as InputProps,
    },
    {
      name: 'Custom Input',
      props: {
        placeholder: 'Input with outline variant applied',
        variant: 'outline',
      } as InputProps,
    },
  ],
  Loader: [
    {
      name: 'Default Loader',
      props: {} as LoaderProps,
    },
    {
      name: 'Custom Loader',
      props: {
        color: 'blue',
        size: '2xl',
      } as LoaderProps,
    },
  ],
  Section: [
    {
      name: 'Basic section',
      props: {
        children: 'This is simple basic section.',
        heading: 'Basic section',
      } as SectionProps,
    },
    {
      name: 'Section with border',
      props: {
        children: 'This section has icon and blue border around the content.',
        color: 'blue',
        heading: 'Section with border',
        iconName: 'settings',
        intent: 'secondary',
        size: 'lg',
        variant: 'outline',
      } as SectionProps,
    },
  ],
  Select: [
    {
      name: 'Default select',
      props: {
        children: '',
      } as SelectProps,
    },
    {
      name: 'Custom width select',
      props: {
        children: '',
        inlineSize: '200px',
      } as SelectProps,
    },
    {
      name: 'Blue primary select',
      props: {
        children: '',
        inlineSize: '200px',
        intent: 'primary',
        color: 'blue',
      } as SelectProps,
    },
  ],
  Switch: [
    {
      name: 'Default switch',
      props: {
        //
      } as SwitchProps,
    },
    {
      name: 'Custom switch',
      props: {
        color: 'blue',
        intent: 'primary',
        size: 'lg',
      } as SwitchProps,
    },
  ],
  Table: [
    {
      name: 'Default table',
      props: {
        //
      } as TableProps,
    },
    {
      name: 'Borderless table',
      props: {
        intent: 'neutral',
      } as TableProps,
    },
  ],
  Text: [
    {
      name: 'Default text',
      props: {
        children: 'This is basic text with default body typography.',
      } as TextProps,
    },
    {
      name: 'Custom text',
      props: {
        children: 'This is colored heading text with icon.',
        color: 'red',
        iconName: 'check',
        intent: 'primary',
        typography: 'h4',
      } as TextProps,
    },
  ],
}
