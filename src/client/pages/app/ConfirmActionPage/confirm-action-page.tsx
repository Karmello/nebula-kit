import { useState } from 'react'
import { useLocation } from 'react-router'

import { Box, Button } from 'lib/components'

const BUTTON_LABEL_MAP = {
  new_account_verification: 'Confirm your email address',
  email_change_verification: 'Confirm your new email address',
  password_recovery: 'Confirm password update',
  deactivation: 'Confirm account deactivation',
}

export const ConfirmActionPage = () => {
  const [loading, setLoading] = useState<boolean>(false)

  const { search } = useLocation()

  const params = new URLSearchParams(search)
  const action = params.get('action')
  const url = params.get('url')

  console.log(url)

  return (
    <Box padding={{ base: 20, lg: 50 }}>
      <Button
        tagAttrs={{
          onClick: () => {
            setLoading(true)
            if (url) window.location.href = url
          },
        }}
        intent="primary"
        color="blue"
        loading={loading}
        disabled={!url}
      >
        {action && BUTTON_LABEL_MAP[action as never] ? BUTTON_LABEL_MAP[action as never] : 'Confirm'}
      </Button>
    </Box>
  )
}
