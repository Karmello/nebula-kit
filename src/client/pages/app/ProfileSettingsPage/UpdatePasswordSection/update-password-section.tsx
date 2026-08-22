import { Controller, FormProvider, useForm } from 'react-hook-form'

import {
  Box,
  Button,
  NEB_LENGTH,
  PasswordInput,
  Section,
  Spacer,
  Text,
  useSnackbar,
} from 'lib/components'
import { useLogoutUser, useUpdatePassword } from 'client/api'
import { PageKey } from 'client/definitions'
import { useNavigateTo } from 'client/hooks'

type UpdatePasswordFormValues = {
  currentPassword: string
  newPassword: string
}

export const UpdatePasswordSection = () => {
  const navigateTo = useNavigateTo()
  const { show } = useSnackbar()
  const updatePassword = useUpdatePassword()
  const logoutUser = useLogoutUser()

  const form = useForm<UpdatePasswordFormValues>({
    defaultValues: { currentPassword: '', newPassword: '' },
  })

  const handleSubmit = form.handleSubmit(async ({ currentPassword, newPassword }) => {
    const res = await updatePassword.sendRequest({ currentPassword, newPassword })

    form.reset()

    if (!res.ok) {
      show({ status: res.code >= 500 ? 'error' : 'warning', content: res.error.message })
    } else {
      await logoutUser.sendRequest()
      navigateTo(PageKey.authLogin)
      show({ status: 'success', content: res.data.message })
    }
  })

  const { isDirty, isSubmitting } = form.formState

  return (
    <Section heading="Password" variant="outline" intent="tertiary">
      <Text>
        You can update your account password here. For security, your current password is required
        to complete the change.
      </Text>
      <Spacer blockSize={NEB_LENGTH.px_024} />
      <Box maxInlineSize={{ md: '350px' }}>
        <FormProvider {...form}>
          <Box tag="form" tagAttrs={{ onSubmit: handleSubmit }}>
            <Controller
              name="currentPassword"
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
                    >{`Current password${labelErrPart}`}</Text>
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
                      autoComplete="current-password"
                      placeholder="Enter password"
                    />
                  </>
                )
              }}
            />
            <Spacer blockSize={NEB_LENGTH.px_016} />
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
                      autoComplete="new-password"
                      placeholder="Enter password"
                    />
                  </>
                )
              }}
            />
            <Spacer blockSize={NEB_LENGTH.px_016} />
            <Box display="flex">
              <Box flex={{ base: '1', md: '0' }}>
                <Button
                  tagAttrs={{ type: 'submit' }}
                  fullWidth
                  color="blue"
                  intent="primary"
                  loading={isSubmitting}
                  disabled={!isDirty}
                >
                  Update
                </Button>
              </Box>
            </Box>
          </Box>
        </FormProvider>
      </Box>
      <Spacer blockSize={NEB_LENGTH.px_008} />
    </Section>
  )
}
