import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import { Segment } from '..'
import { Button } from '../../../controls/Button'

describe('Segment', () => {
  it('renders as <div> by default', () => {
    render(
      <Segment tagAttrs={{ 'data-testid': 'elem' }}>
        <Button>Button</Button>
      </Segment>
    )
    const el = screen.getByTestId('elem')
    expect(el.tagName.toLowerCase()).toBe('div')
  })
})
