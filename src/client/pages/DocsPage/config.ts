import { sentenceCase, pascalCase } from 'change-case'

import { RoutingCategoryKey, RoutingItemKey } from 'client/types'

import { PLAYGROUND_ROUTING_CONFIG } from '../PlaygroundPage/config'

export const DOCS_ROUTING_CONFIG = [
  {
    key: RoutingCategoryKey.overview,
    items: [
      RoutingItemKey.introduction,
      RoutingItemKey.firststeps,
      RoutingItemKey.installation,
      RoutingItemKey.usage,
      RoutingItemKey.concepts,
    ],
  },
  {
    key: RoutingCategoryKey.foundations,
    items: [RoutingItemKey.colourpalette],
  },
  ...PLAYGROUND_ROUTING_CONFIG,
]

export const getDocsCategories = () => {
  return DOCS_ROUTING_CONFIG.map(({ key, items }, index) => ({
    key,
    label: sentenceCase(key),
    items: items.map(key => {
      return {
        key,
        label: index < 2 ? sentenceCase(key) : pascalCase(key),
      }
    }),
  }))
}
