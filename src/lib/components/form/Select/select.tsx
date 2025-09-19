import { SelectProps } from './definitions'

export const Select = ({ value, onChange, options = [] }: SelectProps) => {
  return (
    <select value={value} onChange={e => onChange(e.target.value)}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  )
}
