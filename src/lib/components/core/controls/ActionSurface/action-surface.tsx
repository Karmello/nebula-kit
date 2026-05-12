import { Box } from 'lib/components'
import { WithSlots } from 'lib/components/core/internal'

import type { ActionSurfaceProps, ActionSurfaceTag } from './definitions'

export const ActionSurface = <T extends ActionSurfaceTag = 'button'>({
  // HtmlTag
  children,
  tag,
  tagAttrs,
  tagRef,
  // Box
  blockSize,
  minBlockSize,
  maxBlockSize,
  color,
  disabled,
  elevated,
  hidden,
  inlineSize,
  minInlineSize,
  maxInlineSize,
  intent,
  variant,
  // own
  selected,
}: ActionSurfaceProps<T>) => {
  return (
    <WithSlots<'ActionSurface.Heading' | 'ActionSurface.Description'>
      childrenToVerify={children}
      componentName="ActionSurface"
      slotsConfig={[{ name: 'ActionSurface.Heading', required: true }, { name: 'ActionSurface.Description' }]}
    >
      {({ slotsByName }) => {
        return (
          <Box
            tag={(tag || 'button') as any}
            tagAttrs={tagAttrs}
            tagRef={tagRef}
            drawable
            interactive
            blockSize={blockSize}
            minBlockSize={minBlockSize}
            maxBlockSize={maxBlockSize}
            color={color}
            disabled={disabled}
            elevated={elevated}
            hidden={hidden}
            inlineSize={inlineSize}
            minInlineSize={minInlineSize}
            maxInlineSize={maxInlineSize}
            intent={intent}
            surface={selected ? 'selected' : undefined}
            variant={variant}
          >
            {slotsByName['ActionSurface.Heading']}
            {slotsByName['ActionSurface.Description']}
          </Box>
        )
      }}
    </WithSlots>
  )
}

ActionSurface.displayName = 'ActionSurface'
