import { Box, Flex, Link, Section, Text } from 'lib/components'
import { IconName } from 'lib/definitions'

type ArticleProps = {
  title: string
  date: string
  platform: string
  href: string
  iconName: Extract<IconName, 'newspaper' | 'film'>
}

const Article = ({ title, date, platform, href, iconName }: ArticleProps) => {
  return (
    <Section heading={title} variant="outline" intent="secondary" size="sm" iconName={iconName}>
      <Flex gap="xs">
        <Text tag="span">{new Date(date).toDateString()}</Text>
        <Text tag="span" space="both">
          |
        </Text>
        <Text tag="span">{platform}</Text>
        <Text tag="span" space="both">
          |
        </Text>
        <Link href={href} target="_blank">
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
      <Section heading="Blog" iconName="rss">
        <Flex flexDirection="column" rowGap="sm" alignItems="stretch">
          <Article
            title="Local theme island in action"
            date="02-04-2026"
            platform="youtube.com"
            href="https://www.youtube.com/watch?v=WBTCswhSz6g"
            iconName="film"
          />
          <Article
            title="Flex layout driven by props"
            date="02-01-2026"
            platform="youtube.com"
            href="https://www.youtube.com/watch?v=6Wx_t3Ohm_I"
            iconName="film"
          />
          <Article
            title="Responsive UI driven by props"
            date="01-27-2026"
            platform="youtube.com"
            href="https://www.youtube.com/watch?v=ZUQqXP5hBFs"
            iconName="film"
          />
          <Article
            title="Design Systems and the Problem of UI Entropy"
            date="01-23-2026"
            platform="dev.to"
            href="https://dev.to/karmello/design-systems-and-the-problem-of-ui-entropy-e3c"
            iconName="newspaper"
          />
        </Flex>
      </Section>
    </Box>
  )
}
