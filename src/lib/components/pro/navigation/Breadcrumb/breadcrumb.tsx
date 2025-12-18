import { Flex, Text } from 'lib/components'

import { BreadcrumbProps } from './definitions'

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  if (!items?.length) {
    return null
  }

  return (
    <Flex gap="10px" flexDirection="row" flexWrap="wrap">
      {items
        .filter(item => item)
        .map((item, i) => (
          <Text key={i} typography="small" intent="primary" iconName={i > 0 ? 'chevron-right' : undefined}>
            {item}
          </Text>
        ))}
    </Flex>
  )
}

Breadcrumb.displayName = 'Breadcrumb'
