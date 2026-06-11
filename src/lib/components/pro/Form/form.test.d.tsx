import { createRef } from 'react'
import { FieldErrors, FieldValues, UseFormReturn } from 'react-hook-form'
import { expectError, expectType } from 'tsd'

import { Input } from 'lib/components'

import { Form } from '../Form'

//
// Form
//

expectType(
  <Form>
    <Form.Fields>
      <Form.Field name="email">
        <Input />
      </Form.Field>
    </Form.Fields>

    <Form.Actions>
      <Form.ActionButton type="submit">Submit</Form.ActionButton>
    </Form.Actions>
  </Form>
)

//
// responsive Flex inheritance
//

expectType(
  <Form
    gap={{ base: 'sm', lg: 'lg' }}
    flexDirection={{ base: 'column', lg: 'row' }}
    justifyContent={{ base: 'center', lg: 'space-between' }}
    alignItems={{ base: 'stretch', lg: 'center' }}
  >
    <Form.Fields>
      <Form.Field name="email">
        <Input />
      </Form.Field>
    </Form.Fields>
  </Form>
)

//
// callbacks
//

expectType(
  <Form
    onValidSubmission={(values, event) => {
      expectType<FieldValues>(values)
      expectType<React.BaseSyntheticEvent | undefined>(event)
    }}
  >
    <Form.Fields>
      <Form.Field name="email">
        <Input />
      </Form.Field>
    </Form.Fields>
  </Form>
)

expectType(
  <Form
    onInvalidSubmission={(errors, event) => {
      expectType<FieldErrors<FieldValues>>(errors)
      expectType<React.BaseSyntheticEvent | undefined>(event)
    }}
  >
    <Form.Fields>
      <Form.Field name="email">
        <Input />
      </Form.Field>
    </Form.Fields>
  </Form>
)

expectType(
  <Form
    onResponse={(response, formContext) => {
      expectType<unknown>(response)
      expectType<UseFormReturn<FieldValues>>(formContext)
    }}
  >
    <Form.Fields>
      <Form.Field name="email">
        <Input />
      </Form.Field>
    </Form.Fields>
  </Form>
)

//
// intentionally NON-responsive props
//

expectError(
  <Form minLoadingTime={{ base: 500 }}>
    <Form.Fields>
      <Form.Field name="email">
        <Input />
      </Form.Field>
    </Form.Fields>
  </Form>
)

expectError(
  <Form resetOnSuccess={{ base: true }}>
    <Form.Fields>
      <Form.Field name="email">
        <Input />
      </Form.Field>
    </Form.Fields>
  </Form>
)

//
// invalid responsive breakpoint keys
//

expectError(
  <Form gap={{ mobile: 'md' }}>
    <Form.Fields>
      <Form.Field name="email">
        <Input />
      </Form.Field>
    </Form.Fields>
  </Form>
)

//
// hidden primitive leakage
//

expectError(
  <Form drawable>
    <Form.Fields>
      <Form.Field name="email">
        <Input />
      </Form.Field>
    </Form.Fields>
  </Form>
)

expectError(
  <Form variant="solid">
    <Form.Fields>
      <Form.Field name="email">
        <Input />
      </Form.Field>
    </Form.Fields>
  </Form>
)

expectError(
  <Form intent="primary">
    <Form.Fields>
      <Form.Field name="email">
        <Input />
      </Form.Field>
    </Form.Fields>
  </Form>
)

//
// root contract
//

expectType(
  <Form
    tagAttrs={{
      id: 'form',
    }}
    tagRef={createRef<HTMLFormElement>()}
  >
    <Form.Fields>
      <Form.Field name="email">
        <Input />
      </Form.Field>
    </Form.Fields>
  </Form>
)

//
// Form.Fields
//

expectType(
  <Form.Fields gap={{ base: 'sm', lg: 'lg' }} flexDirection={{ base: 'column', lg: 'row' }}>
    <Form.Field name="email">
      <Input />
    </Form.Field>
  </Form.Fields>
)

expectType(
  <Form.Fields drawable>
    <Form.Field name="email">
      <Input />
    </Form.Field>
  </Form.Fields>
)

expectType(
  <Form.Fields variant="solid">
    <Form.Field name="email">
      <Input />
    </Form.Field>
  </Form.Fields>
)

//
// Form.Actions
//

expectType(
  <Form.Actions gap={{ base: 'sm', lg: 'lg' }} flexDirection={{ base: 'column', lg: 'row' }}>
    <Form.ActionButton type="submit">Submit</Form.ActionButton>
  </Form.Actions>
)

expectType(
  <Form.Actions drawable>
    <Form.ActionButton type="submit">Submit</Form.ActionButton>
  </Form.Actions>
)

expectType(
  <Form.Actions variant="solid">
    <Form.ActionButton type="submit">Submit</Form.ActionButton>
  </Form.Actions>
)

//
// Form.Field
//

expectType(
  <Form.Field name="email" flex={{ base: '1', lg: '2' }} alignSelf={{ base: 'stretch', lg: 'center' }}>
    <Input />
  </Form.Field>
)

expectType(
  <Form.Field
    name="email"
    required
    email
    minLength={5}
    maxLength={{
      value: 20,
      message: 'Too long',
    }}
  >
    <Input />
  </Form.Field>
)

//
// required props
//

expectError(
  <Form.Field>
    <Input />
  </Form.Field>
)

expectType(
  <Form.Field name="email" color="blue">
    <Input />
  </Form.Field>
)

expectType(
  <Form.Field name="email" variant="solid">
    <Input />
  </Form.Field>
)

expectType(
  <Form.Field name="email" drawable>
    <Input />
  </Form.Field>
)

//
// Form.ActionButton
//

expectType(
  <Form.ActionButton type="submit" variant="solid" intent="primary" flex={{ base: '1', lg: '0' }}>
    Submit
  </Form.ActionButton>
)

expectType(
  <Form.ActionButton
    onClick={e => {
      expectType<React.MouseEvent<HTMLButtonElement>>(e)
    }}
  >
    Click
  </Form.ActionButton>
)

//
// enum validation
//

expectError(<Form.ActionButton type="save">Save</Form.ActionButton>)

expectError(<Form.ActionButton variant="banana">Save</Form.ActionButton>)

//
// hidden primitive leakage
//

expectError(<Form.ActionButton typography="h1">Save</Form.ActionButton>)

expectType(<Form.ActionButton padding="md">Save</Form.ActionButton>)

//
// Form.Label
//

expectType(
  <Form.Label color="blue" intent="primary">
    Label
  </Form.Label>
)

expectError(<Form.Label margin="md">Label</Form.Label>)

expectError(<Form.Label variant="solid">Label</Form.Label>)

//
// Form.Hint
//

expectType(
  <Form.Hint color="gray" intent="secondary">
    Hint
  </Form.Hint>
)

expectError(<Form.Hint margin="md">Hint</Form.Hint>)

expectError(<Form.Hint variant="solid">Hint</Form.Hint>)
