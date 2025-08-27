import { RoutingCategoryKey, RoutingItemKey } from 'client/definitions'

export const PLAYGROUND_ROUTING_CONFIG = [
  {
    key: RoutingCategoryKey.primitives,
    items: [
      RoutingItemKey.box,
      RoutingItemKey.flex,
      RoutingItemKey.grid,
      RoutingItemKey.table,
      RoutingItemKey.spacer,
    ],
  },
  {
    key: RoutingCategoryKey.elements,
    items: [RoutingItemKey.text, RoutingItemKey.svgIcon, RoutingItemKey.divider],
  },
  {
    key: RoutingCategoryKey.controls,
    items: [RoutingItemKey.button, RoutingItemKey.iconButton],
  },
  {
    key: RoutingCategoryKey.layout,
    items: [
      RoutingItemKey.appLayout,
      RoutingItemKey.flow,
      RoutingItemKey.stack,
      RoutingItemKey.hStack,
      RoutingItemKey.vStack,
      RoutingItemKey.hAlign,
    ],
  },
  {
    key: RoutingCategoryKey.form,
    items: [RoutingItemKey.select],
  },
  {
    key: RoutingCategoryKey.navigation,
    items: [RoutingItemKey.appNavBar, RoutingItemKey.pageSideNav, RoutingItemKey.breadcrumb],
  },
  {
    key: RoutingCategoryKey.utility,
    items: [RoutingItemKey.nebKitProvider, RoutingItemKey.withIcon],
  },
]

export const DOCS_ROUTING_CONFIG = [
  {
    key: RoutingCategoryKey.overview,
    items: [RoutingItemKey.installation],
  },
  ...PLAYGROUND_ROUTING_CONFIG,
]
