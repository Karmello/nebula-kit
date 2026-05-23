import { JSX } from 'react'
import { FieldValues, SubmitErrorHandler, SubmitHandler, UseFormProps, UseFormReturn } from 'react-hook-form'

import { FlexProps, FlexItemProps } from 'lib/components'

export const DEFAULT_FORM_FLEX_DIRECTION: FormProps['flexDirection'] = 'column'
export const DEFAULT_FORM_ALIGN_ITEMS: FormProps['alignItems'] = 'stretch'
export const DEFAULT_FORM_COLUMN_GAP: FormProps['columnGap'] = '10px'
export const DEFAULT_FORM_ROW_GAP: FormProps['rowGap'] = '30px'

type FormOwnProps<TFieldValues extends FieldValues = FieldValues, TContext = any, TTransformedValues = TFieldValues> = {
  minLoadingTime?: number
  onResponse?: (res: unknown, formContext: UseFormReturn<TFieldValues, TContext, TTransformedValues>) => void
  resetOnSuccess?: boolean
}

type PropsFromFlexItem<TFieldValues extends FieldValues = FieldValues, TContext = any, TTransformedValues = TFieldValues> = {
  children:
    | FlexItemProps<'form'>['children']
    | ((formContext: UseFormReturn<TFieldValues, TContext, TTransformedValues>) => JSX.Element)
}

type PropsFromFlex = Pick<
  FlexProps<'form'>,
  'tagAttrs' | 'tagRef' | 'flexDirection' | 'flexWrap' | 'justifyContent' | 'alignItems' | 'gap' | 'columnGap' | 'rowGap'
>

export type FormProps<TFieldValues extends FieldValues = FieldValues, TContext = any, TTransformedValues = TFieldValues> = {
  useFormProps?: UseFormProps<TFieldValues, TContext, TTransformedValues>
  onValidSubmission?: SubmitHandler<TTransformedValues>
  onInvalidSubmission?: SubmitErrorHandler<TFieldValues>
} & PropsFromFlexItem<TFieldValues, TContext, TTransformedValues> &
  PropsFromFlex &
  FormOwnProps<TFieldValues, TContext, TTransformedValues>
