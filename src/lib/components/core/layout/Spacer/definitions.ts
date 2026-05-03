import { HtmlTagProps } from 'lib/components'
import { RespValue, Spacings } from 'lib/definitions'

export const DEFAULT_SPACER_BLOCK_SIZE: SpacerProps['blockSize'] = 'md'

type PropsFromHtmlTag = Pick<HtmlTagProps<'div'>, 'tagAttrs' | 'tagRef'>

type SpacerOwnProps = {
  blockSize?: RespValue<Spacings | string>
}

export type SpacerProps = PropsFromHtmlTag & SpacerOwnProps
