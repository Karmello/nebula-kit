import { ComponentMeta } from 'client/definitions'
import { FloatingProps } from 'lib/components'

const FLOATING_EXAMPLES_META: ComponentMeta<FloatingProps>['examples'] = [
  {
    description:
      'An example of anchored floating content remaining correctly positioned during scroll and resize.',
    noSandBox: true,
    code: `const anchorRef = useRef(null)
\t
const [resolved, setResolved] = useState<{ placement: FloatingProps['placement']; blockSize: number }>({
  placement: 'top-center',
  blockSize: 100,
})
\t
return (
  <>
    <Box
      tagRef={anchorRef}
      drawable
      variant="outline"
      intent="primary"
      color="red"
      display="inline-block"
      paddingBlock="10px"
      paddingInline="15px"
    >
      Anchor
    </Box>
    <Floating
      anchorRef={anchorRef}
      placement="top-center"
      floatingBlockSize={100}
      floatingInlineSize={200}
      offset={20}
      onResolve={({ placement, blockSize }) => {
        setResolved({ placement, blockSize })
      }}
    >
      <Portal anchorRef={anchorRef} placement={resolved.placement} offset={20}>
        <Box
          drawable
          variant="solid"
          intent="primary"
          color="blue"
          blockSize={resolved.blockSize + 'px'}
          inlineSize="200px"
          padding="10px"
          opacity="0.5"
        >
          Floating content
        </Box>
      </Portal>
    </Floating>
  </>
)`,
  },
]

export { FLOATING_EXAMPLES_META }
