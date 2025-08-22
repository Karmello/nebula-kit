import get from 'lodash/get'

import { PlaygroundConfigurator } from 'client/components'
import { LoginForm, useSnackbar } from 'lib/components'
import { useMakeRequest } from 'lib/hooks'

export const LoginFormPage = () => {
  const { makeRequest, isRequestPending } = useMakeRequest()
  const { displaySuccess, displayError } = useSnackbar()

  return (
    <PlaygroundConfigurator>
      <LoginForm
        formProps={{
          handleSubmit: async formContext => {
            return makeRequest({
              url: '/fake-api/login',
              method: 'POST',
              body: formContext.getValues(),
            })
          },
          onSuccess: async res => {
            const body = await res.json()
            displaySuccess(get(body, 'success'))
          },
          onError: async res => {
            const err = await res.json()
            displayError(get(err, 'error'))
          },
          loading: isRequestPending,
          style: { maxWidth: '350px', margin: '0 auto' },
        }}
        handleForgotPassBtnClick={() => null}
      />
    </PlaygroundConfigurator>
  )
}
