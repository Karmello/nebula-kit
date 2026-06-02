import { FlexProps } from 'lib/index.core'

export const DEFAULT_FORM_FIELDS_FLEX_DIRECTION: FormFieldsProps['flexDirection'] = 'column'
export const DEFAULT_FORM_FIELDS_ALIGN_ITEMS: FormFieldsProps['alignItems'] = 'stretch'
export const DEFAULT_FORM_FIELDS_COLUMN_GAP: FormFieldsProps['columnGap'] = '10px'
export const DEFAULT_FORM_FIELDS_ROW_GAP: FormFieldsProps['rowGap'] = '20px'

type PropsFromFlex = Omit<FlexProps<'div'>, 'tag' | 'display'>

export type FormFieldsProps = PropsFromFlex
