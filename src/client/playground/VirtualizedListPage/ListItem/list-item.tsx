import classNames from 'classnames'

import { FlexContainer, FlexItem, Paragraph } from 'lib/components'

import './list-item.scss'

type ListItemProps = {
  label: string
  className?: string
}

export const ListItem = ({ label, className }: ListItemProps) => {
  return (
    <div className={classNames('ListItem', className)}>
      <FlexContainer justifyContent="center" alignItems="center" height="100%">
        <FlexItem>
          <Paragraph>{label}</Paragraph>
        </FlexItem>
      </FlexContainer>
    </div>
  )
}
