export type SelectOption = {
  value: string
  label: string
}

export type SelectOwnProps = {
  value: string
  onChange: (value: string) => void
  options: SelectOption[]
}

export const Select = ({ value, onChange, options = [] }: SelectOwnProps) => {
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
