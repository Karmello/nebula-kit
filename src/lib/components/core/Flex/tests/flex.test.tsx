import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Flex } from '..'

describe('Flex', () => {
  it('renders with default classname and children', () => {
    render(
      <Flex tagAttrs={{ 'data-testid': 'flex' }}>
        <div>child</div>
      </Flex>
    )

    const flex = screen.getByTestId('flex')
    expect(flex).toBeInTheDocument()
    expect(flex).toHaveClass('neb-flex')
  })

  it('renders as <div> by default', () => {
    render(<Flex tagAttrs={{ 'data-testid': 'elem' }}>children</Flex>)
    const el = screen.getByTestId('elem')
    expect(el.tagName.toLowerCase()).toBe('div')
  })

  it('applies tag prop', () => {
    render(
      <Flex tag="section" tagAttrs={{ 'data-testid': 'flex' }}>
        section child
      </Flex>
    )
    const flex = screen.getByTestId('flex')
    expect(flex.tagName.toLowerCase()).toBe('section')
  })
})

describe('FlexItem', () => {
  it('renders with default classname and children', () => {
    render(<Flex.Item tagAttrs={{ 'data-testid': 'flex-item' }}>item</Flex.Item>)
    const item = screen.getByTestId('flex-item')
    expect(item).toBeInTheDocument()
    expect(item).toHaveClass('neb-flex-item')
  })

  it('accepts tag prop', () => {
    render(
      <Flex.Item tag="li" tagAttrs={{ 'data-testid': 'flex-item' }}>
        list item
      </Flex.Item>
    )
    const item = screen.getByTestId('flex-item')
    expect(item.tagName.toLowerCase()).toBe('li')
  })
})
