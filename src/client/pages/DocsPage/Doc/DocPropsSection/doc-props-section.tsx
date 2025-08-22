import { useTranslation } from 'react-i18next'
import { sentenceCase } from 'change-case'

import { Icon, Section, Table } from 'lib/components'

export type ComponentPropsMeta = {
  name: string
  type: string
  optional: boolean
  options: string[]
}

export type DocPropsSectionProps = {
  componentName: string
  data: ComponentPropsMeta[]
}

export const DocPropsSection = ({ componentName, data }: DocPropsSectionProps) => {
  const { t } = useTranslation()

  return (
    <Section headingText={`${sentenceCase(componentName)}Props`}>
      <Table
        head={{
          data: [
            { text: t('common.name') },
            { text: t('common.type') },
            { text: t('common.required') },
            { text: t('common.values') },
          ],
        }}
        body={{
          data: data.map(propMeta => ({
            data: [
              { text: propMeta.name },
              { text: propMeta.type, color: 'blue-5' },
              {
                CustomComponent: () => (
                  <Icon
                    name={propMeta.optional ? 'close' : 'check'}
                    surfaceProps={{ color: propMeta.optional ? 'red-2' : 'blue-4' }}
                  />
                ),
              },
              {
                text: propMeta.options.map(option => `"${option}"`).join(', '),
              },
            ],
          })),
        }}
      />
    </Section>
  )
}
