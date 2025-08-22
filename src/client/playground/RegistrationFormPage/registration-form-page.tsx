import get from 'lodash/get'

import { COUNTRIES, GENDERS } from 'client/constants'
import { PlaygroundConfigurator } from 'client/components'
import { RegistrationForm, useSnackbar } from 'lib/components'
import { useMakeRequest } from 'lib/hooks'

export const RegistrationFormPage = () => {
  const { displaySuccess } = useSnackbar()
  const { makeRequest, isRequestPending } = useMakeRequest()

  return (
    <PlaygroundConfigurator>
      <RegistrationForm
        formProps={{
          handleSubmit: async formContext => {
            return makeRequest({
              url: '/fake-api/register',
              method: 'POST',
              body: formContext.getValues(),
            })
          },
          onSuccess: async res => {
            const body = await res.json()
            displaySuccess(get(body, 'success'))
          },
          loading: isRequestPending,
          style: { maxWidth: '400px', margin: '0 auto' },
        }}
        countries={COUNTRIES}
        genders={GENDERS}
        emailInfo="We need your email for identification purpose."
        passwordInfo="Your password will be securily encypted before storing in the database."
        handleLoginBtnClick={() => null}
      />
    </PlaygroundConfigurator>
  )
}
