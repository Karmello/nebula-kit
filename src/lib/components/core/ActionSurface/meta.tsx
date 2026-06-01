import { ComponentMeta } from 'client/definitions'

import {
  type ActionSurfaceProps,
  ACTION_SURFACE_TAGS,
  DEFAULT_ACTION_SURFACE_INTERACTIVE,
  DEFAULT_ACTION_SURFACE_RIPPLE,
  DEFAULT_ACTION_SURFACE_TAG,
} from './definitions'

import BOX_META from '../Box/meta'
import { ActionSurface } from './action-surface'
import { Text } from '../Text'

export default {
  ActionSurface: {
    overview: {
      bundle: 'core',
      title: 'Foundational interaction surface component for building custom clickable UI.',
      description:
        'ActionSurface is a foundational interaction surface component that turns custom content into a clickable, focusable surface with consistent disabled, selected, ripple and visual interaction behavior.',
      features: [
        'renders arbitrary children inside an interactive surface',
        'provides consistent hover, active, focus, disabled and selected visual states',
        'supports semantic button, anchor and custom interaction surfaces',
        'adds ripple feedback without imposing button-specific layout, typography or sizing',
        'intended for building custom interactive components without reusing Button',
      ],
      composedOf: ['Box'],
      topLevelTags: ACTION_SURFACE_TAGS,
    },
    props: {
      blockSize: BOX_META.Box.props.blockSize,
      borderBottomLeftRadius: BOX_META.Box.props.borderBottomLeftRadius,
      borderBottomRightRadius: BOX_META.Box.props.borderBottomRightRadius,
      borderRadius: BOX_META.Box.props.borderRadius,
      borderTopLeftRadius: BOX_META.Box.props.borderTopLeftRadius,
      borderTopRightRadius: BOX_META.Box.props.borderTopRightRadius,
      children: {
        ...BOX_META.Box.props.children,
        isRequired: true,
      },
      color: BOX_META.Box.props.color,
      disabled: BOX_META.Box.props.disabled,
      elevated: BOX_META.Box.props.elevated,
      inlineSize: BOX_META.Box.props.inlineSize,
      intent: BOX_META.Box.props.intent,
      interactive: {
        ...BOX_META.Box.props.interactive,
        defaultValue: String(DEFAULT_ACTION_SURFACE_INTERACTIVE),
      },
      maxBlockSize: BOX_META.Box.props.maxBlockSize,
      maxInlineSize: BOX_META.Box.props.maxInlineSize,
      minBlockSize: BOX_META.Box.props.minBlockSize,
      minInlineSize: BOX_META.Box.props.minInlineSize,
      onClick: {
        options: ['e => void'],
        description: 'Click event handler.',
      },
      padding: BOX_META.Box.props.padding,
      paddingBlock: BOX_META.Box.props.paddingBlock,
      paddingInline: BOX_META.Box.props.paddingInline,
      ripple: {
        options: ['boolean'],
        defaultValue: String(DEFAULT_ACTION_SURFACE_RIPPLE),
        description: 'Toggles the ripple effect on pointer interaction.',
      },
      selected: {
        options: ['boolean'],
        description: 'Applies the selected visual behavior to the component, keeping it in a persistent highlighted state.',
      },
      tag: {
        ...BOX_META.Box.props.tag,
        defaultValue: DEFAULT_ACTION_SURFACE_TAG,
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
      variant: BOX_META.Box.props.variant,
    },
    examples: [
      {
        description: 'Custom action area.',
        jsx: (
          <ActionSurface variant="solid" intent="primary" padding="md">
            <Text>Clickable surface</Text>
          </ActionSurface>
        ),
      },
    ],
    changelog: {
      '0.11.0': ['released'],
    },
  } as ComponentMeta<ActionSurfaceProps>,
}
