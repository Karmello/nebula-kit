import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import { Flex } from '..'

describe('Flex', () => {
  it('renders with default classname and children', () => {
    render(
      <Flex elemProps={{ 'data-testid': 'flex' }}>
        <div>child</div>
      </Flex>
    )

    const flex = screen.getByTestId('flex')
    expect(flex).toBeInTheDocument()
    expect(flex).toHaveClass('neb-flex')
  })

  it('applies elem prop', () => {
    render(
      <Flex elem="section" elemProps={{ 'data-testid': 'flex' }}>
        section child
      </Flex>
    )
    const flex = screen.getByTestId('flex')
    expect(flex.tagName.toLowerCase()).toBe('section')
  })
})

describe('FlexItem', () => {
  it('renders with default classname and children', () => {
    render(<Flex.Item elemProps={{ 'data-testid': 'flex-item' }}>item</Flex.Item>)
    const item = screen.getByTestId('flex-item')
    expect(item).toBeInTheDocument()
    expect(item).toHaveClass('neb-flex-item')
  })

  it('accepts elem prop', () => {
    render(
      <Flex.Item elem="li" elemProps={{ 'data-testid': 'flex-item' }}>
        list item
      </Flex.Item>
    )
    const item = screen.getByTestId('flex-item')
    expect(item.tagName.toLowerCase()).toBe('li')
  })
})
