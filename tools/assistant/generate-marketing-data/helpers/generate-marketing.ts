import { PRICING_DATA } from '../../../../src/client/pages/app/PricingPage/definitions'

export const generateMarketing = () => {
  const lines: string[] = []

  lines.push('# NebulaKit Marketing Data')
  lines.push('')
  lines.push('## Pricing Plans')
  lines.push('')

  for (const plan of Object.values(PRICING_DATA.plans)) {
    lines.push(`### ${plan.title}`)
    lines.push('')
    lines.push(`- id: ${plan.id}`)
    lines.push(`- headline: ${plan.headline}`)
    lines.push(`- price: ${plan.price}`)
    lines.push('')
    lines.push(plan.description)
    lines.push('')
    lines.push('What you get:')
    lines.push('')

    if (plan.id === 'free') {
      lines.push('- Core bundle')
    } else {
      lines.push('- Core bundle')
      lines.push('- Pro bundle')
    }

    for (const item of plan.whatYouGet) {
      lines.push(`- ${item}`)
    }

    lines.push('')
  }

  lines.push('## Additional Information')
  lines.push('')

  for (const item of PRICING_DATA.additionalInfo) {
    lines.push(item)
  }

  lines.push('')

  return lines.join('\n')
}
