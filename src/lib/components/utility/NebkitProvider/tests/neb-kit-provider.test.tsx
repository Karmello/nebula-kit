import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'

import { NebkitProvider } from '..'
import { DEFAULT_NEBKIT_THEME } from '../definitions'

beforeEach(() => {
  document.documentElement.removeAttribute('data-theme')
  document.documentElement.style.removeProperty('--neb-border-radius')
})

describe('<NebkitProvider />', () => {
  it('renders its children', () => {
    render(
      <NebkitProvider>
        <div data-testid="child">hello</div>
      </NebkitProvider>
    )
    expect(screen.getByTestId('child')).toBeInTheDocument()
  })

  it('sets default theme on mount', async () => {
    render(
      <NebkitProvider>
        <div />
      </NebkitProvider>
    )
    expect(document.documentElement.getAttribute('data-theme')).toBe(DEFAULT_NEBKIT_THEME)
  })

  it('applies custom theme via defaultTheme prop', async () => {
    render(
      <NebkitProvider theme="dark">
        <div />
      </NebkitProvider>
    )
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark')
  })
})
