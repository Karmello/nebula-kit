import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { RoutingCategoryKey, RoutingItemKey } from 'client/types'

export type DocProps = {
  index: number
  categoryKey: RoutingCategoryKey
  itemKey: RoutingItemKey
}

export const Doc = ({ index, categoryKey, itemKey }: DocProps) => {
  const { t } = useTranslation()
  const push = useNavigate()

  // if (isComponentDoc) {
  //   try {
  //     PROPS_DATA = require(`../../../../docs/${pascalCase(itemKey)}/${itemKey}.props.json`)
  //   } catch {
  //     PROPS_DATA = []
  //   }
  // } else {
  //   try {
  //     Page = require(`../../../docs/${pascalCase(itemKey)}DocPage/${itemKey}-doc-page.tsx`)[
  //       `${pascalCase(itemKey)}DocPage`
  //     ]
  //   } catch {
  //     Page = null
  //   }
  // }

  return 'Doc component'
}
