import { ComponentMeta } from 'client/definitions'

export const applyResponsiveProps = (meta: Record<string, ComponentMeta<unknown>>) => {
  for (const key in meta) {
    const responsiveProps: string[] = []

    meta[key].props.forEach(prop => {
      if (prop.isResponsive) {
        responsiveProps.push(prop.name)
      }
    })

    meta[key].overview.responsiveProps = responsiveProps.length ? responsiveProps : undefined
  }
}
