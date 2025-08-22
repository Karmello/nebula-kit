import { useState } from 'react'
import get from 'lodash/get'

import { UserUpdateForm, useSnackbar } from 'lib/components'
import { useMakeRequest } from 'lib/hooks'
import { COUNTRIES, GENDERS } from 'client/constants'
import { PlaygroundConfigurator } from 'client/components'

export const UserUpdateFormPage = () => {
  const [user, setUser] = useState<object>({
    email: 'karmello@gmail.com',
    username: 'karmello',
    dateOfBirth: { year: '1984', month: '8', day: '24' },
    country: 'PL',
    sex: ['male'],
  })

  const { makeRequest, isRequestPending } = useMakeRequest()
  const { displaySuccess } = useSnackbar()

  return (
    <PlaygroundConfigurator>
      <UserUpdateForm
        formProps={{
          config: { defaultValues: user },
          handleSubmit: () => {
            return makeRequest({
              url: '/fake-api/user-update',
              method: 'PUT',
            })
          },
          onSuccess: async (res, formContext) => {
            const body = await res.json()
            displaySuccess(get(body, 'success'))
            setUser(formContext.getValues())
          },
          loading: isRequestPending,
          style: { maxWidth: '400px', margin: '0 auto' },
        }}
        countries={COUNTRIES}
        genders={GENDERS}
        emailInfo="We need your email for identification purpose."
      />
    </PlaygroundConfigurator>
  )
}
