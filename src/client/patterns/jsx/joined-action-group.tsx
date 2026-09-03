import { Box } from 'lib/components/core/Box'
import { JoinedSurface } from 'lib/components/shared'
import { NEB_LENGTH } from 'lib/constants'

export const JoinedActionGroup = () => {
  return (
    <JoinedSurface bgMode="filled" intent="tertiary" bordered borderMode="filled">
      <Box drawable intent="tertiary" padding={NEB_LENGTH.px_024} />
      <Box drawable intent="tertiary" padding={NEB_LENGTH.px_024} />
      <Box drawable intent="tertiary" padding={NEB_LENGTH.px_024} />
    </JoinedSurface>
  )
}
