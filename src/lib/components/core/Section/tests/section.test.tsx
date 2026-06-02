import { render, screen } from '@testing-library/react'
import { describe, expect,it } from 'vitest'

import { Section } from 'lib/components'

describe('<Section />', () => {
  describe('basic rendering', () => {
    it('renders as <section> by default', () => {
      render(
        <Section heading="Heading" tagAttrs={{ 'data-testid': 'elem' }}>
          Content
        </Section>
      )
      const el = screen.getByTestId('elem')
      expect(el.tagName.toLowerCase()).toBe('section')
    })
  })
})
