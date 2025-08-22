import { useMemo } from 'react'

import { Autocomplete, FieldLabels, SelectProps } from 'lib/components'
import { Colors } from 'lib/enums'
import type { Color } from 'lib/types'

export type ColorControlProps = {
  value: Color
  onChange: (value: Color) => void
  label: string
}

export const ColorControl = ({ value, onChange, label }: ColorControlProps) => {
  const OPTIONS: SelectProps['options'] = useMemo(() => {
    return Object.keys(Colors).map((color: Color) => ({
      value: color,
      text: color,
    }))
  }, [])

  return (
    <FieldLabels label={label} surfaceProps={{ size: 's' }}>
      <Autocomplete options={OPTIONS} value={value} onChange={onChange} surfaceProps={{ size: 's' }} />
    </FieldLabels>
  )
}
