import { expectType, expectError } from 'tsd'

import { Icon } from '../'

// some props required
expectError(<Icon />)

// wrong iconName value not allowed
expectError(<Icon iconName="xyz" />)

// right iconName value allowed
expectType(<Icon iconName="check" />)

// wrong iconSize not allowed
expectError(<Icon iconName="check" iconSize={81} />)

// right iconSize allowed
expectType(<Icon iconName="check" iconSize={80} />)

// wrong iconIntent not allowed
expectError(<Icon iconName="check" iconSize={10} iconIntent="xyz" />)

// right iconIntent allowed
expectType(<Icon iconName="check" iconSize={10} iconIntent="primary" />)
