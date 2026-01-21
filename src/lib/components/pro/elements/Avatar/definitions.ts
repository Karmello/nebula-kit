import { ImageProps } from 'lib/index.core'

type PropsFromImage = Pick<ImageProps, 'tagAttrs' | 'tagRef' | 'src'>

export type AvatarProps = PropsFromImage
