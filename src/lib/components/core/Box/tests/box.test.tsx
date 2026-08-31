import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Box } from '../box'

describe('<Box />', () => {
  describe('basic rendering', () => {
    it('renders as <div> by default', () => {
      render(<Box tagAttrs={{ 'data-testid': 'elem' }} />)
      const el = screen.getByTestId('elem')
      expect(el.tagName.toLowerCase()).toBe('div')
    })

    it('renders as <a> tag', () => {
      render(<Box tag="a" tagAttrs={{ 'data-testid': 'elem' }} />)
      const el = screen.getByTestId('elem')
      expect(el.tagName.toLowerCase()).toBe('a')
    })

    it('renders as <button> tag', () => {
      render(<Box tag="button" tagAttrs={{ 'data-testid': 'elem' }} />)
      const el = screen.getByTestId('elem')
      expect(el.tagName.toLowerCase()).toBe('button')
    })
  })

  describe('data attrs', () => {
    it('adds data attr for intent', () => {
      render(<Box tagAttrs={{ 'data-testid': 'elem' }} intent="primary" />)
      const el = screen.getByTestId('elem')
      expect(el).toHaveAttribute('data-neb-box-intent', 'primary')
    })

    it('adds data attr for bg', () => {
      render(<Box tagAttrs={{ 'data-testid': 'elem' }} bg="filled" />)
      const el = screen.getByTestId('elem')
      expect(el).toHaveAttribute('data-neb-box-bg', 'filled')
    })

    it('adds data attr for bgRole', () => {
      render(<Box tagAttrs={{ 'data-testid': 'elem' }} bgRole="selection" />)
      const el = screen.getByTestId('elem')
      expect(el).toHaveAttribute('data-neb-box-bg-role', 'selection')
    })

    it('adds data attr for border', () => {
      render(<Box tagAttrs={{ 'data-testid': 'elem' }} border />)
      const el = screen.getByTestId('elem')
      expect(el).toHaveAttribute('data-neb-box-border', 'true')
    })

    it('adds data attr for borderRole', () => {
      render(<Box tagAttrs={{ 'data-testid': 'elem' }} borderRole="edge" />)
      const el = screen.getByTestId('elem')
      expect(el).toHaveAttribute('data-neb-box-border-role', 'edge')
    })

    it('adds data attr for text', () => {
      render(<Box tagAttrs={{ 'data-testid': 'elem' }} text="colored" />)
      const el = screen.getByTestId('elem')
      expect(el).toHaveAttribute('data-neb-box-text', 'colored')
    })
  })
})
