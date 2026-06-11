import { useRef, useState } from 'react'

import { Box, Button, PortalProps } from 'lib/components'
import { HTML_TAG_META } from 'lib/components/core/HtmlTag/meta'
import { ComponentMeta } from 'client/definitions'

import { PORTAL_PLACEMENTS } from './definitions'
import { DEFAULT_PORTAL_PLACEMENT, Portal } from './portal'

const PortalWrapper = ({ placement }: Partial<PortalProps>) => {
  const [visible, setVisible] = useState<boolean>(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  return (
    <>
      <Button tagRef={buttonRef} tagAttrs={{ onClick: () => setVisible(!visible) }}>
        Toggle portal
      </Button>
      {visible ? (
        <Portal anchorRef={buttonRef} placement={placement} offset={15}>
          <Box drawable variant="solid" color="blue" intent="primary" padding="25px">
            This is Portal content
          </Box>
        </Portal>
      ) : null}
    </>
  )
}

export const PORTAL_META = {
  Portal: {
    overview: {
      bundle: 'core',
      title: 'Low-level utility component for rendering content outside the normal document flow.',
      description:
        'Portal is a low-level utility component for rendering content outside the normal document flow, allowing UI elements to escape layout and stacking constraints while remaining visually connected to their trigger. When an anchorRef is provided, Portal also handles positioning and continuously tracks the anchor element to keep the content aligned during scrolling, layout changes and animations. This requires work to be performed on every frame while the Portal is mounted. Because of this, Portal should always be conditionally rendered, so that this work only runs while the content is visible.',
      features: [
        'renders children into a separate DOM node detached from the parent hierarchy',
        'enables floating UI patterns that must escape layout and stacking constraints',
        'supports positioning relative to an anchor element when needed',
        'serves as the foundation for dropdowns modals tooltips and other overlay components',
      ],
      composedOf: ['Box'],
      topLevelTags: ['div'],
    },
    props: {
      anchorRef: {
        options: ['RefObject'],
        description:
          'Reference to an element the portal positions itself relative to. When omitted the portal renders at the root without applying positioning.',
      },
      children: {
        ...HTML_TAG_META.HtmlTag.props.children,
        isRequired: true,
        description: 'Content rendered inside the portal.',
      },
      offset: {
        options: ['number'],
        description: 'Defines the distance (px) between the anchor element and the portal content along the placement axis.',
      },
      placement: {
        options: PORTAL_PLACEMENTS,
        defaultValue: DEFAULT_PORTAL_PLACEMENT,
        description: 'Defines the position of the portal content relative to the anchor element.',
      },
      tagAttrs: HTML_TAG_META.HtmlTag.props.tagAttrs,
      tagRef: HTML_TAG_META.HtmlTag.props.tagRef,
    },
    examples: [
      {
        code: `const [visible, setVisible] = useState<boolean>(false)
const buttonRef = useRef<HTMLButtonElement>(null)

return (
  <>
    <Button tagRef={buttonRef} tagAttrs={{ onClick: () => setVisible(!visible) }}>
      Toggle portal
    </Button>
    {visible ? (
      <Portal anchorRef={buttonRef} placement="bottom-start" offset={15}>
        <Box drawable variant="solid" color="blue" intent="primary" padding="25px">
          This is Portal content
        </Box>
      </Portal>
    ) : null}
  </>
)`,
        skip: true,
      },
      {
        description: 'Positioned above the anchor element, aligned to its left edge.',
        jsx: <PortalWrapper placement="top-start" />,
        noCode: true,
      },
      {
        description: 'Positioned above the anchor element, aligned to its center.',
        jsx: <PortalWrapper placement="top-center" />,
        noCode: true,
      },
      {
        description: 'Positioned above the anchor element, aligned to its right edge.',
        jsx: <PortalWrapper placement="top-end" />,
        noCode: true,
      },
      {
        description: 'Positioned to the right of the anchor element, aligned to its top edge.',
        jsx: <PortalWrapper placement="right-start" />,
        noCode: true,
      },
      {
        description: 'Positioned to the right of the anchor element, aligned to its center.',
        jsx: <PortalWrapper placement="right-center" />,
        noCode: true,
      },
      {
        description: 'Positioned to the right of the anchor element, aligned to its bottom edge.',
        jsx: <PortalWrapper placement="right-end" />,
        noCode: true,
      },
      {
        description: 'Positioned below the anchor element, aligned to its left edge.',
        jsx: <PortalWrapper placement="bottom-start" />,
        noCode: true,
      },
      {
        description: 'Positioned below the anchor element, aligned to its center.',
        jsx: <PortalWrapper placement="bottom-center" />,
        noCode: true,
      },
      {
        description: 'Positioned below the anchor element, aligned to its right edge.',
        jsx: <PortalWrapper placement="bottom-end" />,
        noCode: true,
      },
      {
        description: 'Positioned to the left of the anchor element, aligned to its top edge.',
        jsx: <PortalWrapper placement="left-start" />,
        noCode: true,
      },
      {
        description: 'Positioned to the left of the anchor element, aligned to its center.',
        jsx: <PortalWrapper placement="left-center" />,
        noCode: true,
      },
      {
        description: 'Positioned to the left of the anchor element, aligned to its bottom edge.',
        jsx: <PortalWrapper placement="left-end" />,
        noCode: true,
      },
    ],
    changelog: {
      '0.8.0': ['optimized position tracking logic for performance'],
      '0.3.0': ['updated public API'],
      '0.2.3': ['released'],
    },
  } satisfies ComponentMeta<PortalProps>,
}
