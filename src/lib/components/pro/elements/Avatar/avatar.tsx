import { Image } from 'lib/components'

import { AvatarProps } from './definitions'

export const Avatar = ({
  // Image
  tagAttrs,
  tagRef,
  src,
}: AvatarProps) => {
  return <Image tagAttrs={tagAttrs} tagRef={tagRef} src={src} />
}

Avatar.displayName = 'Avatar'
