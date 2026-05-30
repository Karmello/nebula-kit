import { Select, SelectProps } from 'lib/components'

export type PropsFromSelectKey = (typeof PROPS_FROM_SELECT)[number]

export const PROPS_FROM_SELECT = [
  'color',
  'disabled',
  'inlineSize',
  'intent',
  'size',
  'staticLabel',
  'variant',
  'visibleItemsCount',
] as const satisfies readonly (keyof SelectProps)[]

export const SELECT_PRESETS = [
  {
    name: 'Default',
    props: {
      //
    } as Record<PropsFromSelectKey, unknown>,
  },
  {
    name: 'Custom width',
    props: {
      inlineSize: '200px',
    } as Record<PropsFromSelectKey, unknown>,
  },
  {
    name: 'Blue primary',
    props: {
      inlineSize: '200px',
      intent: 'primary',
      color: 'blue',
    } as Record<PropsFromSelectKey, unknown>,
  },
]

export const SelectTemplate = (props: any) => (
  <Select {...props}>
    {Array.from({ length: 10 }, (v, k) => (
      <Select.Option key={k} value={`options-${k + 1}`}>
        Option {k + 1}
      </Select.Option>
    ))}
  </Select>
)
