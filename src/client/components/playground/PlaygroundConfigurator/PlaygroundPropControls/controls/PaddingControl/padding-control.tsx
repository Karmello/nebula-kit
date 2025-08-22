import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { FieldLabels, Select, SelectProps } from 'lib/components'
import { Sizes } from 'lib/enums'
import type { Size } from 'lib/types'

export type PaddingControlProps = {
  value: Size
  onChange: (value: Size) => void
  label?: string
}

export const PaddingControl = ({ value, onChange, label }: PaddingControlProps) => {
  const { t } = useTranslation()

  const OPTIONS: SelectProps['options'] = useMemo(() => {
    return Object.keys(Sizes).map(size => ({ value: size, text: size }))
  }, [])

  return (
    <FieldLabels label={label || t('common.padding')} surfaceProps={{ size: 's' }}>
      <Select
        options={OPTIONS}
        value={value}
        onChange={value => onChange(value as Size)}
        surfaceProps={{ size: 's' }}
      />
    </FieldLabels>
  )
}
