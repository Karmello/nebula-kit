import { CodeSnippet } from 'client/components'
import { Box, Callout, Spacer, Text } from 'lib/components'

export default () => {
  return (
    <Box maxInlineSize="55rem">
      <Text>
        NebulaKit relies heavily on the slot approach for structuring components. You'll see it throughout the
        library - it's one of the core patterns behind how layouts and composite elements are built.
      </Text>
      <Spacer />
      <Text>
        Slots define where content goes. Some slots accept only a single instance, while others can be used
        multiple times within the same component.
      </Text>
      <Spacer />
      <Text>
        Certain slots are required for a component to render correctly, while others are optional, letting you
        extend or adjust structure without extra wrappers.
      </Text>
      <Spacer />
      <Text>
        Understanding how slots work will help you read component APIs faster, compose layouts more
        intuitively and recognize where NebulaKit handles structure for you.
      </Text>
      <Spacer blockSize="40px" />
      <Callout
        variant="soft-outline"
        size="sm"
        content="Components that rely on slots automatically check for required ones during render.
If a required slot is missing, NebulaKit logs a warning in the console to help you catch structural issues early.
Optional slots are ignored when absent, so you can extend layouts without noise."
      />
      <Spacer blockSize="60px" />
      <Text bold>Example</Text>
      <CodeSnippet
        lang="tsx"
        code={`<DropdownList>
  <DropdownList.Trigger>
    <Button>Trigger</Button>
  </DropdownList.Trigger>
  <DropdownList.Item>Item 1</DropdownList.Item>
  <DropdownList.Item>Item 2</DropdownList.Item>
  <DropdownList.Item>Item 3</DropdownList.Item>
</DropdownList>`}
      />
    </Box>
  )
}
