import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { pascalCase, sentenceCase } from 'change-case'

import { Button, Divider, Section } from 'lib/components'
import { RoutingCategoryKey, RoutingItemKey } from 'client/types'

import { DocPropsSection } from './DocPropsSection'

export type DocProps = {
  index: number
  categoryKey: RoutingCategoryKey
  itemKey: RoutingItemKey
}

export const Doc = ({ index, categoryKey, itemKey }: DocProps) => {
  const { t } = useTranslation()
  const push = useNavigate()

  const isComponentDoc = index >= 2

  let PROPS_DATA = []
  let Page

  if (isComponentDoc) {
    try {
      PROPS_DATA = require(`../../../../docs/${pascalCase(itemKey)}/${itemKey}.props.json`)
    } catch {
      PROPS_DATA = []
    }
  } else {
    try {
      Page = require(`../../../docs/${pascalCase(itemKey)}DocPage/${itemKey}-doc-page.tsx`)[
        `${pascalCase(itemKey)}DocPage`
      ]
    } catch {
      Page = null
    }
  }

  return (
    <Section
      headingText={isComponentDoc ? pascalCase(itemKey) : sentenceCase(itemKey)}
      iconName={isComponentDoc ? 'code' : undefined}
      iconColor="blue-4"
    >
      {isComponentDoc ? (
        <>
          <Button
            width="AUTO"
            surfaceProps={{ size: 's' }}
            nativeButtonProps={{
              onClick: () => push(`/playground/${categoryKey}/${itemKey}`),
            }}
            iconProps={{ name: 'arrow right', surfaceProps: { color: 'blue-3' } }}
            flexContainerProps={{ flexDirection: 'row-reverse' }}
          >
            {t('common.playground')}
          </Button>
          <Divider size="m" />
          <DocPropsSection componentName={itemKey} data={PROPS_DATA} />
        </>
      ) : Page ? (
        <Page />
      ) : null}
    </Section>
  )
}
