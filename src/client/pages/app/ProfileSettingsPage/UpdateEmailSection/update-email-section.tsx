import { Controller, FormProvider, useForm } from 'react-hook-form'

import { Box, Button, Input, NEB_LENGTH, Section, Spacer, Text, useSnackbar } from 'lib/components'
import { useLogoutUser, useRequestEmailUpdate } from 'client/api'
import { PageKey } from 'client/definitions'
import { useNavigateTo } from 'client/hooks'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type UpdateEmailFormValues = {
  email: string
}

export const UpdateEmailSection = () => {
  const navigateTo = useNavigateTo()
  const { show } = useSnackbar()
  const requestEmailUpdate = useRequestEmailUpdate()
  const logoutUser = useLogoutUser()

  const form = useForm<UpdateEmailFormValues>({ defaultValues: { email: '' } })

  const handleSubmit = form.handleSubmit(async ({ email }) => {
    const res = await requestEmailUpdate.sendRequest({ email })

    if (res.ok) {
      form.reset()
      await logoutUser.sendRequest()
      navigateTo(PageKey.authLogin)
      show({ status: 'info', content: res.data.message })
    } else {
      if (res.error.errors) {
        for (const [fieldName, message] of Object.entries(res.error.errors)) {
          form.setError(fieldName as keyof UpdateEmailFormValues, { message })
        }
      } else if (res.error.message) {
        show({ status: res.code === 500 ? 'error' : 'warning', content: res.error.message })
      }
    }
  })

  const { isDirty, isSubmitting } = form.formState

  return (
    <Section heading="Email address" variant="outline" intent="tertiary">
      <Text>
        In case you need to update your email address, you can request a change by providing a new
        one. A verification link will be sent to that address. After confirming it, you'll be able
        to sign in with the new email using your existing password. Your current email remains
        active until you complete the first login with the new one, so you always retain access
        throughout the process.
      </Text>
      <Spacer blockSize={NEB_LENGTH.px_024} />
      <Box maxInlineSize={{ md: '500px' }}>
        <FormProvider {...form}>
          <Box
            tag="form"
            tagAttrs={{ onSubmit: handleSubmit }}
            display="flex"
            flexDirection={{ base: 'column', md: 'row' }}
            flexWrap={{ md: 'wrap' }}
            alignItems={{ base: 'stretch', md: 'flex-end' }}
            rowGap="30px"
            columnGap="10px"
          >
            <Box flex="1">
              <Controller
                name="email"
                control={form.control}
                rules={{
                  required: 'is required',
                  minLength: { value: 5, message: 'is too short' },
                  maxLength: { value: 254, message: 'is too long' },
                  validate: {
                    email: value => EMAIL_REGEX.test(value) || 'has wrong format',
                  },
                }}
                render={({ field, fieldState }) => {
                  const labelErrPart = fieldState.error?.message
                    ? ` - ${fieldState.error.message}`
                    : ''

                  return (
                    <>
                      <Text
                        color="red"
                        intent={labelErrPart ? 'primary' : 'neutral'}
                      >{`New email${labelErrPart}`}</Text>
                      <Spacer blockSize={NEB_LENGTH.px_004} />
                      <Input
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={e => {
                          const trimmed = e.target.value.trim()
                          if (trimmed !== e.target.value) field.onChange(trimmed)
                          field.onBlur()
                        }}
                        disabled={isSubmitting}
                        placeholder="Enter email address"
                        tagAttrs={{ autoComplete: 'off' }}
                      />
                    </>
                  )
                }}
              />
            </Box>
            <Box flex={{ base: '1', md: '0' }}>
              <Button
                tagAttrs={{ type: 'submit' }}
                fullWidth
                color="blue"
                intent="primary"
                loading={isSubmitting}
                disabled={!isDirty}
              >
                Request update
              </Button>
            </Box>
          </Box>
        </FormProvider>
      </Box>
      <Spacer blockSize={NEB_LENGTH.px_008} />
    </Section>
  )
}
