import { ComponentMeta } from 'client/definitions'
import { MeasureProps } from 'lib/components'

const MEASURE_EXAMPLES_META: ComponentMeta<MeasureProps>['examples'] = [
  {
    code: `<Measure
  onMeasure={({ blockSize, inlineSize }) => {
    setMeasuredSize({ blockSize, inlineSize })
  }}
>
  <Box>Content being measured</Box>
</Measure>`,
    noSandBox: true,
    description: 'Measuring the rendered size of a Box and storing it in React state.',
  },
]

export { MEASURE_EXAMPLES_META }
