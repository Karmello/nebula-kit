import { ComponentProps, PropsWithoutRef } from 'react'

import { Flex } from 'lib/components'
import { WithSlots } from 'lib/components/shared'
import { BREAKPOINTS, DEFAULT_SWITCH_AT } from 'lib/constants'
import { withPrefix } from 'lib/helpers'
import { useScreen } from 'lib/hooks'
import { buildStaticDataset } from 'lib/internals/dom'
import { FooterTag } from 'lib/types'

import { DEFAULT_FOOTER_BORDER_INTENT, FooterProps } from './definitions'
import { FooterProvider } from './FooterProvider'

import './footer.scss'

export const Footer = <T extends FooterTag = 'div'>({
  // HtmlTag
  children,
  tag,
  tagAttrs,
  tagRef,
  // Box
  padding,
  paddingBlock,
  paddingInline,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  // own
  switchAt = DEFAULT_SWITCH_AT,
  borderIntent = DEFAULT_FOOTER_BORDER_INTENT,
}: FooterProps<T>) => {
  const { bp } = useScreen()

  const direction = BREAKPOINTS.slice(0, BREAKPOINTS.indexOf(switchAt)).includes(bp) ? 'column' : 'row'

  return (
    <WithSlots<'Footer.Section'>
      componentName="Footer"
      slotsConfig={[{ name: 'Footer.Section', required: true, allowMultiple: true }]}
      childrenToVerify={children}
    >
      {({ slotsByName }) => {
        return (
          <FooterProvider
            borderIntent={borderIntent}
            padding={padding}
            paddingBlock={paddingBlock}
            paddingInline={paddingInline}
            paddingTop={paddingTop}
            paddingRight={paddingRight}
            paddingBottom={paddingBottom}
            paddingLeft={paddingLeft}
          >
            <Flex
              tag={tag}
              tagAttrs={
                {
                  ...tagAttrs,
                  className: withPrefix('footer'),
                  ...buildStaticDataset('Footer', { direction }),
                } as PropsWithoutRef<ComponentProps<T>>
              }
              tagRef={tagRef}
              alignItems="stretch"
              flexDirection={{ base: 'column', [switchAt]: 'row' }}
            >
              {slotsByName['Footer.Section']}
            </Flex>
          </FooterProvider>
        )
      }}
    </WithSlots>
  )
}

Footer.displayName = 'Footer'
