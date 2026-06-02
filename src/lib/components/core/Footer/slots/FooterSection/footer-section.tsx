import { withPrefix } from 'lib/helpers'
import { Box, Flex, FooterSectionProps } from 'lib/index.core'

import { useFooterContext } from '../../FooterProvider'
import { DEFAULT_FOOTER_SECTION_FLEX } from './definitions'

export const FooterSection = ({
  // Box
  children,
  // Flex.Item
  tagAttrs,
  tagRef,
  flex = DEFAULT_FOOTER_SECTION_FLEX,
  alignSelf,
}: FooterSectionProps) => {
  const { borderIntent, padding, paddingBlock, paddingInline, paddingTop, paddingRight, paddingBottom, paddingLeft } =
    useFooterContext()

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
        drawable
        variant="outline"
        blockSize="100%"
        borderRadius="0px"
        intent={borderIntent}
        padding={padding}
        paddingBlock={paddingBlock}
        paddingInline={paddingInline}
        paddingTop={paddingTop}
        paddingRight={paddingRight}
        paddingBottom={paddingBottom}
        paddingLeft={paddingLeft}
        surface="dividing"
      >
        {children}
      </Box>
    </Flex.Item>
  )
}

FooterSection.displayName = 'Footer.Section'
