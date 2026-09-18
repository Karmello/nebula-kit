import { Box, HorizontalRule, Link, NEB_LENGTH, Spacer, Text, Title } from 'lib/components'
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
    <Box
      drawable
      borderMode="tinted"
      intent="secondary"
      padding={NEB_LENGTH.px_016}
      overflowX="auto"
      overflowY="hidden"
      maxInlineSize="100%"
    >
      <Title typography="h6" iconName={iconName}>
        {title}
      </Title>
      <HorizontalRule marginTop={NEB_LENGTH.px_004} />
      <Spacer blockSize={NEB_LENGTH.px_004} />
      <Box display="flex" columnGap={NEB_LENGTH.px_008} flexWrap="wrap">
        <Text elemTag="span" noWrap>
          {`${new Date(date).toDateString()} |`}
        </Text>
        <Text elemTag="span">{`${platform} |`}</Text>
        <Title iconName="external-link" iconPlacement="right" intent="primary" color="blue">
          <Link href={href} target="_blank">
            <Text elemTag="span" intent="primary" color="blue">
              Open
            </Text>
          </Link>
        </Title>
      </Box>
    </Box>
  )
}

export const BlogPage = () => {
  return (
    <Box
      paddingTop={NEB_LENGTH.px_016}
      paddingInline={{ base: NEB_LENGTH.px_024, lg: NEB_LENGTH.px_048 }}
      maxInlineSize="75rem"
    >
      <Title typography="h4" iconName="rss">
        Blog
      </Title>
      <HorizontalRule marginTop={NEB_LENGTH.px_004} marginBottom={NEB_LENGTH.px_012} />
      <Box display="flex" flexDirection="column" rowGap={NEB_LENGTH.px_016} alignItems="stretch">
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
      </Box>
    </Box>
  )
}
