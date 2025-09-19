import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import { DEFAULT_SVG_ICON_SIZE, SvgIcon } from '..'

describe('<SvgIcon />', () => {
  it('renders SVG component', () => {
    render(<SvgIcon data-testid="icon" iconName="search" />)
    const svg = screen.getByTestId('icon')
    expect(svg).toBeInTheDocument()
  })

  it('applies default size and intent', () => {
    render(<SvgIcon data-testid="icon" iconName="search" />)
    const el = screen.getByTestId('icon')
    expect(el).toHaveStyle({
      width: `var(--neb-scale-${DEFAULT_SVG_ICON_SIZE})`,
      height: `var(--neb-scale-${DEFAULT_SVG_ICON_SIZE})`,
    })
  })

  it('applies custom size and intent', () => {
    render(<SvgIcon data-testid="icon" iconName="search" iconSize={20} iconIntent="primary" />)
    const el = screen.getByTestId('icon')
    expect(el).toHaveStyle({
      width: 'var(--neb-scale-20)',
      height: 'var(--neb-scale-20)',
      color: 'var(--neb-text-primary)',
    })
  })
})
