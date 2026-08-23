import { cloneElement } from 'react'

import { WithSlots } from 'lib/components/shared'
import { DEFAULT_SWITCH_BREAKPOINT } from 'lib/constants'
import { Box } from 'lib/index.core'

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
            variant="outline"
            color={color}
            intent={intent}
            borderRadius="0px"
            borderWidth="0px"
            borderTopWidth="2px"
            surface="dividing"
          >
            <Box drawable variant="solid" intent={intent} color={color} borderRadius="0px">
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
          </Box>
        )
      }}
    </WithSlots>
  )
}

AppFrameFooter.displayName = 'AppFrame.Footer'
