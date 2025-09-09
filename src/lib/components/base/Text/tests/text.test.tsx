import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Text } from 'lib/components'

describe('<Text />', () => {
  describe('html tag', () => {
    it('renders as <p> by default', () => {
      render(<Text elemProps={{ 'data-testid': 'elem' }}>text</Text>)
      const el = screen.getByTestId('elem')
      expect(el.tagName.toLowerCase()).toBe('p')
    })

    it('renders as <h1> tag', () => {
      render(
        <Text elemProps={{ 'data-testid': 'elem' }} typography="h1">
          text
        </Text>
      )
      const el = screen.getByTestId('elem')
      expect(el.tagName.toLowerCase()).toBe('h1')
    })
  })

  describe('icon', () => {
    it('renders with icon', () => {
      render(
        <Text elemProps={{ 'data-testid': 'elem' }} iconName="check">
          text
        </Text>
      )
      const el = screen.getByTestId('elem')
      expect(el).toHaveTextContent('text')
      expect(el.querySelector('svg')).toBeInTheDocument()
    })
  })

  describe('data attrs', () => {
    it('adds data attr for typography', () => {
      render(
        <Text elemProps={{ 'data-testid': 'elem' }} typography="caption">
          text
        </Text>
      )
      const el = screen.getByTestId('elem')
      expect(el).toHaveAttribute('data-neb-text-typography', 'caption')
    })
  })
})
