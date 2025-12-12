import { Prop } from 'client/definitions'
import META from 'client/meta'

import { CHILDREN } from '../components/RenderPanel/children'
import { RespValue } from 'lib/definitions'

export type PlaygroundView = 'canvas' | 'props'
export type PropValue = RespValue<string | number | boolean>

type Props = Record<
  string,
  {
    options: string[]
    defaultValue: PropValue
    isResponsive: boolean
    value: PropValue
  }
>

export type State = {
  view: PlaygroundView
  activeComponent: string
  components: Record<
    string,
    {
      activeProp: string
      props: Props
    }
  >
}

const COMPONENTS_TO_SKIP = ['HtmlTag', 'NebkitProvider', 'HydrationGate']
const PROPS_TO_SKIP = ['tag', 'tagAttrs', 'tagRef', 'zIndex']

export const getInitialState = (): State => {
  const state: State = {
    view: 'canvas',
    activeComponent: '',
    components: {},
  }

  const componentNames = Object.keys(META).filter(name => !COMPONENTS_TO_SKIP.includes(name))

  componentNames.forEach(componentName => {
    const componentPropNames = Object.keys(META[componentName][componentName].props).filter(
      name => !PROPS_TO_SKIP.includes(name) && !(name === 'children' && CHILDREN[componentName])
    )
    const props: Props = {}

    componentPropNames.forEach(propName => {
      const { options, defaultValue, isResponsive } = (
        META[componentName][componentName].props as Record<string, Prop>
      )[propName]

      let parsedDefaultValue

      if (['true', 'false'].includes(defaultValue)) {
        parsedDefaultValue = Boolean(defaultValue)
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
      activeProp: '',
      props,
    }
  })

  return state
}
