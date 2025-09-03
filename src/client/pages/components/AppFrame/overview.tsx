import { Text } from 'lib/components'

import data from 'client/meta/app-frame.meta'

export default () => {
  return <Text typography="lead">{data.description}</Text>
}
