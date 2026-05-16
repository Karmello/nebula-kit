import { useAppStore } from 'client/store'
import { useNavigateTo } from 'client/hooks'
import { Dialog, Text, WithIcon, Button, ButtonProps, Flex } from 'lib/components'
import { PageKey } from 'client/definitions'

export const WebsiteMapDialog = () => {
  const showWebsiteMap = useAppStore(state => state.showWebsiteMap)
  const setShowWebsiteMap = useAppStore(state => state.setShowWebsiteMap)

  const navigateTo = useNavigateTo()

  const commonProps = {
    size: 'xl',
    bold: true,
    fullWidth: true,
    iconPlacement: 'right',
    align: 'split',
  } as ButtonProps

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
            {...commonProps}
            description="Recommended composition and architectural patterns."
            iconName="pyramid"
            onClick={() => handleClick(PageKey.patterns)}
          >
            Patterns
          </Button>
          <Button
            {...commonProps}
            description="Interactive environment for testing components and props in isolation."
            iconName="flask-conical"
            onClick={() => handleClick(PageKey.playground)}
          >
            Playground
          </Button>
          <Button
            {...commonProps}
            description="Explanations of NebulaKit concepts, styling and architecture."
            iconName="book-open-text"
            onClick={() => handleClick(PageKey.foundations)}
          >
            Foundations
          </Button>
          <Button
            {...commonProps}
            description="Documentation for free components."
            iconName="package"
            onClick={() => handleClick(PageKey.core)}
          >
            Core
          </Button>
          <Button
            {...commonProps}
            description="Documentation for paid components."
            iconName="star"
            onClick={() => handleClick(PageKey.pro)}
          >
            Pro
          </Button>
          <Button
            {...commonProps}
            description="Answers to common questions about the system."
            iconName="message-circle-question-mark"
            onClick={() => handleClick(PageKey.faq)}
          >
            FAQ
          </Button>
          <Button
            {...commonProps}
            description="Articles, thoughts and deeper technical discussions."
            iconName="rss"
            onClick={() => handleClick(PageKey.blog)}
          >
            Blog
          </Button>
          <Button
            {...commonProps}
            description="Subscription plans and bundle information."
            iconName="credit-card"
            onClick={() => handleClick(PageKey.pricing)}
          >
            Pricing
          </Button>
          <Button
            {...commonProps}
            description="Ideas, suggestions and user feedback."
            iconName="mail"
            onClick={() => handleClick(PageKey.feedback)}
          >
            Feedback
          </Button>
          <Button
            {...commonProps}
            description="AI-powered helper for understanding NebulaKit concepts."
            iconName="sparkles"
            onClick={() => handleClick(PageKey.assistant)}
          >
            Assistant
          </Button>
        </Flex>
      </Dialog.Content>
    </Dialog>
  )
}
