import { useTranslation } from 'react-i18next'

import { Section } from 'lib/components'

export const HomePage = () => {
  const { t } = useTranslation()

  return (
    <Section
      headingText={t('common.home')}
      surfaceProps={{ size: 'xl' }}
      iconName="puzzle piece"
      iconColor="blue-3"
      topDividerSize="xs"
    >
      <div />
    </Section>
  )
}
