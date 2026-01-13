import {
  Button,
  Flex,
  BoxProps,
  ButtonProps,
  CalloutProps,
  SectionProps,
  TextProps,
  IconProps,
} from 'lib/components'

import { usePlaygroundStore } from '../../store'

const CONFIG: Record<string, object[]> = {
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
  Section: [
    {
      children: 'This is section content.',
      heading: 'Basic section',
    },
    {
      children: 'This is section content.',
      color: 'purple',
      heading: 'Custom section',
      iconName: 'settings',
      intent: 'secondary',
      size: 'lg',
      variant: 'outline',
    },
  ] as SectionProps[],
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
}

export const PredefinedExamples = () => {
  const components = usePlaygroundStore(state => state.components)
  const activeComponent = usePlaygroundStore(state => state.activeComponent)
  const setPropField = usePlaygroundStore(state => state.setPropField)

  if (!CONFIG[activeComponent]) return null

  const allProps = components[activeComponent].props

  return (
    <Flex columnGap="7px">
      {CONFIG[activeComponent].map((predefinedProps, index) => {
        return (
          <Button
            key={index}
            tagAttrs={{
              onClick: () => {
                Object.keys(allProps).forEach(propName => {
                  setPropField(activeComponent, propName, 'value', allProps[propName].defaultValue)
                })
                Object.keys(predefinedProps).forEach(propName => {
                  setPropField(activeComponent, propName, 'value', predefinedProps[propName as never])
                })
              },
            }}
            size="xs"
            intent="primary"
            color="blue"
          >
            Example {index + 1}
          </Button>
        )
      })}
    </Flex>
  )
}
