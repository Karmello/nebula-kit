import { Flex, Text } from 'lib/components'

export type BreadcrumbOwnProps = {
  items: string[]
}

export const Breadcrumb = ({ items }: BreadcrumbOwnProps) => {
  if (!items?.length) {
    return null
  }

  return (
    <Flex gap={5} flexDirection="row" flexWrap="wrap">
      {items
        .filter(item => item)
        .map((item, i) => (
          <Text
            key={i}
            typography="secondary"
            intent="primary"
            iconName={i > 0 ? 'chevron-right' : undefined}
          >
            {item}
          </Text>
        ))}
    </Flex>
  )
}
