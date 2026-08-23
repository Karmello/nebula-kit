import { Box } from '../Box'
import { Reveal } from './reveal'
import { type RevealProps } from './types'

export type PropsFromRevealKey = (typeof PROPS_FROM_REVEAL)[number]

export const PROPS_FROM_REVEAL = [
  'children',
  'color',
  'disabled',
  'intent',
  'label',
  'scale',
] as const satisfies readonly (keyof RevealProps)[]

export const REVEAL_PRESETS = [
  {
    name: 'Basic',
    props: {
      children: 'Hidden by default. Revealed with motion when the moment feels right.',
      label: 'Reveal me !',
    },
  },
] satisfies {
  name: string
  props: Pick<RevealProps, PropsFromRevealKey>
}[]

export const RevealTemplate = (props: any) => (
  <Reveal {...props}>
    <Box blockSize="80px" padding="20px">
      Hidden by default. Revealed with motion when the moment feels right.
    </Box>
  </Reveal>
)
