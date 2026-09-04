import { Avatar, type AvatarProps } from 'lib/index.pro'

export type PropsFromAvatarKey = (typeof PROPS_FROM_AVATAR)[number]

export const PROPS_FROM_AVATAR = [
  'initials',
  'shape',
  'size',
  'src',
] as const satisfies readonly (keyof AvatarProps)[]

export const AVATAR_PRESETS = [
  {
    name: 'Default',
    props: {
      src: '/imgs/mj23.webp',
    },
  },
] satisfies {
  name: string
  props: Pick<AvatarProps, PropsFromAvatarKey>
}[]

export const AvatarTemplate = (props: any) => <Avatar {...props} />
