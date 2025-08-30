import {
  createElement,
  forwardRef,
  ElementType,
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  JSX,
} from 'react'

export type AsProp<E extends ElementType> = {
  as?: E
}

type PropsToOmit<E extends ElementType, P> = keyof (AsProp<E> & P)

export type PolymorphicProps<E extends ElementType, P> = P &
  AsProp<E> &
  Omit<ComponentPropsWithoutRef<E>, PropsToOmit<E, P>>

export type PolymorphicRef<E extends ElementType> = ComponentPropsWithRef<E>['ref']

export type PolymorphicComponent<AsUnion extends ElementType, DefaultE extends AsUnion, P> = {
  <E extends AsUnion = DefaultE>(
    props: PolymorphicProps<E, P> & { ref?: PolymorphicRef<E> }
  ): JSX.Element | null
  displayName?: string
}

export const createPolymorphic = <
  AsUnion extends ElementType,
  DefaultE extends AsUnion,
  ExtraProps extends Record<string, any> = object,
>(
  defaultTag: DefaultE,
  displayName?: string
): PolymorphicComponent<AsUnion, DefaultE, ExtraProps> => {
  const Comp = forwardRef<any, PolymorphicProps<any, ExtraProps>>(function Comp(props, ref) {
    const { as, ...rest } = props
    const Tag = (as || defaultTag) as ElementType
    return createElement(Tag, { ref, ...rest })
  }) as unknown as PolymorphicComponent<AsUnion, DefaultE, ExtraProps>

  Comp.displayName = displayName || `Polymorphic(${String(defaultTag)})`
  return Comp
}
