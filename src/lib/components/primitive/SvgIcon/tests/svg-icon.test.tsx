import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { SvgIcon } from '..'
import { getSvgIconComponent } from 'lib/icons'

const VALID_ICON_NAME = 'search' as const

describe('<SvgIcon /> (real icons)', () => {
  it('renders the concrete SVG component from the icon registry', () => {
    // Sanity: getSvgIconComponent should return a component that renders an <svg>
    const Concrete = getSvgIconComponent(VALID_ICON_NAME)
    const { container: sanity } = render(<Concrete />)
    expect(sanity.querySelector('svg')).toBeInTheDocument()

    // Now render through SvgIcon and ensure we still get an <svg> as the root element
    const { container } = render(<SvgIcon name={VALID_ICON_NAME} />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })

  it('applies width/height CSS variables when size is provided', () => {
    const { container } = render(<SvgIcon name={VALID_ICON_NAME} size={8} />)
    const svg = container.querySelector('svg') as SVGElement
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveStyle('width: var(--neb-scale-8)')
    expect(svg).toHaveStyle('height: var(--neb-scale-8)')
  })

  it('does not set width/height styles when size is omitted', () => {
    const { container } = render(<SvgIcon name={VALID_ICON_NAME} />)
    const svg = container.querySelector('svg') as SVGElement
    expect(svg).toBeInTheDocument()

    // JSDOM reports unset inline styles as empty string
    expect(svg.style.width).toBe('')
    expect(svg.style.height).toBe('')
  })

  it('supports other scale tokens (e.g., 12)', () => {
    const { container } = render(<SvgIcon name={VALID_ICON_NAME} size={12} />)
    const svg = container.querySelector('svg') as SVGElement
    expect(svg).toHaveStyle('width: var(--neb-scale-12)')
    expect(svg).toHaveStyle('height: var(--neb-scale-12)')
  })
})
