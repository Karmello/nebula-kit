import { ACTION_SURFACE_TAGS } from 'lib/constants'
import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../Box/meta'
import { Text } from '../Text'
import { ActionSurface } from './action-surface'
import { ActionSurfaceProps, DEFAULT_ACTION_SURFACE_RIPPLE } from './definitions'

export const ACTION_SURFACE_META = {
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
      ...BOX_META.Box.props,
      onClick: {
        options: ['e => void'],
        description: 'Click event handler.',
      },
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
        defaultValue: ACTION_SURFACE_TAGS[0],
      },
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
