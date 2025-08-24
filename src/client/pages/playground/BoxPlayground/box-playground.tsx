import { usePlaygroundStore } from 'client/store'
import { Box } from 'lib/components'

export const BoxPlayground = () => {
  const { variant, intent } = usePlaygroundStore()

  return (
    <Box variant={variant} intent={intent}>
      <div>This</div>
      <div>is</div>
      <div>the</div>
      <div>Box</div>
    </Box>
  )
}
