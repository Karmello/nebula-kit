import { Text } from 'lib/components'

import data from 'client/meta/app-frame.meta'

const AppFrameOverviewPage = () => {
  return <Text>{data.description}</Text>
}

export default AppFrameOverviewPage
