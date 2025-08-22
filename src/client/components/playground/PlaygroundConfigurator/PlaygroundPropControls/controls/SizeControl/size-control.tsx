import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { FieldLabels, Select, SelectProps } from 'lib/components'
import { MacroSizes } from 'lib/enums'
import type { MacroSize } from 'lib/types'

export type SizeControlProps = {
  value: MacroSize
  onChange: (value: MacroSize) => void
  label?: string
}

export const SizeControl = ({ value, onChange, label }: SizeControlProps) => {
  const { t } = useTranslation()

  const OPTIONS: SelectProps['options'] = useMemo(() => {
    return Object.keys(MacroSizes).map(size => ({ value: size, text: size }))
  }, [])

  return (
    <FieldLabels label={label || t('common.size')} surfaceProps={{ size: 's' }}>
      <Select
        options={OPTIONS}
        value={value}
        onChange={value => onChange(value as MacroSize)}
        surfaceProps={{ size: 's' }}
      />
    </FieldLabels>
  )
}
