import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import { Flex } from '../..'

describe('Flex.Item', () => {
  it('renders as <div> by default', () => {
    render(
      <Flex>
        <Flex.Item tagAttrs={{ 'data-testid': 'elem' }}>content</Flex.Item>
      </Flex>
    )
    const el = screen.getByTestId('elem')
    expect(el.tagName.toLowerCase()).toBe('div')
  })
})
