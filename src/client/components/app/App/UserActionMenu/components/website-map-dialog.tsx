import { useAppStore } from 'client/store'
import { useNavigateTo } from 'client/hooks'
import { Dialog, Text, WithIcon, Button, ButtonProps, Flex, Icon, IconProps } from 'lib/components'
import { PageKey } from 'client/definitions'

export const WebsiteMapDialog = () => {
  const showWebsiteMap = useAppStore(state => state.showWebsiteMap)
  const setShowWebsiteMap = useAppStore(state => state.setShowWebsiteMap)

  const navigateTo = useNavigateTo()

  const commonButtonProps = {
    size: 'xl',
    bold: true,
    fullWidth: true,
    iconPlacement: 'right',
    align: 'split',
    color: 'blue',
    intent: 'muted',
  } as ButtonProps

  const commonIconProps = {
    color: 'blue',
    intent: 'primary',
    size: '27px',
  } as IconProps

  const handleClick = (pageKey: PageKey) => {
    setShowWebsiteMap(false)
    setTimeout(() => {
      navigateTo(pageKey)
    }, 500)
  }

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
        <WithIcon iconName="compass">
          <Text bold>Website map</Text>
        </WithIcon>
      </Dialog.Header>
      <Dialog.Content>
        <Flex flexDirection="column" alignItems="stretch" rowGap="2xs">
          <Button
            {...commonButtonProps}
            description="Recommended composition and architectural patterns."
            customSvgIcon={<Icon {...commonIconProps} name="pyramid" />}
            onClick={() => handleClick(PageKey.patterns)}
          >
            Patterns
          </Button>
          <Button
            {...commonButtonProps}
            description="Interactive environment for testing components and props in isolation."
            customSvgIcon={<Icon {...commonIconProps} name="flask-conical" />}
            onClick={() => handleClick(PageKey.playground)}
          >
            Playground
          </Button>
          <Button
            {...commonButtonProps}
            description="Explanations of NebulaKit concepts, styling and architecture."
            customSvgIcon={<Icon {...commonIconProps} name="book-open-text" />}
            onClick={() => handleClick(PageKey.foundations)}
          >
            Foundations
          </Button>
          <Button
            {...commonButtonProps}
            description="Documentation for free components."
            customSvgIcon={<Icon {...commonIconProps} name="package" />}
            onClick={() => handleClick(PageKey.core)}
          >
            Core
          </Button>
          <Button
            {...commonButtonProps}
            description="Documentation for paid components."
            customSvgIcon={<Icon {...commonIconProps} name="star" />}
            onClick={() => handleClick(PageKey.pro)}
          >
            Pro
          </Button>
          <Button
            {...commonButtonProps}
            description="Answers to common questions about the system."
            customSvgIcon={<Icon {...commonIconProps} name="message-circle-question-mark" />}
            onClick={() => handleClick(PageKey.faq)}
          >
            FAQ
          </Button>
          <Button
            {...commonButtonProps}
            description="Articles, thoughts and deeper technical discussions."
            customSvgIcon={<Icon {...commonIconProps} name="rss" />}
            onClick={() => handleClick(PageKey.blog)}
          >
            Blog
          </Button>
          <Button
            {...commonButtonProps}
            description="Subscription plans and bundle information."
            customSvgIcon={<Icon {...commonIconProps} name="credit-card" />}
            onClick={() => handleClick(PageKey.pricing)}
          >
            Pricing
          </Button>
          <Button
            {...commonButtonProps}
            description="Ideas, suggestions and user feedback."
            customSvgIcon={<Icon {...commonIconProps} name="mail" />}
            onClick={() => handleClick(PageKey.feedback)}
          >
            Feedback
          </Button>
          <Button
            {...commonButtonProps}
            description="AI-powered helper for understanding NebulaKit concepts."
            customSvgIcon={<Icon {...commonIconProps} name="sparkles" />}
            onClick={() => handleClick(PageKey.assistant)}
          >
            Assistant
          </Button>
        </Flex>
      </Dialog.Content>
    </Dialog>
  )
}
