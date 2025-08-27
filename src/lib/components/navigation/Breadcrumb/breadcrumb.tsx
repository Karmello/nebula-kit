import { HStack, Text } from 'lib/components'

export type BreadcrumbOwnProps = {
  items: string[]
}

export const Breadcrumb = ({ items }: BreadcrumbOwnProps) => {
  if (!items?.length) {
    return null
  }

  return (
    <HStack gap={5}>
      {items.map((item, i) => (
        <Text key={i} typography="secondary" intent="primary" iconName={i > 0 ? 'chevron-right' : undefined}>
          {item}
        </Text>
      ))}
    </HStack>
  )
}
