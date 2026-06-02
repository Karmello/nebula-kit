import { expectError,expectType } from 'tsd'

import { Avatar } from '../Avatar'

//
// basic rendering
//

expectType(<Avatar />)

expectType(<Avatar src="avatar.png" />)

expectType(<Avatar initials="JD" />)

//
// enum validation
//

expectError(<Avatar shape="circle" />)

expectError(<Avatar size="3xl" />)

expectError(<Avatar loading="instant" />)

expectError(<Avatar objectFit="stretch" />)

expectError(<Avatar fetchPriority="medium" />)

//
// responsive inherited props
//

expectType(<Avatar objectFit={{ base: 'cover', lg: 'contain' }} />)

expectType(<Avatar objectPosition={{ base: 'center', lg: 'top' }} />)

//
// intentionally NON-responsive props
//

expectError(<Avatar size={{ base: 'sm' }} />)

expectError(<Avatar shape={{ base: 'round' }} />)

expectError(<Avatar loading={{ base: 'lazy' }} />)

//
// invalid responsive breakpoint keys
//

expectError(<Avatar objectFit={{ mobile: 'cover' }} />)

expectError(<Avatar objectPosition={{ desktop: 'center' }} />)

//
// hidden primitive leakage
//

expectError(<Avatar margin="md" />)

expectError(<Avatar padding="md" />)

expectError(<Avatar gap="md" />)

expectError(<Avatar drawable />)

expectError(<Avatar variant="solid" />)

expectError(<Avatar intent="primary" />)

expectError(<Avatar flexDirection="column" />)

expectError(<Avatar typography="h1" />)

expectError(<Avatar inlineSize="100px" />)

expectError(<Avatar tag="img" />)

//
// root contract
//

expectType(
  <Avatar
    tagAttrs={{
      id: 'avatar',
    }}
  />
)
