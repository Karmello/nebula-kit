import { Text } from 'lib/components'

import data from 'client/meta/side-panel-layout.meta'

export default () => {
  return <Text typography="lead">{data.description}</Text>
}
