import { useCallback, useLayoutEffect } from 'react'
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
import { useLoginUser, UseLoginUserRes } from 'client/api'
import { PageKey } from 'client/definitions'
import { useNavigateTo } from 'client/hooks'
import { useAppStore } from 'client/store'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const MIN_LOADING_TIME = 500

type LoginFormValues = {
  email: string
  password: string
}

const waitForTime = async (start: number, minLoadingTime: number) => {
  const remaining = minLoadingTime - (Date.now() - start)

  if (remaining > 0) {
    await new Promise(resolve => setTimeout(resolve, remaining))
  }
}

export const LoginPage = () => {
  const { search } = useLocation()
  const navigateTo = useNavigateTo()
  const { show } = useSnackbar()
  const user = useAppStore(state => state.user)
  const setUser = useAppStore(state => state.setUser)

  const loginUser = useLoginUser()

  const runAsync = async () => {
    const params = new URLSearchParams(search)

    if (params.get('email_verified') === 'true') {
      window.history.replaceState({}, '', PageKey.authLogin)
      show({ status: 'success', content: 'Email verified ! You can log in now.' })
    } else if (params.get('new_email_verified') === 'true') {
      window.history.replaceState({}, '', PageKey.authLogin)
      show({ status: 'info', content: 'Log in using your new email to finalize the update.' })
    } else if (params.get('account_deactivated') === 'true') {
      window.history.replaceState({}, '', PageKey.authLogin)
      show({ status: 'success', content: 'Your account has been fully deactivated.' })
    } else if (params.get('unauthorized') === 'true') {
      window.history.replaceState({}, '', PageKey.authLogin)
      show({ status: 'info', content: 'Your session has ended. Please log in again.' })
    }
  }

  useLayoutEffect(() => {
    runAsync()
  }, [search])

  const onResponse = useCallback(
    async (res: UseLoginUserRes) => {
      if (res.ok) {
        setUser(res.data.user)
        navigateTo(res.data.user.plan === 'free' ? PageKey.pricing : PageKey.profileAccount, {
          replace: true,
        })
      } else {
        show({ status: res.code === 500 ? 'error' : 'warning', content: res.error.message })
      }
    },
    [show]
  )

  const form = useForm<LoginFormValues>({ defaultValues: { email: '', password: '' } })

  const handleSubmit = form.handleSubmit(
    async data => {
      const start = Date.now()
      const res = await loginUser.sendRequest(data)
      await waitForTime(start, MIN_LOADING_TIME)
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
        <Section size="lg" heading="Log in" iconName="log-in">
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
                    Log in
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
              href={PageKey.authRegister}
              onClick={() => {
                navigateTo(PageKey.authRegister)
              }}
            >
              <Button variant="ghost" color="blue" intent="primary">
                Don't have an account ? Sign up.
              </Button>
            </Link>
          </Box>
          <Box display="flex" justifyContent="center">
            <Link
              href={PageKey.authRecover}
              onClick={() => {
                navigateTo(PageKey.authRecover)
              }}
            >
              <Button variant="ghost" color="blue" intent="primary">
                Forgot your password ? Click here.
              </Button>
            </Link>
          </Box>
        </Section>
      </Box>
    </Box>
  )
}
