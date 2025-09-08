import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'

import { DEFAULT_THEME } from 'lib/definitions'

import { NebKitProvider } from '..'

beforeEach(() => {
  document.documentElement.removeAttribute('data-theme')
  document.documentElement.style.removeProperty('--neb-border-radius')
})

describe('<NebKitProvider />', () => {
  it('renders its children', () => {
    render(
      <NebKitProvider>
        <div data-testid="child">hello</div>
      </NebKitProvider>
    )
    expect(screen.getByTestId('child')).toBeInTheDocument()
  })

  it('sets default theme on mount', async () => {
    render(
      <NebKitProvider>
        <div />
      </NebKitProvider>
    )
    expect(document.documentElement.getAttribute('data-theme')).toBe(DEFAULT_THEME)
  })

  it('applies custom theme via defaultTheme prop', async () => {
    render(
      <NebKitProvider defaultTheme="dark">
        <div />
      </NebKitProvider>
    )
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark')
  })
})
