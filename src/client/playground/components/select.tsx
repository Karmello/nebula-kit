import { Select, type SelectProps } from 'lib/index.core'

export type PropsFromSelectKey = (typeof PROPS_FROM_SELECT)[number]

export const PROPS_FROM_SELECT = [
  'color',
  'disabled',
  'inlineSize',
  'intent',
  'scale',
  'staticLabel',
  'visibleItemsCount',
] as const satisfies readonly (keyof SelectProps)[]

export const SELECT_PRESETS = [
  {
    name: 'Default',
    props: {
      //
    },
  },
  {
    name: 'Custom width',
    props: {
      inlineSize: '200px',
    },
  },
  {
    name: 'Blue primary',
    props: {
      inlineSize: '200px',
      intent: 'primary',
      color: 'blue',
    },
  },
] satisfies {
  name: string
  props: Pick<SelectProps, PropsFromSelectKey>
}[]

export const SelectTemplate = (props: any) => (
  <Select {...props}>
    {Array.from({ length: 10 }, (v, k) => (
      <Select.Option key={k} value={`options-${k + 1}`}>
        {`Option ${k + 1}`}
      </Select.Option>
    ))}
  </Select>
)
