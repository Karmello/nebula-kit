import META from 'client/meta'

import { PLAYGROUND_MAP, Props, State } from './definitions'

export const getInitialState = (): State => {
  const state: State = {
    displayProps: true,
    activeComponent: 'Box',
    components: {},
  }

  Object.keys(META)
    .filter(componentName => Object.keys(PLAYGROUND_MAP).includes(componentName))
    .forEach(componentName => {
      const componentPropNames = Object.keys(META[componentName][componentName].props).filter(name =>
        PLAYGROUND_MAP[componentName].includes(name)
      )

      const props: Props = {}

      componentPropNames.forEach(propName => {
        const { options, defaultValue, isResponsive } = META[componentName][componentName].props[propName as never]

        let parsedDefaultValue

        if (['true', 'false'].includes(defaultValue)) {
          parsedDefaultValue = defaultValue === 'true' ? true : false
        } else if (!Number.isNaN(Number(defaultValue))) {
          parsedDefaultValue = Number(defaultValue)
        } else {
          parsedDefaultValue = defaultValue
        }

        props[propName] = {
          options,
          defaultValue: parsedDefaultValue,
          isResponsive,
          value: parsedDefaultValue,
        }
      })

      const { bundle } = META[componentName][componentName].overview

      state.components[componentName] = {
        bundle,
        props,
        activeProp: componentPropNames.sort()[0],
      }
    })

  return state
}
