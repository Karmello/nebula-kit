import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import { Animate } from 'lib/components'

describe('<Animate />', () => {
  describe('basic rendering', () => {
    it('renders as <div> by default', () => {
      render(
        <Animate property="blockSize" visible={false} tagAttrs={{ 'data-testid': 'elem' }}>
          children
        </Animate>
      )
      const el = screen.getByTestId('elem')
      expect(el.tagName.toLowerCase()).toBe('div')
    })
  })
})
