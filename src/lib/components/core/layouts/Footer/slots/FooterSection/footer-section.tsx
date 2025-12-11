import { Box, Flex } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { useFooterContext } from '../../FooterProvider'
import { DEFAULT_FOOTER_SECTION_FLEX, FooterSectionProps } from './definitions'

export const FooterSection = ({
  // HtmlTag
  children,
  tagAttrs,
  tagRef,
  // Flex
  flex = DEFAULT_FOOTER_SECTION_FLEX,
  alignSelf,
}: FooterSectionProps) => {
  const {
    borderIntent,
    padding,
    paddingBlock,
    paddingInline,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
  } = useFooterContext()

  return (
    <Flex.Item
      tag="section"
      tagRef={tagRef}
      tagAttrs={{
        ...tagAttrs,
        className: withPrefix('footer-section'),
      }}
      flex={flex}
      alignSelf={alignSelf}
    >
      <Box
        variant="outline"
        blockSize="100%"
        intent={borderIntent}
        padding={padding}
        paddingBlock={paddingBlock}
        paddingInline={paddingInline}
        paddingTop={paddingTop}
        paddingRight={paddingRight}
        paddingBottom={paddingBottom}
        paddingLeft={paddingLeft}
      >
        <Box intent="neutral">{children}</Box>
      </Box>
    </Flex.Item>
  )
}

FooterSection.displayName = 'Footer.Section'
