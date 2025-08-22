import { useTranslation } from 'react-i18next'

import { Section } from 'lib/components'

export const FeedbackPage = () => {
  const { t } = useTranslation()

  return (
    <Section
      headingText={t('common.feedback')}
      surfaceProps={{ size: 'xl' }}
      iconName="mail"
      iconColor="blue-3"
      topDividerSize="xs"
    >
      <div />
    </Section>
  )
}
