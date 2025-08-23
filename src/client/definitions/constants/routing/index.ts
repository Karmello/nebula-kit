import { RoutingCategoryKey, RoutingItemKey } from 'client/definitions'

export const PLAYGROUND_ROUTING_CONFIG = [
  {
    key: RoutingCategoryKey.primitive,
    items: [RoutingItemKey.box, RoutingItemKey.flex, RoutingItemKey.grid, RoutingItemKey.table],
  },
  {
    key: RoutingCategoryKey.controls,
    items: [RoutingItemKey.button],
  },
  {
    key: RoutingCategoryKey.elements,
    items: [RoutingItemKey.text],
  },
  {
    key: RoutingCategoryKey.layout,
    items: [RoutingItemKey.stack, RoutingItemKey.hstack, RoutingItemKey.vstack],
  },
  {
    key: RoutingCategoryKey.utility,
    items: [RoutingItemKey.nebKitProvider],
  },
]

export const DOCS_ROUTING_CONFIG = [...PLAYGROUND_ROUTING_CONFIG]
