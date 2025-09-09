import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import { IconButton } from '..'

describe('IconButton', () => {
  it('renders with iconName', () => {
    render(<IconButton iconName="search" />)
    expect(document.querySelector('svg')).toBeInTheDocument()
  })
})
