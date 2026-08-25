import { BoxGroup, NEB_LENGTH, Text } from '@nebula-kit/core'

export const JoinedActionGroup = () => {
  return (
    <BoxGroup
      // gap={NEB_LENGTH.px_002}
      display="flex"
      // flexDirection="column"
      squared
      // drawable
      // variant="solid"
      // intent="primary"
      // surface="dividing"
      // paddingTop={NEB_LENGTH.px_002}
    >
      <BoxGroup.Item
        tag="button"
        interactive
        ripple
        cursor="pointer"
        variant="outline"
        intent="primary"
        padding={NEB_LENGTH.px_012}
      >
        <Text>Box 1</Text>
      </BoxGroup.Item>
      <BoxGroup.Item
        tag="button"
        interactive
        ripple
        cursor="pointer"
        variant="solid"
        intent="primary"
        padding={NEB_LENGTH.px_012}
      >
        <Text>Box 2</Text>
      </BoxGroup.Item>
      <BoxGroup.Item
        tag="button"
        interactive
        ripple
        cursor="pointer"
        variant="solid"
        intent="primary"
        padding={NEB_LENGTH.px_012}
      >
        <Text>Box 3</Text>
      </BoxGroup.Item>
      <BoxGroup.Item
        tag="button"
        interactive
        ripple
        cursor="pointer"
        variant="solid"
        intent="primary"
        padding={NEB_LENGTH.px_012}
      >
        <Text>Box 4</Text>
      </BoxGroup.Item>
      <BoxGroup.Item
        tag="button"
        interactive
        ripple
        cursor="pointer"
        variant="solid"
        intent="primary"
        padding={NEB_LENGTH.px_012}
      >
        <Text>Box 5</Text>
      </BoxGroup.Item>
    </BoxGroup>
  )
}
