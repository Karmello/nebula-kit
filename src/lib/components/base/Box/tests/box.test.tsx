import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Box } from 'lib/components'

describe('<Box />', () => {
  describe('basic rendering', () => {
    it('renders as <div> by default', () => {
      render(<Box elemProps={{ 'data-testid': 'elem' }} />)
      const el = screen.getByTestId('elem')
      expect(el.tagName.toLowerCase()).toBe('div')
    })

    it('renders as <a> tag', () => {
      render(<Box elem="a" elemProps={{ 'data-testid': 'elem' }} />)
      const el = screen.getByTestId('elem')
      expect(el.tagName.toLowerCase()).toBe('a')
    })

    it('renders as <button> tag', () => {
      render(<Box elem="button" elemProps={{ 'data-testid': 'elem' }} />)
      const el = screen.getByTestId('elem')
      expect(el.tagName.toLowerCase()).toBe('button')
    })
  })

  describe('data attrs', () => {
    it('adds data attr for variant', () => {
      render(<Box elemProps={{ 'data-testid': 'elem' }} variant="solid" />)
      const el = screen.getByTestId('elem')
      expect(el).toHaveAttribute('data-neb-box-variant', 'solid')
    })

    it('adds data attr for intent', () => {
      render(<Box elemProps={{ 'data-testid': 'elem' }} intent="primary" />)
      const el = screen.getByTestId('elem')
      expect(el).toHaveAttribute('data-neb-box-intent', 'primary')
    })
  })
})
