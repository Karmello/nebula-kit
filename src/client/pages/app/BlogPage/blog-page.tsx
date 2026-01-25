import { Box, Flex, Link, Section, Text } from 'lib/components'

type ArticleProps = { title: string; date: string; platform: string }

const Article = ({ title, date, platform }: ArticleProps) => {
  return (
    <Section heading={title} variant="outline" intent="secondary">
      <Flex gap="7px">
        <Text tag="span">{new Date(date).toDateString()}</Text>
        <Text tag="span" space="both">
          |
        </Text>
        <Text tag="span">{platform}</Text>
        <Text tag="span" space="both">
          |
        </Text>
        <Link href="https://dev.to/karmello/design-systems-and-the-problem-of-ui-entropy-e3c" target="_blank">
          <Text tag="span" intent="primary" color="blue" iconName="external-link" iconPlacement="right">
            Open
          </Text>
        </Link>
      </Flex>
    </Section>
  )
}

export const BlogPage = () => {
  return (
    <Box paddingTop="15px" paddingInline={{ base: '20px', lg: '50px' }} maxInlineSize="75rem">
      <Section heading="Blog" iconName="newspaper">
        <Flex flexDirection="column" rowGap="15px" alignItems="stretch">
          <Article title="Design Systems and the Problem of UI Entropy" date="01-23-2026" platform="dev.to" />
        </Flex>
      </Section>
    </Box>
  )
}
