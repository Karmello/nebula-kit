import { noCase, pascalCase } from 'change-case'

import { COMPONENT_CATEGORIES, FOUNDATIONS_CATEGORIES, PageKey } from 'client/definitions'

import { IconName } from 'lib/definitions'

type Option = {
  label: string
  tokens: string[]
  href: string
  iconName: IconName
}

export const RESIZE_DURATION = 200

export const OPTIONS: Option[] = []

FOUNDATIONS_CATEGORIES.forEach(c =>
  c.items.forEach(i =>
    i.sections.forEach(s => {
      const isVersion = /^v\d+\.\d+\.\d+$/.test(s.key)
      const sectionLabel = isVersion ? s.key : noCase(s.key)
      const label = `${PageKey.foundations.replace('/', '')} / ${noCase(c.key)} / ${noCase(i.key)} / ${sectionLabel}`
      OPTIONS.push({
        label,
        tokens: label.toLowerCase().match(/v\d+\.\d+\.\d+|[a-z0-9]+/g) ?? [],
        href: `${PageKey.foundations.replace('/', '')}/${c.key}/${i.key}/${s.key}`,
        iconName: 'book-open-text',
      })
    })
  )
)

COMPONENT_CATEGORIES.forEach(c =>
  c.items.forEach(i =>
    i.sections.forEach(s => {
      const label = `${PageKey.components.replace('/', '')} / ${noCase(c.key)} / ${pascalCase(i.key)} / ${noCase(s.key)}`
      OPTIONS.push({
        label,
        tokens: label.toLowerCase().split(/\s+/),
        href: `${PageKey.components.replace('/', '')}/${c.key}/${i.key}/${s.key}`,
        iconName: 'package',
      })
    })
  )
)
