import { Box, Dialog, Icon, NEB_LENGTH, Spacer, Text, Title } from 'lib/components'
import { IconName } from 'lib/components/core/Icon'
import { PageKey } from 'client/definitions'
import { useNavigateTo } from 'client/hooks'
import { useAppStore } from 'client/store'

const Item = ({
  children,
  description,
  iconName,
  onClick,
}: {
  children: string
  description: string
  iconName: IconName
  onClick: () => void
}) => {
  return (
    <Box
      tag="button"
      tagAttrs={{ onClick }}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding={NEB_LENGTH.px_016}
      columnGap={NEB_LENGTH.px_024}
      interactive
      cursor="pointer"
      color="blue"
      variant="solid"
      intent="muted"
    >
      <Box>
        <Text typography="h6">{children}</Text>
        <Spacer blockSize={NEB_LENGTH.px_004} />
        <Text typography="small">{description}</Text>
      </Box>
      <Icon name={iconName} color="blue" intent="primary" size={NEB_LENGTH.px_032} />
    </Box>
  )
}

export const WebsiteMapDialog = () => {
  const showWebsiteMap = useAppStore(state => state.showWebsiteMap)
  const setShowWebsiteMap = useAppStore(state => state.setShowWebsiteMap)

  const navigateTo = useNavigateTo()

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
        <Title iconName="compass">
          <Text bold>Website map</Text>
        </Title>
      </Dialog.Header>
      <Dialog.Content>
        <Box display="flex" flexDirection="column" alignItems="stretch" rowGap={NEB_LENGTH.px_006}>
          <Item
            description="Recommended composition and architectural patterns."
            iconName="pyramid"
            onClick={() => handleClick(PageKey.patterns)}
          >
            Patterns
          </Item>
          <Item
            description="Interactive environment for testing components and props in isolation."
            iconName="flask-conical"
            onClick={() => handleClick(PageKey.playground)}
          >
            Playground
          </Item>
          <Item
            description="Explanations of NebulaKit concepts, styling and architecture."
            iconName="book-open-text"
            onClick={() => handleClick(PageKey.foundations)}
          >
            Foundations
          </Item>
          <Item
            description="Documentation for Core and Pro components."
            iconName="package"
            onClick={() => handleClick(PageKey.components)}
          >
            Components
          </Item>
          <Item
            description="Answers to common questions about the system."
            iconName="message-circle-question-mark"
            onClick={() => handleClick(PageKey.faq)}
          >
            FAQ
          </Item>
          <Item
            description="Articles, thoughts and deeper technical discussions."
            iconName="rss"
            onClick={() => handleClick(PageKey.blog)}
          >
            Blog
          </Item>
          <Item
            description="Subscription plans and bundle information."
            iconName="credit-card"
            onClick={() => handleClick(PageKey.pricing)}
          >
            Pricing
          </Item>
          <Item
            description="Ideas, suggestions and user feedback."
            iconName="mail"
            onClick={() => handleClick(PageKey.feedback)}
          >
            Feedback
          </Item>
          <Item
            description="AI-powered helper for understanding NebulaKit concepts."
            iconName="sparkles"
            onClick={() => handleClick(PageKey.assistant)}
          >
            Assistant
          </Item>
        </Box>
      </Dialog.Content>
    </Dialog>
  )
}
