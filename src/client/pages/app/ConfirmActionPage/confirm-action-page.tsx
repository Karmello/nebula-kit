import { useState } from 'react'
import { useLocation } from 'react-router'

import { Box, Button, Flex } from 'lib/components'
import { BoxColor } from 'lib/components/core/Box/types'

const BUTTON_LABEL_MAP: Record<string, { label: string; color: BoxColor }> = {
  new_account_verification: {
    label: 'Confirm your email address',
    color: 'blue',
  },
  email_change_verification: {
    label: 'Confirm your new email address',
    color: 'blue',
  },
  password_recovery: {
    label: 'Confirm password update',
    color: 'blue',
  },
  deactivation: {
    label: 'Confirm account deactivation',
    color: 'red',
  },
}

export const ConfirmActionPage = () => {
  const [loading, setLoading] = useState<boolean>(false)

  const { search } = useLocation()

  const params = new URLSearchParams(search)
  const action = params.get('action')
  const url = params.get('url')

  return (
    <Box padding={{ base: '24px', lg: '48px' }} paddingTop="100px">
      <Flex justifyContent="center">
        <Button
          tagAttrs={{
            onClick: () => {
              setLoading(true)
              if (url) window.location.href = url
            },
          }}
          intent="primary"
          color={action && BUTTON_LABEL_MAP[action as never] ? BUTTON_LABEL_MAP[action as never].color : 'blue'}
          loading={loading}
          disabled={!url}
        >
          {action && BUTTON_LABEL_MAP[action as never] ? BUTTON_LABEL_MAP[action as never].label : 'Confirm'}
        </Button>
      </Flex>
    </Box>
  )
}
