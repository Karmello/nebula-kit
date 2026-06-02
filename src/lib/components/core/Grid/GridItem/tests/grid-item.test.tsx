import { render, screen } from '@testing-library/react'
import { describe, expect,it } from 'vitest'

import { Grid } from '../..'

describe('Grid.Item', () => {
  it('renders as <div> by default', () => {
    render(
      <Grid>
        <Grid.Item tagAttrs={{ 'data-testid': 'elem' }}>content</Grid.Item>
      </Grid>
    )
    const el = screen.getByTestId('elem')
    expect(el.tagName.toLowerCase()).toBe('div')
  })
})
