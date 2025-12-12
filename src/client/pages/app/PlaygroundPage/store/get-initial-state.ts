import META from 'client/meta'
import { ComponentMeta } from 'client/definitions'

import { COMPONENTS_TO_SKIP, Props, PROPS_TO_SKIP, State } from './definitions'
import { CHILDREN } from '../components/RenderPanel/children'

export const getInitialState = (): State => {
  const state: State = {
    view: 'canvas',
    activeComponent: '',
    components: {},
  }

  const flatMetas: Record<string, ComponentMeta<any>> = {}

  Object.keys(META).forEach(topLevelComponentName => {
    const innerLevelComponentNames = Object.keys(META[topLevelComponentName])
    const finalComponentNames = innerLevelComponentNames.filter(
      name => !COMPONENTS_TO_SKIP.includes(name) && !name.startsWith('use')
    )
    finalComponentNames.forEach(name => {
      flatMetas[name] = META[topLevelComponentName][name]
    })
  })

  const flatMetasKeys = Object.keys(flatMetas)

  flatMetasKeys.forEach(componentName => {
    const componentPropNames = Object.keys(flatMetas[componentName].props).filter(
      name => !PROPS_TO_SKIP.includes(name) && !(name === 'children' && CHILDREN[componentName])
    )

    const props: Props = {}

    componentPropNames.forEach(propName => {
      const { options, defaultValue, isResponsive } = flatMetas[componentName].props[propName]

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

    const isSlot = componentName.includes('.')

    state.components[componentName] = {
      props,
      activeProp: '',
      activeSlot: !isSlot
        ? flatMetasKeys.some(k => k.includes(`${componentName}.`))
          ? 'root'
          : undefined
        : undefined,
    }
  })

  return state
}
