import { useCallback } from 'react'
import { Controller, FormProvider, useForm } from 'react-hook-form'

import {
  Box,
  Button,
  HorizontalRule,
  Input,
  Link,
  NEB_LENGTH,
  PasswordInput,
  Section,
  Spacer,
  Text,
  useSnackbar,
} from 'lib/components'
import { useRegisterUser } from 'client/api'
import { PageKey } from 'client/definitions'
import { UseMakeApiRequestRes, useNavigateTo } from 'client/hooks'
import { useAppStore } from 'client/store'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type RegisterFormValues = {
  email: string
  password: string
}

export const RegisterPage = () => {
  const user = useAppStore(state => state.user)
  const { show } = useSnackbar()
  const navigateTo = useNavigateTo()

  const registerUser = useRegisterUser()

  const form = useForm<RegisterFormValues>({ defaultValues: { email: '', password: '' } })

  const onResponse = useCallback(
    (res: UseMakeApiRequestRes<typeof registerUser.data, typeof registerUser.error>) => {
      if (res.ok) {
        show({ status: 'info', content: res.data.message })
      } else {
        if (res.error.errors) {
          for (const [fieldName, message] of Object.entries(res.error.errors)) {
            form.setError(fieldName as keyof RegisterFormValues, { message })
          }
        } else if (res.error.message) {
          show({ status: res.code === 500 ? 'error' : 'warning', content: res.error.message })
        }
      }
    },
    [show, form]
  )

  const handleSubmit = form.handleSubmit(
    async data => {
      const res = await registerUser.sendRequest(data)
      if (res.ok) form.reset()
      onResponse(res)
    },
    errors => {
      console.log(errors)
    }
  )

  const { isSubmitting } = form.formState

  if (user) {
    return null
  }

  return (
    <Box padding={{ base: NEB_LENGTH.px_024, lg: NEB_LENGTH.px_048 }}>
      <Box inlineSize="400px" maxInlineSize="100%" margin="0 auto">
        <Section size="lg" heading="Registration" iconName="user-plus">
          <Text typography="caption" intent="secondary">
            We only use your email for account access and essential security steps. If you ever
            change your mind, you can permanently remove your account in the settings.
          </Text>
          <Spacer blockSize={NEB_LENGTH.px_024} />
          <FormProvider {...form}>
            <Box tag="form" tagAttrs={{ onSubmit: handleSubmit }}>
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
                      >{`Email${labelErrPart}`}</Text>
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
                        placeholder="name@example.com"
                      />
                    </>
                  )
                }}
              />
              <Spacer blockSize={NEB_LENGTH.px_016} />
              <Controller
                name="password"
                control={form.control}
                rules={{
                  required: 'is required',
                  minLength: { value: 8, message: 'is too short' },
                  maxLength: { value: 128, message: 'is too long' },
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
                      >{`Password${labelErrPart}`}</Text>
                      <Spacer blockSize={NEB_LENGTH.px_004} />
                      <PasswordInput
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={e => {
                          const trimmed = e.target.value.trim()
                          if (trimmed !== e.target.value) field.onChange(trimmed)
                          field.onBlur()
                        }}
                        disabled={isSubmitting}
                      />
                    </>
                  )
                }}
              />
              <Spacer blockSize={NEB_LENGTH.px_016} />
              <Box display="flex">
                <Box flex={{ base: '1', lg: '0' }}>
                  <Button
                    tagAttrs={{ type: 'submit' }}
                    fullWidth
                    color="blue"
                    intent="primary"
                    loading={isSubmitting}
                  >
                    Sign up
                  </Button>
                </Box>
              </Box>
            </Box>
          </FormProvider>
          <Spacer blockSize={NEB_LENGTH.px_048} />
          <HorizontalRule />
          <Spacer blockSize={NEB_LENGTH.px_016} />
          <Box display="flex" justifyContent="center">
            <Link
              href={PageKey.authLogin}
              onClick={() => {
                navigateTo(PageKey.authLogin)
              }}
            >
              <Button variant="ghost" color="blue" intent="primary">
                Already have an account ? Log in.
              </Button>
            </Link>
          </Box>
        </Section>
      </Box>
    </Box>
  )
}
