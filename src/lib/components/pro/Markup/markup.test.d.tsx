import { createRef } from 'react'
import { expectError, expectType } from 'tsd'

import { Markup } from '../Markup'

// -------------------------------------
// required props
// -------------------------------------

expectType(<Markup>Markup</Markup>)

expectError(<Markup />)

// -------------------------------------
// unknown props
// -------------------------------------

expectError(<Markup unknown="v">Markup</Markup>)

// -------------------------------------
// root tag contract
// -------------------------------------

expectError(<Markup tag="section">Markup</Markup>)

// -------------------------------------
// tag attrs
// -------------------------------------

expectType(
  <Markup
    tagAttrs={{
      id: 'markup',
      onClick: () => null,
    }}
  >
    Markup
  </Markup>
)

// invalid div attrs
expectError(
  <Markup
    tagAttrs={{
      href: '/x',
    }}
  >
    Markup
  </Markup>
)

// -------------------------------------
// refs
// -------------------------------------

expectType(<Markup tagRef={createRef<HTMLDivElement>()}>Markup</Markup>)

expectError(<Markup tagRef={createRef<HTMLButtonElement>()}>Markup</Markup>)

// -------------------------------------
// children
// -------------------------------------

expectType(<Markup>Text content</Markup>)

expectType(
  <Markup>
    <>Fragment content</>
  </Markup>
)

expectType(<Markup>{null}</Markup>)

expectType(<Markup>{false}</Markup>)

expectType(<Markup>{123}</Markup>)

// -------------------------------------
// hidden primitive leakage
// -------------------------------------

expectError(<Markup color="blue">Markup</Markup>)

expectError(<Markup intent="primary">Markup</Markup>)

expectError(<Markup variant="solid">Markup</Markup>)

expectError(<Markup padding="md">Markup</Markup>)

expectError(<Markup margin="md">Markup</Markup>)

expectError(<Markup gap="md">Markup</Markup>)

expectError(<Markup flex="1">Markup</Markup>)

expectError(<Markup inlineSize="md">Markup</Markup>)
