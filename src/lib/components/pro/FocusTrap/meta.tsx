import { useRef } from 'react'

import { Button, Flex, FocusTrap, FocusTrapProps } from 'lib/components'
import { HTML_TAG_META } from 'lib/components/core/HtmlTag/meta'
import { ComponentMeta } from 'client/definitions'

import { DEFAULT_FOCUS_TRAP_DISABLE_ESCAPE_ON_OUTSIDE_CLICK } from './definitions'

const FocusTrapWrapper = () => {
  const ref = useRef(null)

  return (
    <FocusTrap tagRef={ref} active>
      <Flex tagRef={ref} gap="xs">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
        <Button>Button 3</Button>
      </Flex>
    </FocusTrap>
  )
}

export const FOCUS_TRAP_META = {
  FocusTrap: {
    overview: {
      bundle: 'pro',
      title: 'Utility for trapping keyboard focus within a specific region.',
      features: [
        'traps keyboard focus within a specific DOM element while active',
        'restores focus to the previously focused element when deactivated',
        'detects ESC key presses and optional outside clicks to request dismissal',
        'adds no extra DOM, returning children unchanged',
      ],
      guidelines: [
        'does not manage or infer child focusability - focusable elements are determined by native browser behavior (tabIndex, disabled state and element semantics)',
        'commonly used for dialogs, modals, popovers and other transient UI that must not allow focus to escape while active',
      ],
    },
    props: {
      active: {
        options: ['boolean'],
        isRequired: true,
        description: 'Enables or disables the focus trap.',
      },
      children: {
        ...HTML_TAG_META.HtmlTag.props.children,
        isRequired: true,
        description: 'Content whose focus is controlled by the trap.',
      },
      disableEscapeOnOutsideClick: {
        options: ['boolean'],
        defaultValue: String(DEFAULT_FOCUS_TRAP_DISABLE_ESCAPE_ON_OUTSIDE_CLICK),
        description: 'Prevents outside clicks from being treated as escape attempts.',
      },
      onFocusEscape: {
        options: ['() => void'],
        description: 'Called when the user attempts to exit the trapped region (ESC key or clicking outside).',
      },
      tagRef: {
        ...HTML_TAG_META.HtmlTag.props.tagRef,
        isRequired: true,
        description: 'Ref to the DOM element that the trap should contain focus within.',
      },
    },
    examples: [
      {
        description: 'Focus stays locked between the three buttons while the trap is active.',
        jsx: <FocusTrapWrapper />,
        code: `// The tagRef must point to the same DOM element that visually contains the focusable content
const ref = useRef(null)

return (
  <FocusTrap tagRef={ref} active>
    <Flex tagRef={ref} gap="xs">
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Flex>
  </FocusTrap>
)`,
      },
    ],
    changelog: {
      '0.2.3': ['released'],
    },
  } satisfies ComponentMeta<FocusTrapProps>,
}
