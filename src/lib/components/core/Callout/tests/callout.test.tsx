import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Callout } from 'lib/components'

describe('<Callout />', () => {
  describe('basic rendering', () => {
    it('renders as <div> by default', () => {
      render(<Callout content="Content" tagAttrs={{ 'data-testid': 'elem' }} />)
      const el = screen.getByTestId('elem')
      expect(el.tagName.toLowerCase()).toBe('div')
    })
  })
})
