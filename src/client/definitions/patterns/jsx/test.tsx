import { Box, Select } from 'lib/components'

export const Test = () => {
  return (
    <>
      <Box drawable variant="solid" intent="primary" padding="3xl">
        <Select variant="outline">
          <Select.Option value="option-1">Option 1</Select.Option>
          <Select.Option value="option-2">Option 2</Select.Option>
          <Select.Option value="option-3">Option 3</Select.Option>
        </Select>
      </Box>
    </>
  )
}
