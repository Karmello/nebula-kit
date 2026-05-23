import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import { Segment } from '..'
import { Button } from '../../Button'

describe('Segment', () => {
  it('renders as <div> by default', () => {
    render(
      <Segment tagAttrs={{ 'data-testid': 'elem' }}>
        <Segment.Item>
          <Button>Button</Button>
        </Segment.Item>
      </Segment>
    )
    const el = screen.getByTestId('elem')
    expect(el.tagName.toLowerCase()).toBe('div')
  })
})
