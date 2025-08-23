import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { kebabCase } from 'lodash'

import { Flex } from '..'

function readVar(el: HTMLElement, key: string, bp?: string) {
  const baseName = bp ? `--neb-flex-${kebabCase(key)}-${bp}` : `--neb-flex-${kebabCase(key)}`
  const altBase = bp ? baseName : `--neb-flex-${kebabCase(key)}-base`
  return el.style.getPropertyValue(baseName) || el.style.getPropertyValue(altBase)
}

describe('Flex', () => {
  it('renders a div by default with the prefixed class', () => {
    render(<Flex data-testid="flex" />)
    const el = screen.getByTestId('flex')
    expect(el.tagName).toBe('DIV')
    expect(el).toHaveClass('neb-flex') // from withPrefix('flex')
  })

  it('merges user className', () => {
    render(<Flex className="custom" data-testid="flex" />)
    expect(screen.getByTestId('flex')).toHaveClass('neb-flex', 'custom')
  })

  it('supports polymorphic "as" (renders a section)', () => {
    render(
      <Flex as="section" aria-label="flex-section">
        content
      </Flex>
    )
    const el = screen.getByLabelText('flex-section')
    expect(el.tagName).toBe('SECTION')
    expect(el).toHaveClass('neb-flex')
    expect(el).toHaveTextContent('content')
  })

  it('sets base CSS vars for direction/wrap/justify/align', () => {
    render(<Flex data-testid="flex" direction="column" wrap="wrap" justify="space-between" align="center" />)
    const el = screen.getByTestId('flex')

    expect(readVar(el, 'direction').trim()).toBe('column')
    expect(readVar(el, 'wrap').trim()).toBe('wrap')
    expect(readVar(el, 'justify').trim()).toBe('space-between')
    expect(readVar(el, 'align').trim()).toBe('center')
  })

  it('sets responsive CSS vars when ResponsiveProp is provided', () => {
    render(
      <Flex
        data-testid="flex"
        direction={{ base: 'row', md: 'column' }}
        justify={{ base: 'flex-start', lg: 'center' }}
      />
    )
    const el = screen.getByTestId('flex')

    // base values
    expect(readVar(el, 'direction').trim()).toBe('row')
    expect(readVar(el, 'justify').trim()).toBe('flex-start')

    // breakpoint-specific values
    expect(readVar(el, 'direction', 'md').trim()).toBe('column')
    expect(readVar(el, 'justify', 'lg').trim()).toBe('center')
  })

  it('emits gap / rowGap / columnGap CSS vars correctly', () => {
    render(
      <Flex
        data-testid="flex"
        gap="1rem"
        rowGap={{ base: '4px', md: '8px' }}
        columnGap={{ base: '2px', xl: '12px' }}
      />
    )
    const el = screen.getByTestId('flex')

    expect(readVar(el, 'gap').trim()).toBe('1rem')
    expect(readVar(el, 'rowGap').trim()).toBe('4px')
    expect(readVar(el, 'rowGap', 'md').trim()).toBe('8px')
    expect(readVar(el, 'columnGap').trim()).toBe('2px')
    expect(readVar(el, 'columnGap', 'xl').trim()).toBe('12px')
  })

  it('passes through arbitrary props (id, data-attrs)', () => {
    render(<Flex id="foo" data-testid="flex" data-x="y" />)
    const el = screen.getByTestId('flex')
    expect(el).toHaveAttribute('id', 'foo')
    expect(el).toHaveAttribute('data-x', 'y')
  })

  it('does not clobber inline style prop (merges with CSS vars)', () => {
    render(<Flex data-testid="flex" style={{ opacity: 0.5 }} direction="row-reverse" />)
    const el = screen.getByTestId('flex')
    expect(el).toHaveStyle({ opacity: '0.5' })
    expect(readVar(el, 'direction').trim()).toBe('row-reverse')
  })
})
