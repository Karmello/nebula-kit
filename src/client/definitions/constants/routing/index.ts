import { pascalCase, sentenceCase } from 'change-case'
import { CompCategoryKey, CompKey, DocCategoryKey, DocKey } from 'client/definitions'

const PLAYGROUND_ROUTING_CONFIG = [
  {
    key: CompCategoryKey.base,
    items: [CompKey.box, CompKey.flex, CompKey.grid, CompKey.table, CompKey.spacer],
  },
  {
    key: CompCategoryKey.elements,
    items: [CompKey.text, CompKey.svgIcon, CompKey.divider],
  },
  {
    key: CompCategoryKey.controls,
    items: [CompKey.button, CompKey.iconButton],
  },
  {
    key: CompCategoryKey.layout,
    items: [
      CompKey.appFrame,
      CompKey.sidePanelLayout,
      CompKey.flow,
      CompKey.stack,
      CompKey.hStack,
      CompKey.vStack,
      CompKey.hAlign,
    ],
  },
  {
    key: CompCategoryKey.form,
    items: [CompKey.select],
  },
  {
    key: CompCategoryKey.navigation,
    items: [CompKey.appNavBar, CompKey.pageSideNav, CompKey.breadcrumb],
  },
  {
    key: CompCategoryKey.utility,
    items: [CompKey.nebKitProvider, CompKey.withIcon],
  },
]

const DOCS_ROUTING_CONFIG = [
  {
    key: DocCategoryKey.overview,
    items: [DocKey.foundations],
  },
  {
    key: DocCategoryKey.gettingStarted,
    items: [DocKey.installation],
  },
  ...PLAYGROUND_ROUTING_CONFIG,
]

export const PLAYGROUND_PAGES = PLAYGROUND_ROUTING_CONFIG.map(({ key, items }) => ({
  key,
  label: sentenceCase(key),
  items: items.map(key => ({ key, label: pascalCase(key) })),
}))

export const DOCS_PAGES = DOCS_ROUTING_CONFIG.map(({ key, items }) => ({
  key,
  label: sentenceCase(key),
  items: items.map(key => ({ key, label: pascalCase(key) })),
}))
