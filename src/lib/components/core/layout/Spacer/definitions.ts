import { HtmlTagProps } from 'lib/components'
import { RespValue, Spacings } from 'lib/definitions'

export const DEFAULT_SPACER_SIZE: SpacerProps['size'] = 'md'

type PropsFromHtmlTag = Pick<HtmlTagProps<'div'>, 'tagAttrs' | 'tagRef'>

type SpacerOwnProps = {
  size?: RespValue<Spacings | string>
}

export type SpacerProps = PropsFromHtmlTag & SpacerOwnProps
