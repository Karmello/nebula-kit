import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Resize } from 'lib/components'

describe('<Resize />', () => {
  describe('basic rendering', () => {
    it('renders as <div> by default', () => {
      render(
        <Resize property="blockSize" visible={false} tagAttrs={{ 'data-testid': 'elem' }}>
          children
        </Resize>
      )
      const el = screen.getByTestId('elem')
      expect(el.tagName.toLowerCase()).toBe('div')
    })
  })
})
