import * as LIB_COMPONENTS from 'lib/components'

import { usePlaygroundStore } from '../../store'

export const RenderPanel = () => {
  const { activeComponent, getPropValues } = usePlaygroundStore()

  if (!activeComponent) return null

  const Component = LIB_COMPONENTS[activeComponent as never] as any

  return <Component {...getPropValues(activeComponent)} />
}
