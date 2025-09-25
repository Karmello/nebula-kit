import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import { ButtonGroup } from '..'
import { Button } from '../../Button'

describe('ButtonGroup', () => {
  it('renders as <div> by default', () => {
    render(
      <ButtonGroup tagAttrs={{ 'data-testid': 'elem' }}>
        <Button>Button</Button>
      </ButtonGroup>
    )
    const el = screen.getByTestId('elem')
    expect(el.tagName.toLowerCase()).toBe('div')
  })
})
