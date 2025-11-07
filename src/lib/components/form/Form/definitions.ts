import { FieldValues, SubmitErrorHandler, SubmitHandler, UseFormProps } from 'react-hook-form'

import { HtmlTagProps, FlexProps } from 'lib/components'

export const DEFAULT_FORM_FLEX_DIRECTION: FormProps['flexDirection'] = 'column'
export const DEFAULT_FORM_ALIGN_ITEMS: FormProps['alignItems'] = 'stretch'
export const DEFAULT_FORM_GAP: FormProps['gap'] = 30

type PropsFromHtmlTag = Pick<HtmlTagProps<'form'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'form'>['children']
}

type PropsFromFlex = Pick<
  FlexProps<'form'>,
  'flexDirection' | 'flexWrap' | 'justifyContent' | 'alignItems' | 'gap' | 'columnGap' | 'rowGap'
>

export type FormProps<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
  TTransformedValues = TFieldValues,
> = {
  useFormProps?: UseFormProps<TFieldValues, TContext, TTransformedValues>
  onValidSubmission: SubmitHandler<TTransformedValues>
  onInvalidSubmission?: SubmitErrorHandler<TFieldValues>
} & PropsFromHtmlTag &
  PropsFromFlex
