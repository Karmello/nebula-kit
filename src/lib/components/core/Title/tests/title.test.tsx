import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Title } from '..'

describe('<Title />', () => {
  it('renders icon on the left by default', () => {
    render(<Title iconName="search">hello</Title>)
    const el = screen.getByText('hello')
    expect(el.firstChild.nodeName.toLowerCase()).toBe('span')
  })

  it('renders icon on the right when iconPlacement="right"', () => {
    render(
      <Title iconName="search" iconPlacement="right">
        hello
      </Title>
    )
    const el = screen.getByText('hello')
    expect(el.lastChild.nodeName.toLowerCase()).toBe('span')
  })
})
