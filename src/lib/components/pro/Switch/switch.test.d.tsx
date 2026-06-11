import { createRef } from 'react'
import { expectError, expectType } from 'tsd'

import { Switch } from '../Switch'

// -------------------------------------
// children
// -------------------------------------

expectType(<Switch />)

// -------------------------------------
// unknown props
// -------------------------------------

expectError(<Switch unknown="v" />)

// -------------------------------------
// root tag contract
// -------------------------------------

expectError(<Switch tag="button" />)

// -------------------------------------
// tag attrs
// -------------------------------------

expectType(
  <Switch
    tagAttrs={{
      id: 'switch',
      role: 'switch',
      onClick: () => null,
    }}
  />
)

// invalid div attrs
expectError(
  <Switch
    tagAttrs={{
      href: '/x',
    }}
  />
)

// -------------------------------------
// refs
// -------------------------------------

expectType(<Switch tagRef={createRef<HTMLDivElement>()} />)

expectError(<Switch tagRef={createRef<HTMLButtonElement>()} />)

// -------------------------------------
// checked
// -------------------------------------

expectType(<Switch checked />)

expectError(<Switch checked="true" />)

// non-responsive
expectError(<Switch checked={{ md: true }} />)

// -------------------------------------
// defaultChecked
// -------------------------------------

expectType(<Switch defaultChecked />)

expectError(<Switch defaultChecked="true" />)

// non-responsive
expectError(<Switch defaultChecked={{ md: true }} />)

// -------------------------------------
// disabled
// -------------------------------------

expectType(<Switch disabled />)

expectError(<Switch disabled="true" />)

// non-responsive
expectError(<Switch disabled={{ md: true }} />)

// -------------------------------------
// color
// -------------------------------------

expectType(<Switch color="gray" />)
expectType(<Switch color="green" />)
expectType(<Switch color="blue" />)
expectType(<Switch color="red" />)
expectType(<Switch color="pink" />)
expectType(<Switch color="amber" />)

expectType(<Switch color="blue" />)

expectError(<Switch color="wrong" />)

expectError(<Switch color={{ md: 'wrong' }} />)

expectError(<Switch color={{ wrong: 'blue' }} />)

// -------------------------------------
// intent
// -------------------------------------

expectType(<Switch intent="muted" />)
expectType(<Switch intent="tertiary" />)
expectType(<Switch intent="secondary" />)
expectType(<Switch intent="primary" />)

expectType(<Switch intent="primary" />)

// intentionally narrowed union
expectError(<Switch intent="neutral" />)
expectError(<Switch intent="inverse" />)
expectError(<Switch intent="wrong" />)

expectError(<Switch intent={{ md: 'wrong' }} />)

expectError(<Switch intent={{ wrong: 'primary' }} />)

// -------------------------------------
// size
// -------------------------------------

expectType(<Switch size="2xs" />)
expectType(<Switch size="xs" />)
expectType(<Switch size="sm" />)
expectType(<Switch size="md" />)
expectType(<Switch size="lg" />)
expectType(<Switch size="xl" />)

expectError(<Switch size="2xl" />)

// non-responsive
expectError(<Switch size={{ md: 'lg' }} />)

// -------------------------------------
// callbacks
// -------------------------------------

expectType(
  <Switch
    onChange={checked => {
      expectType<boolean>(checked)
    }}
  />
)

expectType(<Switch onChange={() => null} />)

// -------------------------------------
// hidden primitive leakage
// -------------------------------------

expectError(<Switch variant="solid" />)
expectError(<Switch gap="md" />)
expectError(<Switch margin="md" />)
expectError(<Switch padding="md" />)
expectError(<Switch flex="1" />)
expectError(<Switch justifyContent="center" />)
expectError(<Switch alignItems="center" />)
expectError(<Switch textAlign="center" />)
expectError(<Switch fullWidth />)
expectError(<Switch inlineSize="md" />)
expectError(<Switch iconName="check" />)
expectError(<Switch placeholder="Toggle" />)
expectError(<Switch value="on" />)
