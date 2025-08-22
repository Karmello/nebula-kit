import { useTranslation } from 'react-i18next'

import { Checkbox } from 'lib/components'
import { useAppStore } from 'client/store'

export const DistractionFreeModeCheckbox = () => {
  const { t } = useTranslation()

  const { distractionFreeMode, setDistractionFreeMode } = useAppStore()

  return (
    <Checkbox
      label={t('common.distractionFreeMode')}
      value={distractionFreeMode}
      onChange={setDistractionFreeMode}
      surfaceProps={{ size: 's' }}
    />
  )
}
