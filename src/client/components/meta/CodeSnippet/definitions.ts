import { BoxColor, BoxIntent } from 'lib/components/core/base/Box'

export const COLOR_MAP: Record<string, { intent: BoxIntent; color: BoxColor }> = {
  // component name
  '#F78C6C': { intent: 'primary', color: 'red' },
  // native html tag name
  '#CAECE6': { intent: 'primary', color: 'red' },
  // prop name
  '#C5E478': { intent: 'primary', color: 'blue' },
  // object name, object key names
  '#D6DEEB': { intent: 'primary', color: 'gray' },
  // value
  '#ECC48D': { intent: 'primary', color: 'amber' },
  // param name
  '#D7DBE0': { intent: 'primary', color: 'amber' },
  // argument name
  '#FF5874': { intent: 'primary', color: 'amber' },
  // called func name
  '#82AAFF': { intent: 'primary', color: 'blue' },
  // TS type name
  '#FFCB8B': { intent: 'neutral', color: 'gray' },
  // angle brackets, cb curly brackets
  '#7FDBCA': { intent: 'neutral', color: 'gray' },
  // prop curly brackets
  '#D3423E': { intent: 'neutral', color: 'gray' },
  // equal sign, arrow func sign, dot
  '#C792EA': { intent: 'neutral', color: 'gray' },
  // quotes
  '#D9F5DD': { intent: 'neutral', color: 'gray' },
  // comments
  '#637777': { intent: 'neutral', color: 'gray' },
  // extension
  '#5CA7E4': { intent: 'primary', color: 'blue' },
  //
  '#BAEBE2': { intent: 'primary', color: 'blue' },
}
