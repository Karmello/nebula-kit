import { BoxProps } from 'lib/index.core'

export const DEFAULT_FORM_FIELDS_FLEX_DIRECTION: FormFieldsProps['flexDirection'] = 'column'
export const DEFAULT_FORM_FIELDS_ALIGN_ITEMS: FormFieldsProps['alignItems'] = 'stretch'
export const DEFAULT_FORM_FIELDS_COLUMN_GAP: FormFieldsProps['columnGap'] = '10px'
export const DEFAULT_FORM_FIELDS_ROW_GAP: FormFieldsProps['rowGap'] = '20px'

type PropsFromBox = Pick<
  BoxProps<'div'>,
  | 'tagAttrs'
  | 'tagRef'
  | 'children'
  | 'flexDirection'
  | 'flexWrap'
  | 'justifyContent'
  | 'alignItems'
  | 'alignContent'
  | 'gap'
  | 'rowGap'
  | 'columnGap'
>

export type FormFieldsProps = PropsFromBox
