import { RoutingCategoryKey, RoutingItemKey } from 'client/definitions'

export const PLAYGROUND_ROUTING_CONFIG = [
  {
    key: RoutingCategoryKey.primitive,
    items: [RoutingItemKey.box],
  },
]

export const DOCS_ROUTING_CONFIG = [...PLAYGROUND_ROUTING_CONFIG]
