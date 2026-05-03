import { HtmlTagProps } from 'lib/components'
import { RespValue, SpacingValue } from 'lib/definitions'

export const DEFAULT_SPACER_BLOCK_SIZE: SpacerProps['blockSize'] = 'md'

type PropsFromHtmlTag = Pick<HtmlTagProps<'div'>, 'tagAttrs' | 'tagRef'>

type SpacerOwnProps = {
  blockSize?: RespValue<SpacingValue>
}

export type SpacerProps = PropsFromHtmlTag & SpacerOwnProps
