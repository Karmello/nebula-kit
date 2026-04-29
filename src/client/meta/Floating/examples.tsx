import { ComponentMeta } from 'client/definitions'
import { FloatingProps } from 'lib/components'

const FLOATING_EXAMPLES_META: ComponentMeta<FloatingProps>['examples'] = [
  {
    description: 'Basic usage.',
    noSandBox: true,
    code: `const anchorRef = useRef<HTMLElement | null>(null)
const [resolved, setResolved] = useState<FloatingResolved>()

return (
  <>
    <Box tagRef={anchorRef}>Anchor</Box>
    <Floating
      anchorRef={anchorRef}
      mode="project-both"
      minInlineSize={120}
      maxInlineSize={240}
      onResolve={resolved => {
        if (
          resolved.placement !== floatingResolved?.placement ||
          resolved.blockSize !== floatingResolved?.blockSize
        ) {
          setFloatingResolved(resolved)
        }
      }}
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
)
`,
  },
]

export { FLOATING_EXAMPLES_META }
