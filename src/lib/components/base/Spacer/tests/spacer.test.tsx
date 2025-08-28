import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Spacer } from '..'

describe('<Spacer />', () => {
  test('renders with defaults: role, aria-hidden, prefixed class, block display', () => {
    render(<Spacer />)

    // aria-hidden elements require { hidden: true } in getByRole
    const el = screen.getByRole('presentation', { hidden: true })

    expect(el).toHaveAttribute('aria-hidden', 'true')
    expect(el.className).toMatch(/spacer/i)
    expect((el as HTMLElement).style.display).toBe('block')
  })

  test('axis="inline" switches display to inline-block', () => {
    render(<Spacer axis="inline" />)
    const el = screen.getByRole('presentation', { hidden: true })

    expect((el as HTMLElement).style.display).toBe('inline-block')
  })

  test('renders no children (purely presentational)', () => {
    render(<Spacer />)
    const el = screen.getByRole('presentation', { hidden: true })

    expect(el).toBeEmptyDOMElement()
  })
})
