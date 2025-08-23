import { render, screen } from '@testing-library/react'

import { Box } from '..'

describe('<Box /> runtime', () => {
  it('forwards className/style and supports "as"', () => {
    render(<Box as="section" data-testid="box" className="extra" style={{ outline: '1px solid red' }} />)
    const el = screen.getByTestId('box')
    expect(el.tagName).toBe('SECTION')
    expect(el).toHaveClass('extra')
    expect(el).toHaveStyle({ outline: '1px solid red' })
  })

  it('emits data attributes for variant/intent/interactive/disabled', () => {
    render(<Box data-testid="box" variant="ghost" intent="danger" interactive disabled />)
    const el = screen.getByTestId('box')
    expect(el).toHaveAttribute('data-box-variant', 'ghost')
    expect(el).toHaveAttribute('data-box-intent', 'danger')
    expect(el).toHaveAttribute('data-box-interactive', 'true')
    expect(el).toHaveAttribute('data-box-disabled', 'true')
  })

  it('writes CSS vars for padding (scalar token) with box prefix', () => {
    render(<Box data-testid="box" p={8} />)
    const style = screen.getByTestId('box').getAttribute('style') || ''
    expect(style).toContain('--neb-box-p-base: var(--neb-scale-8)')
  })

  it('writes CSS vars for padding (responsive object)', () => {
    render(<Box data-testid="box" p={{ base: 8, md: 16 }} />)
    const style = screen.getByTestId('box').getAttribute('style') || ''
    expect(style).toContain('--neb-box-p-base: var(--neb-scale-8)')
    expect(style).toContain('--neb-box-p-md: var(--neb-scale-16)')
  })

  it('writes CSS vars for px/py/pt/pr/pb/pl (so CSS can apply precedence)', () => {
    render(<Box data-testid="box" p={4} px={{ base: 6, lg: 12 }} pt={10} />)
    const style = screen.getByTestId('box').getAttribute('style') || ''
    expect(style).toContain('--neb-box-p-base: var(--neb-scale-4)')
    expect(style).toContain('--neb-box-px-base: var(--neb-scale-6)')
    expect(style).toContain('--neb-box-px-lg: var(--neb-scale-12)')
    expect(style).toContain('--neb-box-pt-base: var(--neb-scale-10)')
  })

  it('writes CSS vars for margin shorthands and sides', () => {
    render(<Box data-testid="box" m={2} my={{ md: 6 }} ml={12} />)
    const style = screen.getByTestId('box').getAttribute('style') || ''
    expect(style).toContain('--neb-box-m-base: var(--neb-scale-2)')
    expect(style).toContain('--neb-box-my-md: var(--neb-scale-6)')
    expect(style).toContain('--neb-box-ml-base: var(--neb-scale-12)')
  })

  it('emits fontSize (token or string), lineHeight (number|string), textAlign', () => {
    render(
      <Box
        data-testid="box"
        fontSize={{ base: 10, lg: 14 }}
        lineHeight={{ base: 1.3, md: '150%' }}
        textAlign={{ base: 'left', md: 'center' }}
      />
    )
    const style = screen.getByTestId('box').getAttribute('style') || ''
    expect(style).toContain('--neb-box-font-size-base: var(--neb-scale-10)')
    expect(style).toContain('--neb-box-font-size-lg: var(--neb-scale-14)')
    expect(style).toContain('--neb-box-line-height-base: 1.3')
    expect(style).toContain('--neb-box-line-height-md: 150%')
    expect(style).toContain('--neb-box-text-align-base: left')
    expect(style).toContain('--neb-box-text-align-md: center')
  })

  it('emits height/minHeight/maxHeight vars (token or string)', () => {
    render(<Box data-testid="box" height={{ base: 20, md: '40vh' }} minHeight={12} maxHeight={{ lg: 30 }} />)
    const style = screen.getByTestId('box').getAttribute('style') || ''
    expect(style).toContain('--neb-box-height-base: var(--neb-scale-20)')
    expect(style).toContain('--neb-box-height-md: 40vh')
    expect(style).toContain('--neb-box-min-height-base: var(--neb-scale-12)')
    expect(style).toContain('--neb-box-max-height-lg: var(--neb-scale-30)')
  })

  it('forwards unknown props to the DOM element', () => {
    render(<Box data-testid="box" aria-label="label" id="my-id" />)
    const el = screen.getByTestId('box')
    expect(el).toHaveAttribute('aria-label', 'label')
    expect(el).toHaveAttribute('id', 'my-id')
  })
})
