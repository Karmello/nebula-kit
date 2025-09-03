import { Text } from 'lib/components'

import data from 'client/meta/native-elem.meta'

export default () => {
  return <Text typography="lead">{data.description}</Text>
}
