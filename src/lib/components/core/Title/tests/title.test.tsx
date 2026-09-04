import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { Title } from '..'

describe('<Title />', () => {
  it('renders icon and text as siblings on the left by default', () => {
    render(<Title iconName="search">hello</Title>)

    const text = screen.getByText('hello')
    const root = text.parentElement

    expect(root?.children).toHaveLength(2)
    expect(root?.lastElementChild).toBe(text)
  })

  it('renders icon and text as siblings with the icon on the right', () => {
    render(
      <Title iconName="search" iconPlacement="right">
        hello
      </Title>
    )

    const text = screen.getByText('hello')
    const root = text.parentElement

    expect(root?.children).toHaveLength(2)
    expect(root?.firstElementChild).toBe(text)
  })
})
