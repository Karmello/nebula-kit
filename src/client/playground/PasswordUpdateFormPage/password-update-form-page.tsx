import get from 'lodash/get'

import { PlaygroundConfigurator } from 'client/components'
import { PasswordUpdateForm, useSnackbar } from 'lib/components'
import { useMakeRequest } from 'lib/hooks'

export const PasswordUpdateFormPage = () => {
  const { makeRequest, isRequestPending } = useMakeRequest()
  const { displaySuccess } = useSnackbar()

  return (
    <PlaygroundConfigurator>
      <PasswordUpdateForm
        formProps={{
          handleSubmit: async () => {
            return makeRequest({
              url: '/fake-api/password-update',
              method: 'PUT',
            })
          },
          onSuccess: async res => {
            const body = await res.json()
            displaySuccess(get(body, 'success'))
          },
          loading: isRequestPending,
          style: { maxWidth: '400px', margin: '0 auto' },
        }}
      />
    </PlaygroundConfigurator>
  )
}
