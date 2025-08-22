import { sentenceCase, pascalCase } from 'change-case'

import { RoutingCategoryKey, RoutingItemKey } from 'client/types'

export const PLAYGROUND_ROUTING_CONFIG = [
  {
    key: RoutingCategoryKey.primitive,
    items: [RoutingItemKey.box],
  },
]

export const getPlaygroundCategories = () => {
  return PLAYGROUND_ROUTING_CONFIG.map(({ key, items }) => ({
    key,
    label: sentenceCase(key),
    items: items.map(key => {
      return {
        key,
        label: pascalCase(key),
        Component: require(`../../playground/${pascalCase(key)}Page`)[`${pascalCase(key)}Page`],
      }
    }),
  }))
}
