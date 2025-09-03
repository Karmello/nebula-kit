import { Section, SectionElemUnion, SectionProps } from 'lib/components'

export type CalloutProps<E extends SectionElemUnion> = SectionProps<E>

export const Callout = <E extends SectionElemUnion = 'aside'>(props: CalloutProps<E>) => {
  return <Section elem="aside" variant="outline" intent="info" padding={10} {...props} />
}
