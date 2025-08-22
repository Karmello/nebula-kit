import { useState } from 'react'
import get from 'lodash/get'

import { PlaygroundConfigurator } from 'client/components'
import { RecoveryForm, Button, Divider, useSnackbar } from 'lib/components'
import { useMakeRequest } from 'lib/hooks'

export const RecoveryFormPage = () => {
  const [activeField, setActiveField] = useState<'email' | 'newPassword'>('email')
  const [apiErrors, setApiErrors] = useState<Record<string, string>>(null)
  const [isEmailSent, setIsEmailSent] = useState<boolean>(false)

  const { makeRequest, isRequestPending } = useMakeRequest()
  const { displayInfo, displaySuccess, displayError } = useSnackbar()

  const onSimulateRecoveryLinkClick = () => {
    setActiveField('newPassword')
  }

  return (
    <PlaygroundConfigurator>
      <Button
        surfaceProps={{
          size: 's',
          disabled: !isEmailSent || activeField === 'newPassword',
        }}
        nativeButtonProps={{ onClick: onSimulateRecoveryLinkClick, style: { width: '210px' } }}
      >
        Simulate recovery link click
      </Button>
      <Divider size="m" />
      <RecoveryForm
        formProps={{
          handleSubmit: async formContext => {
            return makeRequest({
              url: activeField === 'email' ? '/fake-api/get-recovery-link' : '/fake-api/recover-password',
              method: 'POST',
              body: formContext.getValues(),
            })
          },
          onSuccess: async res => {
            const body = await res.json()
            if (activeField === 'email') {
              setIsEmailSent(true)
              displayInfo(get(body, 'info'))
            } else if (activeField === 'newPassword') {
              displaySuccess(get(body, 'success'))
              setActiveField('email')
              setIsEmailSent(false)
            }
          },
          onError: async res => {
            const err = await res.json()
            if (activeField === 'email') {
              setApiErrors(get(err, 'errors'))
            } else if (activeField === 'newPassword') {
              displayError(get(err, 'error'))
            }
          },
          loading: isRequestPending,
          externalErrors: apiErrors,
          style: { maxWidth: '350px', margin: '0 auto' },
        }}
        activeField={activeField}
        isEmailSent={isEmailSent}
        handleGoBackBtnClick={() => null}
      />
    </PlaygroundConfigurator>
  )
}
