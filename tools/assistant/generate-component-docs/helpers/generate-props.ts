import { formatOptions } from './format-options'

export const generateProps = (propsMeta: any) => {
  if (!propsMeta || typeof propsMeta !== 'object') return ''

  const rows = Object.entries(propsMeta).map(([prop, meta]: any) => {
    const options = formatOptions(meta.options)
    const defaultValue = meta.defaultValue ?? '-'
    const required = meta.isRequired ? 'yes' : 'no'
    const responsive = meta.isResponsive ? 'yes' : 'no'
    const description = meta.description || ''

    return `| ${prop} | ${options} | ${defaultValue} | ${required} | ${responsive} | ${description} |`
  })

  if (!rows.length) return ''

  return ['| Prop | Options | Default | Required | Responsive | Description |', '|---|---|---|---|---|---|', ...rows].join('\n')
}
