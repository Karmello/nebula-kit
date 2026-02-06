import { sentenceCase } from 'change-case'

import { useAppStore } from 'client/store'
import { Button, Flex, Select, Dialog, Text, Segment } from 'lib/components'
import { NEBKIT_BORDER_RADIUS_SIZES, NEBKIT_RIPPLE_MODES } from 'lib/components/core/utility/NebkitProvider'
import { COLORS, THEMES } from 'lib/definitions'

export const AppPrefsDialog = () => {
  const theme = useAppStore(state => state.theme)
  const setTheme = useAppStore(state => state.setTheme)
  const brand = useAppStore(state => state.brand)
  const setBrand = useAppStore(state => state.setBrand)
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
    >
      <Dialog.Header>
        <Text bold iconName="settings">
          Preferences
        </Text>
      </Dialog.Header>
      <Dialog.Content>
        <Flex flexWrap="wrap" gap="15px">
          <Flex.Item>
            <Text bold typography="small">
              Theme
            </Text>
            <Segment key={theme}>
              {THEMES.map(key => (
                <Segment.Item key={key}>
                  <Button
                    intent={key === theme ? 'inverse' : 'tertiary'}
                    size="xs"
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
            <Select value={brand} onChange={setBrand} inlineSize="150px" size="xs" scrollAlign="center">
              {COLORS.map(brand => (
                <Select.Option value={brand}>{sentenceCase(brand)}</Select.Option>
              ))}
            </Select>
          </Flex.Item>
          <Flex.Item>
            <Text bold typography="small">
              Border radius
            </Text>
            <Select
              value={borderRadiusSize}
              onChange={setBorderRadiusSize}
              inlineSize="150px"
              size="xs"
              scrollAlign="center"
            >
              {NEBKIT_BORDER_RADIUS_SIZES.map(n => (
                <Select.Option value={n}>{n}</Select.Option>
              ))}
            </Select>
          </Flex.Item>
          <Flex.Item>
            <Text bold typography="small">
              Ripple mode
            </Text>
            <Select
              value={rippleMode}
              onChange={setRippleMode}
              inlineSize="150px"
              size="xs"
              scrollAlign="center"
            >
              {NEBKIT_RIPPLE_MODES.map(n => (
                <Select.Option value={n}>{sentenceCase(n)}</Select.Option>
              ))}
            </Select>
          </Flex.Item>
        </Flex>
      </Dialog.Content>
      <Dialog.Footer>
        <Text scale="compact" color="gray" intent="primary">
          Preferences here map directly to NebkitProvider configuration.
        </Text>
      </Dialog.Footer>
    </Dialog>
  )
}
