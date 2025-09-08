import { expectType, expectError } from 'tsd'

import { SvgIcon } from '../'

// some props required
expectError(<SvgIcon />)

// wrong iconName value not allowed
expectError(<SvgIcon iconName="xyz" />)

// right iconName value allowed
expectType(<SvgIcon iconName="check" />)

// wrong iconSize not allowed
expectError(<SvgIcon iconName="check" iconSize={81} />)

// right iconSize allowed
expectType(<SvgIcon iconName="check" iconSize={80} />)

// wrong iconIntent not allowed
expectError(<SvgIcon iconName="check" iconSize={10} iconIntent="xyz" />)

// right iconIntent allowed
expectType(<SvgIcon iconName="check" iconSize={10} iconIntent="primary" />)
