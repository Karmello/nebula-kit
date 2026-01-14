import { noCase, pascalCase } from 'change-case'

import {
  CORE_PAGE_CATEGORIES,
  FOUNDATIONS_CATEGORIES,
  PageKey,
  PRO_PAGE_CATEGORIES,
} from 'client/definitions'

import { IconName } from 'lib/definitions'

type Option = {
  label: string
  tokens: string[]
  href: string
  iconName: IconName
}

export const OPTIONS: Option[] = []

FOUNDATIONS_CATEGORIES.forEach(c =>
  c.items.forEach(i =>
    i.sections.forEach(s => {
      const label = `${PageKey.foundations.replace('/', '')} / ${noCase(c.key)} / ${noCase(i.key)} / ${noCase(s.key)}`
      OPTIONS.push({
        label,
        tokens: label.toLowerCase().split(/\s+/),
        href: `${PageKey.foundations.replace('/', '')}/${c.key}/${i.key}/${s.key}`,
        iconName: 'book-open-text',
      })
    })
  )
)

CORE_PAGE_CATEGORIES.forEach(c =>
  c.items.forEach(i =>
    i.sections.forEach(s => {
      const label = `${PageKey.core.replace('/', '')} / ${noCase(c.key)} / ${pascalCase(i.key)} / ${noCase(s.key)}`
      OPTIONS.push({
        label,
        tokens: label.toLowerCase().split(/\s+/),
        href: `${PageKey.core.replace('/', '')}/${c.key}/${i.key}/${s.key}`,
        iconName: 'package',
      })
    })
  )
)

PRO_PAGE_CATEGORIES.forEach(c =>
  c.items.forEach(i =>
    i.sections.forEach(s => {
      const label = `${PageKey.pro.replace('/', '')} / ${noCase(c.key)} / ${pascalCase(i.key)} / ${noCase(s.key)}`
      OPTIONS.push({
        label,
        tokens: label.toLowerCase().split(/\s+/),
        href: `${PageKey.pro.replace('/', '')}/${c.key}/${i.key}/${s.key}`,
        iconName: 'star',
      })
    })
  )
)
