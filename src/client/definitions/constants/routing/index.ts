import { pascalCase, sentenceCase } from 'change-case'

import { CompCategoryKey, CompKey, CompSectionKey, DocCategoryKey, DocKey } from 'client/definitions'

const PLAYGROUND_CATEGORIES_CONFIG = [
  {
    key: CompCategoryKey.base,
    items: [
      { key: CompKey.box },
      { key: CompKey.flex },
      { key: CompKey.grid },
      { key: CompKey.table },
      { key: CompKey.spacer },
    ],
  },
  {
    key: CompCategoryKey.elements,
    items: [{ key: CompKey.text }, { key: CompKey.svgIcon }, { key: CompKey.divider }],
  },
  {
    key: CompCategoryKey.controls,
    items: [{ key: CompKey.button }, { key: CompKey.iconButton }],
  },
  {
    key: CompCategoryKey.layout,
    items: [
      { key: CompKey.appFrame },
      { key: CompKey.sidePanelLayout },
      { key: CompKey.flow },
      { key: CompKey.stack },
      { key: CompKey.hStack },
      { key: CompKey.vStack },
      { key: CompKey.hAlign },
    ],
  },
  {
    key: CompCategoryKey.containers,
    items: [{ key: CompKey.section }],
  },
  {
    key: CompCategoryKey.form,
    items: [{ key: CompKey.select }],
  },
  {
    key: CompCategoryKey.navigation,
    items: [{ key: CompKey.appNavBar }, { key: CompKey.pageSideNav }, { key: CompKey.breadcrumb }],
  },
  {
    key: CompCategoryKey.utility,
    items: [{ key: CompKey.nebKitProvider }, { key: CompKey.withIcon }],
  },
]

const DOCS_SECTIONS = Object.keys(CompSectionKey).map(key => ({
  key,
  label: sentenceCase(key),
}))

const DOCS_CATEGORIES_CONFIG = [
  {
    key: DocCategoryKey.overview,
    items: [{ key: DocKey.foundations, sections: [{ key: 'section1' }] }],
  },
  {
    key: DocCategoryKey.gettingStarted,
    items: [{ key: DocKey.installation, sections: [{ key: 'section1' }] }],
  },
  ...PLAYGROUND_CATEGORIES_CONFIG.map(({ key, items }) => ({
    key,
    items: items.map(item => ({
      ...item,
      sections: DOCS_SECTIONS,
    })),
  })),
]

export const PLAYGROUND_CATEGORIES = PLAYGROUND_CATEGORIES_CONFIG.map(({ key, items }) => ({
  key,
  label: sentenceCase(key),
  items: items.map(({ key }) => ({ key, label: pascalCase(key) })),
}))

export const DOCS_CATEGORIES = DOCS_CATEGORIES_CONFIG.map(({ key, items }) => ({
  key,
  label: sentenceCase(key),
  items: items.map(({ key, sections }) => ({
    key,
    label: pascalCase(key),
    sections: sections.map(({ key }) => ({
      key,
      label: sentenceCase(key),
    })),
  })),
}))
