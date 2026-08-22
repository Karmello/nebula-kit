import { Controller, FormProvider, useForm } from 'react-hook-form'
import { useLocation } from 'react-router'

import {
  Box,
  Button,
  Divider,
  Input,
  Link,
  NEB_LENGTH,
  PasswordInput,
  Section,
  Spacer,
  Text,
  useSnackbar,
} from 'lib/components'
import { useRecoverPassword, useRecoverPasswordConfirm, UseRecoverPasswordRes } from 'client/api'
import { PageKey } from 'client/definitions'
import { useNavigateTo } from 'client/hooks'
import { useAppStore } from 'client/store'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type RecoveryFormValues = {
  email?: string
  newPassword?: string
}

export const RecoveryPage = () => {
  const user = useAppStore(state => state.user)
  const { search } = useLocation()
  const navigateTo = useNavigateTo()
  const { show } = useSnackbar()

  const recoverPassword = useRecoverPassword()
  const recoverPasswordConfirm = useRecoverPasswordConfirm()

  const params = new URLSearchParams(search)
  const token = params.get('token')

  const form = useForm<RecoveryFormValues>()

  const onResponse = (res: UseRecoverPasswordRes) => {
    if (res.ok && res.data.message) {
      show({ status: 'info', content: res.data.message })
      if (token) {
        navigateTo(PageKey.authLogin)
      }
    }
  }

  const handleSubmit = form.handleSubmit(async ({ email, newPassword }) => {
    const res = !token
      ? await recoverPassword.sendRequest({ email })
      : await recoverPasswordConfirm.sendRequest({ newPassword, token })

    if (res.ok) form.reset()
    onResponse(res)
  })

  const { isSubmitting } = form.formState

  if (user) {
    return null
  }

  return (
    <Box padding={{ base: NEB_LENGTH.px_024, lg: NEB_LENGTH.px_048 }}>
      <Box inlineSize="400px" maxInlineSize="100%" margin="0 auto">
        <Section size="lg" heading="Password recovery" iconName="key-round">
          <FormProvider {...form}>
            <Box tag="form" tagAttrs={{ onSubmit: handleSubmit }}>
              {!token ? (
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
                          tagAttrs={{ autoComplete: 'off' }}
                          placeholder="Enter email address"
                        />
                      </>
                    )
                  }}
                />
              ) : (
                <Controller
                  name="newPassword"
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
                        >{`New password${labelErrPart}`}</Text>
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
                          placeholder="Enter password"
                          autoComplete="off"
                        />
                      </>
                    )
                  }}
                />
              )}
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
                    {!token ? 'Recover' : 'Update'}
                  </Button>
                </Box>
              </Box>
            </Box>
          </FormProvider>
          <Spacer blockSize={NEB_LENGTH.px_048} />
          <Divider />
          <Spacer blockSize={NEB_LENGTH.px_016} />
          <Box display="flex" justifyContent="center">
            <Link
              href={PageKey.authLogin}
              onClick={() => {
                navigateTo(PageKey.authLogin)
              }}
            >
              <Button
                variant="ghost"
                color="blue"
                intent="primary"
                iconName="arrow-left"
                disabled={recoverPassword.isMakingRequest || recoverPasswordConfirm.isMakingRequest}
              >
                Back
              </Button>
            </Link>
          </Box>
        </Section>
      </Box>
    </Box>
  )
}
