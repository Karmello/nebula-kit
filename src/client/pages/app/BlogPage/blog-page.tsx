import { Box, Flex, Link, NEB_LENGTH, Section, Text, Title } from 'lib/components'
import { type IconName } from 'lib/components/core/Icon/types'

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
      <Flex columnGap={NEB_LENGTH.px_008} flexWrap="wrap">
        <Text tag="span" noWrap>
          {`${new Date(date).toDateString()} |`}
        </Text>
        <Text tag="span">{`${platform} |`}</Text>
        <Title iconName="external-link" iconPlacement="right" intent="primary" color="blue">
          <Link href={href} target="_blank">
            <Text tag="span" intent="primary" color="blue">
              Open
            </Text>
          </Link>
        </Title>
      </Flex>
    </Section>
  )
}

export const BlogPage = () => {
  return (
    <Box paddingTop={NEB_LENGTH.px_016} paddingInline={{ base: NEB_LENGTH.px_024, lg: NEB_LENGTH.px_048 }} maxInlineSize="75rem">
      <Section size="lg" heading="Blog" iconName="rss">
        <Flex flexDirection="column" rowGap={NEB_LENGTH.px_016} alignItems="stretch">
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
