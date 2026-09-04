import { cloneElement } from 'react'

import { Box } from 'lib/components/core/Box'
import { WithSlots } from 'lib/components/shared'
import { DEFAULT_SWITCH_BREAKPOINT, NEB_LENGTH } from 'lib/constants'

import { DEFAULT_APP_FRAME_FOOTER_INTENT } from './constants'
import { type AppFrameFooterProps } from './types'

export const AppFrameFooter = ({
  children,
  tagAttrs,
  tagRef,
  color,
  intent = DEFAULT_APP_FRAME_FOOTER_INTENT,
  footerStackBreakpoint = DEFAULT_SWITCH_BREAKPOINT,
}: AppFrameFooterProps) => {
  return (
    <WithSlots<'AppFrame.FooterSection'>
      componentName="AppFrame.Footer"
      slotsConfig={[{ name: 'AppFrame.FooterSection', allowMultiple: true }]}
      childrenToVerify={children}
    >
      {({ slotsByName }) => {
        const appFrameFooterSectionSlots = slotsByName['AppFrame.FooterSection']

        return (
          <Box
            tag="footer"
            tagAttrs={tagAttrs}
            tagRef={tagRef}
            drawable
            bgMode="filled"
            borderMode="filled"
            borderRole="edge"
            borderBottomWidth={NEB_LENGTH.px_000}
            borderLeftWidth={NEB_LENGTH.px_000}
            borderRightWidth={NEB_LENGTH.px_000}
            borderRadius={NEB_LENGTH.px_000}
            color={color}
            intent={intent}
          >
            {appFrameFooterSectionSlots.length ? (
              <Box
                display="flex"
                flexDirection={{ base: 'column', [footerStackBreakpoint]: 'row' }}
                alignItems="stretch"
              >
                {appFrameFooterSectionSlots.map((footerSectionSlot, index) => (
                  <Box key={index} flex="1">
                    {cloneElement(footerSectionSlot as any, {
                      color,
                      intent,
                      footerStackBreakpoint,
                      isLast: index === appFrameFooterSectionSlots.length - 1,
                    })}
                  </Box>
                ))}
              </Box>
            ) : (
              children
            )}
          </Box>
        )
      }}
    </WithSlots>
  )
}

AppFrameFooter.displayName = 'AppFrame.Footer'
