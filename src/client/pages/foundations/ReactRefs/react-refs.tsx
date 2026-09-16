import { Box } from 'lib/components/core/Box'
import { Callout } from 'lib/components/core/Callout'
import { Spacer } from 'lib/components/core/Spacer'
import { Text } from 'lib/components/core/Text'
import { NEB_LENGTH } from 'lib/constants'
import { CodeSnippet } from 'client/components/reusable/CodeSnippet'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Text>
        React refs are a common pattern in NebulaKit. Every component exposes a
        <Text elemTag="span" space="start" bold>
          elemRef
        </Text>
        , which gives access to the underlying root DOM element rendered by the component. This
        allows direct interaction with the element for tasks like measuring size, managing focus or
        integrating with external systems.
      </Text>
      <Spacer />
      <Callout
        scale="sm"
        variant="soft-outline"
        content="In rare cases, a component may not expose elemRef because it already uses a ref internally and overriding it would break existing functionality.
        However, in most situations you can rely on elemRef being available for direct access and control of the root element."
      />
      <Spacer blockSize={NEB_LENGTH.px_024} />
      <CodeSnippet
        lang="tsx"
        code={`const [visible, setVisible] = useState<boolean>(false)
const buttonRef = useRef<HTMLButtonElement>(null)

return <>
  <Button elemRef={buttonRef} onClick={() => setVisible(!visible)}>Toggle portal</Button>
  <Portal anchorRef={buttonRef} placement="top">This is Portal content</Portal>
</>`}
        description="Example"
      />
    </Box>
  )
}
