import { useCallback, useState } from 'react'

import { Dialog, DialogProps, Button, FlexContainer, Paragraph, FlexItem } from 'lib/components'
import { PlaygroundConfigurator, PlaygroundScenario } from 'client/components'

const DialogWrapper = ({
  title,
  ...dialogProps
}: Omit<DialogProps, 'open' | 'setOpen' | 'children' | 'headingText'> & {
  title: string
}) => {
  const [open, setOpen] = useState<boolean>(false)

  const onClick = useCallback(() => setOpen(!open), [open])

  return (
    <PlaygroundScenario title={title} props>
      <FlexContainer justifyContent="center" width="100%">
        <Button surfaceProps={{ size: 's' }} nativeButtonProps={{ onClick, style: { width: 'auto' } }}>
          Open dialog
        </Button>
        <Dialog headingText="Dialog title" open={open} setOpen={setOpen} {...dialogProps}>
          <Paragraph>Dialog content</Paragraph>
          {title === 'With footer' && (
            <FlexContainer justifyContent="center">
              <FlexItem>
                <Button surfaceProps={{ size: 's' }} nativeButtonProps={{ onClick: () => setOpen(false) }}>
                  Cancel
                </Button>
              </FlexItem>
            </FlexContainer>
          )}
        </Dialog>
      </FlexContainer>
    </PlaygroundScenario>
  )
}

export const DialogPage = () => {
  return (
    <PlaygroundConfigurator>
      <DialogWrapper title="Default" width="350px" />
      <DialogWrapper title="With an icon" width="350px" iconName="bell" />
      <DialogWrapper title="With footer" width="500px" iconName="bell" />
    </PlaygroundConfigurator>
  )
}
