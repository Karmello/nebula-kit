import { useAppStore } from 'client/store'
import { Dialog, Text, Box, WithIcon } from 'lib/components'

export const WebsiteMapDialog = () => {
  const showWebsiteMap = useAppStore(state => state.showWebsiteMap)
  const setShowWebsiteMap = useAppStore(state => state.setShowWebsiteMap)

  return (
    <Dialog
      open={showWebsiteMap}
      onClose={() => {
        setShowWebsiteMap(false)
      }}
      size="lg"
      closeOnBackdropClick
    >
      <Dialog.Header>
        <WithIcon iconName="settings">
          <Text bold>Website map</Text>
        </WithIcon>
      </Dialog.Header>
      <Dialog.Content>
        <Box padding="20px" paddingBottom="40px">
          ...
        </Box>
      </Dialog.Content>
    </Dialog>
  )
}
