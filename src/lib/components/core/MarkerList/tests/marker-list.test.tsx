import { render, screen } from '@testing-library/react'
import { describe, expect,it } from 'vitest'

import { MarkerList } from '..'

describe('<MarkerList />', () => {
  it('renders as ul by default', () => {
    render(
      <MarkerList tagAttrs={{ 'data-testid': 'elem' }}>
        <MarkerList.Item>Item</MarkerList.Item>
      </MarkerList>
    )
    const el = screen.getByTestId('elem')
    expect(el).toBeInTheDocument()
    expect(el.tagName.toLowerCase()).toBe('ul')
  })
})
