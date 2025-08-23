import { JSX } from 'react'
import { expectType, expectError } from 'tsd'

import { IconButton, type IconButtonProps } from 'lib/components'

// minimal valid props
const okProps: IconButtonProps = {
  iconName: 'search',
  'aria-label': 'Add',
}

expectType<IconButtonProps>(okProps)

// missing iconName
expectError(<IconButton />)

// children are not allowed
expectError(
  <IconButton iconName="search" aria-label="Add">
    oops
  </IconButton>
)

// accepts standard button attributes
expectType(<IconButton iconName="search" aria-label="Add" type="submit" disabled />)

// rejects non-button-only attrs (e.g., href)
expectError(<IconButton iconName="search" aria-label="Add" href="#" />)

// size typing
expectType(<IconButton iconName="search" aria-label="Add" size="sm" />)
expectType(<IconButton iconName="search" aria-label="Add" size="md" />)
expectType(<IconButton iconName="search" aria-label="Add" size="lg" />)
expectError(<IconButton iconName="search" aria-label="Add" size="xl" />)

// variant/intent are passed through (don’t assert specific literals here;
// just ensure they’re accepted if present in ButtonOwnProps)
expectType(<IconButton iconName="search" aria-label="Add" variant="solid" intent="neutral" />)

// onClick handler type
const handleClick: React.MouseEventHandler<HTMLButtonElement> = e => {
  expectType<React.MouseEvent<HTMLButtonElement>>(e)
}
expectType(<IconButton iconName="search" aria-label="Add" onClick={handleClick} />)

// ref type (component uses a plain prop, not forwardRef)
const someRef: React.Ref<any> = { current: null }
expectType(<IconButton iconName="search" aria-label="Add" ref={someRef} />)

// className merge still allowed
expectType(<IconButton iconName="search" aria-label="Add" className="extra" />)

// ensure the component is constructible in JSX
expectType<JSX.Element>(<IconButton iconName="search" aria-label="Add" />)
