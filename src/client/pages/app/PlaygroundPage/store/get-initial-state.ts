import META from 'client/meta'
import { ComponentMeta } from 'client/definitions'

import { PLAYGROUND_MAP, Props, State } from './definitions'

const WHITELISTED_COMPONENTS = Object.keys(PLAYGROUND_MAP)

export const getInitialState = (): State => {
  const state: State = {
    view: 'canvas',
    activeComponent: '',
    components: {},
  }

  const flatMetas: Record<string, ComponentMeta<any>> = {}

  Object.keys(META).forEach(topLevelComponentName => {
    const innerLevelComponentNames = Object.keys(META[topLevelComponentName])
    const finalComponentNames = innerLevelComponentNames.filter(name => WHITELISTED_COMPONENTS.includes(name))
    finalComponentNames.forEach(name => {
      flatMetas[name] = META[topLevelComponentName][name]
    })
  })

  const flatMetasKeys = Object.keys(flatMetas)

  flatMetasKeys.forEach(componentName => {
    const isSlot = componentName.includes('.')
    const hasSlots = flatMetasKeys.some(k => k.includes(`${componentName}.`))

    let componentPropNames = Object.keys(flatMetas[componentName].props).filter(name =>
      PLAYGROUND_MAP[componentName].includes(name)
    )

    if (!isSlot && hasSlots) componentPropNames = componentPropNames.filter(name => name !== 'children')

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

    state.components[componentName] = {
      props,
      activeProp: '',
      activeSlot: !isSlot && hasSlots ? 'root' : undefined,
    }
  })

  return state
}
