import { createRef } from 'react'
import { expectError, expectType } from 'tsd'

import { PasswordInput } from '../PasswordInput'

// -------------------------------------
// children
// -------------------------------------

expectType(<PasswordInput />)

// -------------------------------------
// unknown props
// -------------------------------------

expectError(<PasswordInput unknown="v" />)

// -------------------------------------
// root tag contract
// -------------------------------------

expectError(<PasswordInput tag="div" />)

// -------------------------------------
// tag attrs
// -------------------------------------

expectType(
  <PasswordInput
    tagAttrs={{
      id: 'password',
      name: 'password',
      autoFocus: true,
    }}
  />
)

expectType(
  <PasswordInput
    tagAttrs={{
      onKeyDown: () => null,
    }}
  />
)

// invalid attrs
expectError(
  <PasswordInput
    tagAttrs={{
      href: '/x',
    }}
  />
)

// -------------------------------------
// refs
// -------------------------------------

expectType(<PasswordInput tagRef={createRef<HTMLInputElement>()} />)

expectError(<PasswordInput tagRef={createRef<HTMLDivElement>()} />)

// -------------------------------------
// autocomplete
// -------------------------------------

expectType(<PasswordInput autoComplete="current-password" />)
expectType(<PasswordInput autoComplete="new-password" />)
expectType(<PasswordInput autoComplete="off" />)

// -------------------------------------
// color
// -------------------------------------

expectType(<PasswordInput color="gray" />)
expectType(<PasswordInput color="green" />)
expectType(<PasswordInput color="blue" />)
expectType(<PasswordInput color="red" />)
expectType(<PasswordInput color="pink" />)
expectType(<PasswordInput color="amber" />)

expectError(<PasswordInput color="wrong" />)

expectError(<PasswordInput color={{ md: 'wrong' }} />)

expectError(<PasswordInput color={{ wrong: 'blue' }} />)

// -------------------------------------
// intent
// -------------------------------------

expectType(<PasswordInput intent="neutral" />)
expectType(<PasswordInput intent="muted" />)
expectType(<PasswordInput intent="tertiary" />)
expectType(<PasswordInput intent="secondary" />)
expectType(<PasswordInput intent="primary" />)
expectType(<PasswordInput intent="inverse" />)

expectError(<PasswordInput intent="wrong" />)

expectError(<PasswordInput intent={{ md: 'wrong' }} />)

expectError(<PasswordInput intent={{ wrong: 'primary' }} />)

// -------------------------------------
// variant
// -------------------------------------

expectType(<PasswordInput variant="solid" />)
expectType(<PasswordInput variant="outline" />)
expectType(<PasswordInput variant="soft-outline" />)
expectType(<PasswordInput variant="ghost" />)

expectError(<PasswordInput variant="wrong" />)

expectError(<PasswordInput variant={{ md: 'wrong' }} />)

expectError(<PasswordInput variant={{ wrong: 'solid' }} />)

// -------------------------------------
// size
// -------------------------------------

expectType(<PasswordInput size="xs" />)
expectType(<PasswordInput size="sm" />)
expectType(<PasswordInput size="md" />)
expectType(<PasswordInput size="lg" />)
expectType(<PasswordInput size="xl" />)

// non-responsive
expectError(<PasswordInput size={{ md: 'lg' }} />)

// -------------------------------------
// booleans
// -------------------------------------

expectType(<PasswordInput disabled />)
expectType(<PasswordInput readOnly />)

expectError(<PasswordInput disabled="true" />)
expectError(<PasswordInput readOnly="true" />)

// non-responsive
expectError(<PasswordInput disabled={{ md: true }} />)

expectError(<PasswordInput readOnly={{ md: true }} />)

// -------------------------------------
// value contracts
// -------------------------------------

expectType(<PasswordInput value="secret" />)

expectType(<PasswordInput defaultValue="secret" />)

expectError(<PasswordInput value={123} />)

expectError(<PasswordInput defaultValue={123} />)

// -------------------------------------
// maxLength
// -------------------------------------

expectType(<PasswordInput maxLength={10} />)

expectError(<PasswordInput maxLength="10" />)

// -------------------------------------
// placeholder
// -------------------------------------

expectType(<PasswordInput placeholder="Enter password" />)

expectError(<PasswordInput placeholder={123} />)

// -------------------------------------
// callbacks
// -------------------------------------

expectType(
  <PasswordInput
    onChange={value => {
      expectType<string>(value)
    }}
  />
)

expectType(
  <PasswordInput
    onFocus={e => {
      expectType<React.FocusEvent<HTMLInputElement>>(e)
    }}
  />
)

expectType(
  <PasswordInput
    onBlur={e => {
      expectType<React.FocusEvent<HTMLInputElement>>(e)
    }}
  />
)

expectType(<PasswordInput onChange={() => null} />)

// -------------------------------------
// hidden primitive leakage
// -------------------------------------

expectError(<PasswordInput gap="24px" />)
expectError(<PasswordInput margin="24px" />)
expectError(<PasswordInput padding="24px" />)
expectError(<PasswordInput flex="1" />)
expectError(<PasswordInput justifyContent="center" />)
expectError(<PasswordInput alignItems="center" />)
expectError(<PasswordInput textAlign="center" />)
expectError(<PasswordInput fullWidth />)
expectError(<PasswordInput iconName="eye" />)
expectError(<PasswordInput dropdownPlacement="top-start" />)
