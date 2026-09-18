import { Box } from 'lib/components/core/Box/box'
import { NEB_LENGTH } from 'lib/constants'
import { type DocExample } from 'client/definitions'

export const BOX_EXAMPLES: DocExample[] = [
  {
    jsx: <Box>Default box</Box>,
    description:
      'By default Box is non-drawable. It does not paint any colors and serves only as a structural container for layout and composition.',
  },
  {
    jsx: (
      <Box drawable bgMode="filled" intent="primary" color="blue">
        Box is a block
      </Box>
    ),
    description: 'Drawable Box renders as a block element that stretches to full width by default.',
  },
  {
    jsx: (
      <Box drawable bgMode="filled" intent="primary" color="blue" padding={NEB_LENGTH.px_024}>
        Padded box
      </Box>
    ),
    description: 'Box with padding applied.',
  },
  {
    jsx: (
      <Box
        drawable
        bgMode="filled"
        intent="primary"
        color="blue"
        padding={NEB_LENGTH.px_024}
        textAlign="center"
      >
        Centered content
      </Box>
    ),
    description: 'Box with the content centered.',
  },
  {
    jsx: (
      <Box
        drawable
        bgMode="filled"
        intent="primary"
        color="blue"
        padding={NEB_LENGTH.px_024}
        display="inline-block"
      >
        Box as inline block
      </Box>
    ),
    description: "Box rendered as inline-block, so it's only as wide as its content.",
  },
  {
    jsx: (
      <Box interactive bgMode="filled" intent="primary" color="blue" padding={NEB_LENGTH.px_024}>
        Interactive Box
      </Box>
    ),
    description: 'Box with interactive behavior.',
    isOverviewSnippet: true,
  },
  {
    jsx: (
      <Box
        interactive
        disabled
        bgMode="filled"
        intent="primary"
        color="blue"
        padding={NEB_LENGTH.px_024}
      >
        Disabled Box
      </Box>
    ),
    description: 'Interactive Box in disabled state.',
  },
]
