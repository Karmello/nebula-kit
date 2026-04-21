import { Select } from 'lib/components'

export const COMPONENT_TEMPLATES = {
  Select: (props: any) => (
    <Select {...props}>
      {Array.from({ length: 10 }, (v, k) => (
        <Select.Option key={k} value={`options-${k + 1}`}>
          Option {k + 1}
        </Select.Option>
      ))}
    </Select>
  ),
}
