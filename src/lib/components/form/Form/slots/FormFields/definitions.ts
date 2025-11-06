import { FlexProps } from 'lib/components/layout'

export const DEFAULT_FORM_FIELDS_FLEX_DIRECTION: FormFieldsProps['flexDirection'] = 'column'
export const DEFAULT_FORM_FIELDS_ALIGN_ITEMS: FormFieldsProps['alignItems'] = 'stretch'
export const DEFAULT_FORM_FIELDS_GAP: FormFieldsProps['gap'] = 7

type PropsFromFlex = Omit<FlexProps<'div'>, 'tag'>

export type FormFieldsProps = PropsFromFlex
