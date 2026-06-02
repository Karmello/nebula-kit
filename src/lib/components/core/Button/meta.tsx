import { BUTTON_TAGS, CONTROL_SIZES, DEFAULT_CONTROL_SIZE } from 'lib/constants'
import { ComponentMeta } from 'client/definitions'

import { ACTION_SURFACE_META } from '../ActionSurface/meta'
import { Flex } from '../Flex'
import { TEXT_META } from '../Text/meta'
import { WITH_ICON_META } from '../WithIcon/meta'
import { Button } from './button'
import {
  BUTTON_ALIGNS,
  type ButtonProps,
  DEFAULT_BUTTON_ALIGN,
  DEFAULT_BUTTON_INTENT,
  DEFAULT_BUTTON_RIPPLE,
  DEFAULT_BUTTON_VARIANT,
} from './definitions'

export const BUTTON_META = {
  Button: {
    overview: {
      bundle: 'core',
      title: 'Interactive control for triggering actions with consistent semantics, layout and visual states.',
      features: [
        'provides a consistent, accessible trigger for user actions',
        'handles interactive states: hover, active, focus, disabled, loading',
        'supports first-class icon composition, including custom SVG icons',
        'supports full-width layout to span the entire container',
      ],
      composedOf: ['ActionSurface', 'Text', 'Loader', 'WithIcon', 'Flex'],
      topLevelTags: BUTTON_TAGS,
    },
    props: {
      align: {
        options: BUTTON_ALIGNS,
        defaultValue: String(DEFAULT_BUTTON_ALIGN),
        isResponsive: true,
        description: 'Controls how inner content is arranged within the container.',
      },
      bold: TEXT_META.Text.props.bold,
      children: {
        ...ACTION_SURFACE_META.ActionSurface.props.children,
        isRequired: true,
        description: 'Label rendered.',
      },
      color: ACTION_SURFACE_META.ActionSurface.props.color,
      customSvgIcon: WITH_ICON_META.WithIcon.props.customSvgIcon,
      description: {
        options: ['string'],
        description: 'Secondary text displayed below the main label. Works with xl size only.',
      },
      disabled: ACTION_SURFACE_META.ActionSurface.props.disabled,
      elevated: ACTION_SURFACE_META.ActionSurface.props.elevated,
      fullWidth: {
        options: ['boolean'],
        isResponsive: true,
        description: 'Expands the button to match the full width of its container.',
      },
      iconAngle: WITH_ICON_META.WithIcon.props.iconAngle,
      iconName: WITH_ICON_META.WithIcon.props.iconName,
      iconPlacement: WITH_ICON_META.WithIcon.props.iconPlacement,
      inlineSize: ACTION_SURFACE_META.ActionSurface.props.inlineSize,
      intent: {
        ...ACTION_SURFACE_META.ActionSurface.props.intent,
        defaultValue: String(DEFAULT_BUTTON_INTENT),
      },
      interactive: ACTION_SURFACE_META.ActionSurface.props.interactive,
      loading: {
        options: ['boolean'],
        description: 'Activates the loading state, shows a spinner and prevents interaction.',
      },
      maxInlineSize: ACTION_SURFACE_META.ActionSurface.props.maxInlineSize,
      minInlineSize: ACTION_SURFACE_META.ActionSurface.props.minInlineSize,
      onClick: {
        options: ['e => void'],
        description: 'Click event handler for the button element.',
      },
      ripple: {
        options: ['boolean'],
        defaultValue: String(DEFAULT_BUTTON_RIPPLE),
        description: 'Toggles the ripple effect on pointer interaction.',
      },
      selected: {
        options: ['boolean'],
        description: 'Applies the selected visual behavior to the component, keeping it in a persistent highlighted state.',
      },
      size: {
        options: CONTROL_SIZES,
        defaultValue: DEFAULT_CONTROL_SIZE,
        description:
          'Controls overall proportions - adjusting blockSize, horizontal padding and fontSize to keep content balanced at each size.',
      },
      tag: {
        ...ACTION_SURFACE_META.ActionSurface.props.tag,
        options: BUTTON_TAGS,
        defaultValue: 'button',
      },
      tagAttrs: ACTION_SURFACE_META.ActionSurface.props.tagAttrs,
      tagRef: ACTION_SURFACE_META.ActionSurface.props.tagRef,
      variant: {
        ...ACTION_SURFACE_META.ActionSurface.props.variant,
        defaultValue: String(DEFAULT_BUTTON_VARIANT),
      },
    },
    examples: [
      {
        description: 'Default button has medium size, solid variant and tertiary intent.',
        jsx: <Button>Default button</Button>,
      },
      {
        description: 'Examples of different button sizes.',
        jsx: (
          <Flex flexWrap="wrap" alignItems="center" gap="xs">
            {CONTROL_SIZES.map(size => (
              <Button key={size} size={size} iconName="tree-pine">
                {size}
              </Button>
            ))}
          </Flex>
        ),
      },
      {
        description: 'Button stretched to fill the full width of its container.',
        jsx: <Button fullWidth>Full width button</Button>,
      },
      {
        description: 'Button with text and icon.',
        jsx: <Button iconName="search">Button with icon</Button>,
      },
      {
        description: 'Full width button with an icon aligned to the right edge.',
        jsx: (
          <Button fullWidth iconName="search" iconPlacement="right" align="split">
            Button with icon
          </Button>
        ),
      },
      {
        description: 'Button with bolded text.',
        jsx: <Button bold>Bold</Button>,
      },
      {
        description: 'Disabled button.',
        jsx: <Button disabled>Disabled</Button>,
      },
      {
        description: 'Button in loading state.',
        jsx: <Button loading>Loading</Button>,
      },
      {
        description: 'Extra large button with description.',
        jsx: (
          <Button description="Description text." size="xl" bold>
            Extra large button
          </Button>
        ),
      },
    ],
    changelog: {
      '0.10.0': ['removed `justifyContent` prop', 'removed `textAlign` prop', 'added `align` prop'],
      '0.9.0': ['changed `surface` prop to `elevated`'],
      '0.8.0': ['exposed `selected` prop', 'changed `elevated` prop to `surface`'],
      '0.7.0': ['exposed `interactive` prop'],
      '0.4.0': ['added `onClick` prop'],
      '0.2.3': ['released'],
    },
  } as ComponentMeta<ButtonProps>,
}
