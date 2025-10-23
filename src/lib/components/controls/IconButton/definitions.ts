import { ButtonProps } from '../Button'
import { ButtonTag } from '../Button/definitions'
import { HtmlTagProps } from 'lib/components/utility'

type PropsFromHtmlTag<T extends ButtonTag = 'button'> = Pick<HtmlTagProps<T>, 'tag' | 'tagAttrs' | 'tagRef'>

type PropsFromButton<T extends ButtonTag = 'button'> = Pick<
  ButtonProps<T>,
  'variant' | 'intent' | 'labelIntent' | 'size' | 'disabled' | 'borderRadius'
> & {
  iconName: ButtonProps<T>['iconName']
}

export type IconButtonProps<T extends ButtonTag = 'button'> = PropsFromHtmlTag<T> & PropsFromButton<T>
