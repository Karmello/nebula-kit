import { BUTTON_TAGS, CONTROL_SIZES, DEFAULT_CONTROL_SIZE, PROP_GROUPS } from 'lib/constants'
import { Button, ButtonProps, Flex } from 'lib/index.core'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../Box/meta'
import { ICON_META } from '../Icon/meta'
import { TEXT_META } from '../Text/meta'
import {
  BUTTON_ALIGNS,
  BUTTON_ICON_PLACEMENTS,
  DEFAULT_BUTTON_ALIGN,
  DEFAULT_BUTTON_ICON_PLACEMENT,
  DEFAULT_BUTTON_INTENT,
  DEFAULT_BUTTON_RIPPLE,
  DEFAULT_BUTTON_VARIANT,
} from './constants'

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
      composedOf: ['Flex', 'Text', 'Icon', 'Loader'],
      topLevelTags: BUTTON_TAGS,
    },
    props: {
      elevated: BOX_META.Box.props.elevated,
      selected: {
        group: PROP_GROUPS.SURFACE,
        options: ['boolean'],
        description: 'Applies the selected visual behavior to the component, keeping it in a persistent highlighted state.',
      },
      color: BOX_META.Box.props.color,
      variant: {
        ...BOX_META.Box.props.variant,
        defaultValue: String(DEFAULT_BUTTON_VARIANT),
      },
      intent: {
        ...BOX_META.Box.props.intent,
        defaultValue: String(DEFAULT_BUTTON_INTENT),
      },
      loading: {
        group: PROP_GROUPS.INTERACTION,
        options: ['boolean'],
        description: 'Activates the loading state, shows a spinner and prevents interaction.',
      },
      disabled: BOX_META.Box.props.disabled,
      ripple: {
        ...BOX_META.Box.props.ripple,
        defaultValue: String(DEFAULT_BUTTON_RIPPLE),
      },
      align: {
        group: PROP_GROUPS.LAYOUT,
        options: BUTTON_ALIGNS,
        defaultValue: String(DEFAULT_BUTTON_ALIGN),
        isResponsive: true,
        description: 'Controls how inner content is arranged within the container.',
      },
      size: {
        group: PROP_GROUPS.SIZE,
        options: CONTROL_SIZES,
        defaultValue: DEFAULT_CONTROL_SIZE,
        description:
          'Controls overall proportions - adjusting blockSize, horizontal padding and fontSize to keep content balanced at each size.',
      },
      fullWidth: {
        group: PROP_GROUPS.SIZE,
        options: ['boolean'],
        isResponsive: true,
        description: 'Expands the button to match the full width of its container.',
      },
      inlineSize: BOX_META.Box.props.inlineSize,
      minInlineSize: BOX_META.Box.props.minInlineSize,
      maxInlineSize: BOX_META.Box.props.maxInlineSize,
      bold: TEXT_META.Text.props.bold,
      iconName: ICON_META.Icon.props.name,
      customSvgIcon: {
        ...ICON_META.Icon.props.children,
        group: PROP_GROUPS.ICON,
      },
      iconPlacement: {
        group: PROP_GROUPS.ICON,
        options: BUTTON_ICON_PLACEMENTS,
        defaultValue: DEFAULT_BUTTON_ICON_PLACEMENT,
        description: 'Icon placement relative to label.',
      },
      children: {
        ...BOX_META.Box.props.children,
        isRequired: true,
        description: 'Label rendered.',
      },
      tag: {
        ...BOX_META.Box.props.tag,
        options: BUTTON_TAGS,
        defaultValue: 'button',
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
      onClick: {
        group: PROP_GROUPS.ROOT,
        options: ['e => void'],
        description: 'Click event handler for the button element.',
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
    ],
    changelog: {
      '0.10.0': ['removed `justifyContent` prop', 'removed `textAlign` prop', 'added `align` prop'],
      '0.9.0': ['changed `surface` prop to `elevated`'],
      '0.8.0': ['exposed `selected` prop', 'changed `elevated` prop to `surface`'],
      '0.7.0': ['exposed `interactive` prop'],
      '0.4.0': ['added `onClick` prop'],
      '0.2.3': ['released'],
    },
  } satisfies ComponentMeta<ButtonProps>,
}
