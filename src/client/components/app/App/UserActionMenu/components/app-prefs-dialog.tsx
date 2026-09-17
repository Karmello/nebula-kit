import { sentenceCase } from 'change-case'

import { Box, Button, Dialog, NEB_LENGTH, Select, Spacer, Text, Title } from 'lib/components'
import { NEBKIT_PROVIDER_BORDER_RADIUS_SIZES } from 'lib/components/core/NebkitProvider/constants'
import { useAppStore } from 'client/store'

export const AppPrefsDialog = () => {
  const theme = useAppStore(state => state.theme)
  const setTheme = useAppStore(state => state.setTheme)
  const borderRadiusSize = useAppStore(state => state.borderRadiusSize)
  const setBorderRadiusSize = useAppStore(state => state.setBorderRadiusSize)
  const ripple = useAppStore(state => state.ripple)
  const setRipple = useAppStore(state => state.setRipple)

  const showAppSettings = useAppStore(state => state.showAppSettings)
  const setShowAppSettings = useAppStore(state => state.setShowAppSettings)

  return (
    <Dialog
      open={showAppSettings}
      onClose={() => {
        setShowAppSettings(false)
      }}
      scale="lg"
      closeOnBackdropClick
    >
      <Dialog.Header>
        <Title iconName="settings">
          <Text bold>Preferences</Text>
        </Title>
      </Dialog.Header>
      <Dialog.Content>
        <Box
          padding={NEB_LENGTH.px_024}
          paddingBottom={NEB_LENGTH.px_048}
          display="flex"
          flexWrap="wrap"
          columnGap={NEB_LENGTH.px_016}
          rowGap={NEB_LENGTH.px_024}
        >
          <Box>
            <Text bold typography="small">
              Theme
            </Text>
            <Spacer blockSize={NEB_LENGTH.px_002} />
            <Button
              intent={theme === 'light' ? 'strong' : 'tertiary'}
              scale="xs"
              elemAttrs={{
                onClick: () => setTheme('light'),
                style: {
                  borderTopRightRadius: NEB_LENGTH.px_000,
                  borderBottomRightRadius: NEB_LENGTH.px_000,
                },
              }}
            >
              {sentenceCase('Light')}
            </Button>
            <Button
              intent={theme === 'dark' ? 'strong' : 'tertiary'}
              scale="xs"
              elemAttrs={{
                onClick: () => setTheme('dark'),
                style: {
                  borderTopLeftRadius: NEB_LENGTH.px_000,
                  borderBottomLeftRadius: NEB_LENGTH.px_000,
                },
              }}
            >
              {sentenceCase('Dark')}
            </Button>
          </Box>
          <Box>
            <Text bold typography="small">
              Ripple
            </Text>
            <Spacer blockSize={NEB_LENGTH.px_002} />
            <Button
              intent={ripple ? 'strong' : 'tertiary'}
              scale="xs"
              elemAttrs={{
                onClick: () => setRipple(true),
                style: {
                  borderTopRightRadius: NEB_LENGTH.px_000,
                  borderBottomRightRadius: NEB_LENGTH.px_000,
                },
              }}
            >
              {sentenceCase('On')}
            </Button>
            <Button
              intent={!ripple ? 'strong' : 'tertiary'}
              scale="xs"
              elemAttrs={{
                onClick: () => setRipple(false),
                style: {
                  borderTopLeftRadius: NEB_LENGTH.px_000,
                  borderBottomLeftRadius: NEB_LENGTH.px_000,
                },
              }}
            >
              {sentenceCase('Off')}
            </Button>
          </Box>
          <Box>
            <Text bold typography="small">
              Border radius
            </Text>
            <Spacer blockSize={NEB_LENGTH.px_002} />
            <Select
              value={borderRadiusSize}
              onChange={setBorderRadiusSize}
              inlineSize="150px"
              scale="xs"
            >
              {NEBKIT_PROVIDER_BORDER_RADIUS_SIZES.map(n => (
                <Select.Option value={n}>{n}</Select.Option>
              ))}
            </Select>
          </Box>
        </Box>
      </Dialog.Content>
      <Dialog.Footer>
        <Text typography="caption" color="blue" intent="secondary">
          Preferences here map directly to NebkitProvider configuration.
        </Text>
      </Dialog.Footer>
    </Dialog>
  )
}
