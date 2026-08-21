import { Box, Callout, NEB_LENGTH, Spacer, Text } from 'lib/components'
import { CodeSnippet } from 'client/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Text>
        React refs are a common pattern in NebulaKit. Every component exposes a
        <Text tag="span" space="start" bold>
          tagRef
        </Text>
        , which gives access to the underlying root DOM element rendered by the component. This
        allows direct interaction with the element for tasks like measuring size, managing focus or
        integrating with external systems.
      </Text>
      <Spacer />
      <Callout
        size="sm"
        variant="soft-outline"
        content="In rare cases, a component may not expose tagRef because it already uses a ref internally and overriding it would break existing functionality.
        However, in most situations you can rely on tagRef being available for direct access and control of the root element."
      />
      <Spacer blockSize={NEB_LENGTH.px_024} />
      <CodeSnippet
        lang="tsx"
        code={`const [visible, setVisible] = useState<boolean>(false)
const buttonRef = useRef<HTMLButtonElement>(null)

return <>
  <Button tagRef={buttonRef} tagAttrs={{ onClick: () => setVisible(!visible) }}>Toggle portal</Button>
  <Portal anchorRef={buttonRef} placement="top">This is Portal content</Portal>
</>`}
        description="Example"
      />
    </Box>
  )
}
