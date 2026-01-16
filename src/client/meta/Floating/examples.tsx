import { ComponentMeta } from 'client/definitions'
import { FloatingProps } from 'lib/components'

const FLOATING_EXAMPLES_META: ComponentMeta<FloatingProps>['examples'] = [
  {
    description: 'Basic usage.',
    noSandBox: true,
    code: `const anchorRef = useRef(null)
const [resolved, setResolved] = useState<FloatingResolved>()
\t
return (
  <>
    <Box tagRef={anchorRef}>Anchor</Box>

    <Floating
      anchorRef={anchorRef}
      onResolve={setResolved}
    >
      {resolved && (
        <Portal
          anchorRef={anchorRef}
          placement={resolved.placement}
        >
          Floating content
        </Portal>
      )}
    </Floating>
  </>
)`,
  },
]

export { FLOATING_EXAMPLES_META }
