import META from 'client/meta'

import { PLAYGROUND_PROPS_MAP, Props, State } from './definitions'
import { PRESETS } from '../components/PredefinedExamples/definitions'

export const getInitialState = (): State => {
  const state: State = {
    displayProps: true,
    activeComponent: 'Box',
    components: {},
  }

  Object.keys(META)
    .filter(componentName => Object.keys(PLAYGROUND_PROPS_MAP).includes(componentName))
    .forEach(componentName => {
      const componentPropNames = Object.keys(META[componentName][componentName].props).filter(name =>
        PLAYGROUND_PROPS_MAP[componentName].includes(name)
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

        const presetPropValue = PRESETS[componentName][0].props[propName as never]

        props[propName] = {
          options,
          defaultValue: parsedDefaultValue,
          isResponsive,
          value: presetPropValue ?? parsedDefaultValue,
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
