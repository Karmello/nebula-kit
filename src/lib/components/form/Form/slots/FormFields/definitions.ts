import { FlexProps } from 'lib/components/layout'

export const DEFAULT_FORM_FIELDS_FLEX_DIRECTION: FormFieldsProps['flexDirection'] = 'column'
export const DEFAULT_FORM_FIELDS_ALIGN_ITEMS: FormFieldsProps['alignItems'] = 'stretch'
export const DEFAULT_FORM_FIELDS_COLUMN_GAP: FormFieldsProps['columnGap'] = 10
export const DEFAULT_FORM_FIELDS_ROW_GAP: FormFieldsProps['rowGap'] = 20

type PropsFromFlex = Omit<FlexProps<'div'>, 'tag'>

export type FormFieldsProps = PropsFromFlex
