import { ComponentMeta } from 'client/definitions'

import {
  type ActionSurfaceProps,
  ACTION_SURFACE_TAGS,
  DEFAULT_ACTION_SURFACE_INTERACTIVE,
  DEFAULT_ACTION_SURFACE_RIPPLE,
  DEFAULT_ACTION_SURFACE_TAG,
} from './definitions'

import { BOX_PROPS_META } from '../Box/meta/props'
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
      blockSize: BOX_PROPS_META.blockSize,
      borderBottomLeftRadius: BOX_PROPS_META.borderBottomLeftRadius,
      borderBottomRightRadius: BOX_PROPS_META.borderBottomRightRadius,
      borderRadius: BOX_PROPS_META.borderRadius,
      borderTopLeftRadius: BOX_PROPS_META.borderTopLeftRadius,
      borderTopRightRadius: BOX_PROPS_META.borderTopRightRadius,
      children: {
        ...BOX_PROPS_META.children,
        isRequired: true,
      },
      color: BOX_PROPS_META.color,
      disabled: BOX_PROPS_META.disabled,
      elevated: BOX_PROPS_META.elevated,
      inlineSize: BOX_PROPS_META.inlineSize,
      intent: BOX_PROPS_META.intent,
      interactive: {
        ...BOX_PROPS_META.interactive,
        defaultValue: String(DEFAULT_ACTION_SURFACE_INTERACTIVE),
      },
      maxBlockSize: BOX_PROPS_META.maxBlockSize,
      maxInlineSize: BOX_PROPS_META.maxInlineSize,
      minBlockSize: BOX_PROPS_META.minBlockSize,
      minInlineSize: BOX_PROPS_META.minInlineSize,
      onClick: {
        options: ['e => void'],
        description: 'Click event handler.',
      },
      padding: BOX_PROPS_META.padding,
      paddingBlock: BOX_PROPS_META.paddingBlock,
      paddingInline: BOX_PROPS_META.paddingInline,
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
        ...BOX_PROPS_META.tag,
        defaultValue: DEFAULT_ACTION_SURFACE_TAG,
      },
      tagAttrs: BOX_PROPS_META.tagAttrs,
      tagRef: BOX_PROPS_META.tagRef,
      variant: BOX_PROPS_META.variant,
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
