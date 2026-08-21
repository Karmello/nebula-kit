import { sentenceCase } from 'change-case'

import { Box, Button, Dialog, Flex, NEB_LENGTH, Segment, Select, Spacer, Text, Title } from 'lib/components'
import { BOX_COLORS } from 'lib/components/core/Box/constants'
import {
  NEBKIT_PROVIDER_BORDER_RADIUS_SIZES,
  NEBKIT_PROVIDER_RIPPLE_MODES,
  NEBKIT_PROVIDER_SATURATIONS,
  NEBKIT_PROVIDER_THEMES,
} from 'lib/components/core/NebkitProvider/constants'
import { useAppStore } from 'client/store'

export const AppPrefsDialog = () => {
  const theme = useAppStore(state => state.theme)
  const setTheme = useAppStore(state => state.setTheme)
  const brand = useAppStore(state => state.brand)
  const setBrand = useAppStore(state => state.setBrand)
  const saturation = useAppStore(state => state.saturation)
  const setSaturation = useAppStore(state => state.setSaturation)
  const borderRadiusSize = useAppStore(state => state.borderRadiusSize)
  const setBorderRadiusSize = useAppStore(state => state.setBorderRadiusSize)
  const rippleMode = useAppStore(state => state.rippleMode)
  const setRippleMode = useAppStore(state => state.setRippleMode)

  const showAppSettings = useAppStore(state => state.showAppSettings)
  const setShowAppSettings = useAppStore(state => state.setShowAppSettings)

  return (
    <Dialog
      open={showAppSettings}
      onClose={() => {
        setShowAppSettings(false)
      }}
      size="lg"
      closeOnBackdropClick
    >
      <Dialog.Header>
        <Title iconName="settings">
          <Text bold>Preferences</Text>
        </Title>
      </Dialog.Header>
      <Dialog.Content>
        <Box padding="20px" paddingBottom="40px">
          <Flex flexWrap="wrap" columnGap={NEB_LENGTH.px_016} rowGap={NEB_LENGTH.px_024}>
            <Flex.Item>
              <Text bold typography="small">
                Theme
              </Text>
              <Spacer blockSize={NEB_LENGTH.px_002} />
              <Segment>
                {NEBKIT_PROVIDER_THEMES.map(key => (
                  <Segment.Item key={key}>
                    <Button
                      intent={key === theme ? 'inverse' : 'tertiary'}
                      scale="xs"
                      tagAttrs={{ onClick: () => setTheme(key) }}
                    >
                      {sentenceCase(key)}
                    </Button>
                  </Segment.Item>
                ))}
              </Segment>
            </Flex.Item>
            <Flex.Item>
              <Text bold typography="small">
                Brand
              </Text>
              <Spacer blockSize={NEB_LENGTH.px_002} />
              <Select value={brand} onChange={setBrand} inlineSize="150px" size="xs">
                {BOX_COLORS.map(brand => (
                  <Select.Option value={brand}>{sentenceCase(brand)}</Select.Option>
                ))}
              </Select>
            </Flex.Item>
            <Flex.Item>
              <Text bold typography="small">
                Saturation
              </Text>
              <Spacer blockSize={NEB_LENGTH.px_002} />
              <Select value={saturation} onChange={setSaturation} inlineSize="150px" size="xs">
                {NEBKIT_PROVIDER_SATURATIONS.map(saturation => (
                  <Select.Option value={saturation}>{sentenceCase(saturation)}</Select.Option>
                ))}
              </Select>
            </Flex.Item>
            <Flex.Item>
              <Text bold typography="small">
                Border radius
              </Text>
              <Spacer blockSize={NEB_LENGTH.px_002} />
              <Select value={borderRadiusSize} onChange={setBorderRadiusSize} inlineSize="150px" size="xs">
                {NEBKIT_PROVIDER_BORDER_RADIUS_SIZES.map(n => (
                  <Select.Option value={n}>{n}</Select.Option>
                ))}
              </Select>
            </Flex.Item>
            <Flex.Item>
              <Text bold typography="small">
                Ripple mode
              </Text>
              <Spacer blockSize={NEB_LENGTH.px_002} />
              <Select value={rippleMode} onChange={setRippleMode} inlineSize="150px" size="xs">
                {NEBKIT_PROVIDER_RIPPLE_MODES.map(n => (
                  <Select.Option value={n}>{sentenceCase(n)}</Select.Option>
                ))}
              </Select>
            </Flex.Item>
          </Flex>
        </Box>
      </Dialog.Content>
      <Dialog.Footer>
        <Text typography="small" color="gray" intent="primary">
          Preferences here map directly to NebkitProvider configuration.
        </Text>
      </Dialog.Footer>
    </Dialog>
  )
}
