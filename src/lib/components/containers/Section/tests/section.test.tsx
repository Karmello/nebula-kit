import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Section } from 'lib/components'

describe('<Section />', () => {
  describe('basic rendering', () => {
    it('renders as <section> by default', () => {
      render(
        <Section headingText="Heading" tagAttrs={{ 'data-testid': 'elem' }}>
          Content
        </Section>
      )
      const el = screen.getByTestId('elem')
      expect(el.tagName.toLowerCase()).toBe('section')
    })
  })
})
