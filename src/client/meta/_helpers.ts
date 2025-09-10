import { ComponentMeta } from 'client/definitions'

export const applyResponsiveProps = (meta: ComponentMeta<unknown>) => {
  const responsiveProps: typeof meta.overview.responsiveProps = []

  meta.props.forEach(prop => {
    if (prop.isResponsive) {
      responsiveProps.push(prop.name)
    }
  })

  meta.overview.responsiveProps = responsiveProps.length ? responsiveProps : undefined
}
