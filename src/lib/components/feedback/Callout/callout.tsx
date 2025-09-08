import { Section, SectionProps } from 'lib/components'
import { SectionElem } from 'lib/definitions'

export type CalloutProps<E extends SectionElem> = SectionProps<E>

export const Callout = <E extends SectionElem = 'aside'>(props: CalloutProps<E>) => {
  return (
    <Section
      //  elem="aside"
      variant="outline"
      padding={10}
      {...props}
    />
  )
}
