import { usePlaygroundStore } from 'client/store'
import { Button } from 'lib/components'
import { BOX_VARIANTS, BOX_INTENTS } from 'lib/definitions'

export const ButtonPlayground = () => {
  const { variant, intent } = usePlaygroundStore()

  return <Button>Button</Button>
}
