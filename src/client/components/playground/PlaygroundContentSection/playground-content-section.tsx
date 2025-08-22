import { ReactElement, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { pascalCase } from 'change-case'

import { Divider, Paragraph, Section, RevealButton, Button } from 'lib/components'
import { usePlaygroundStore } from 'client/store'

export type PlaygroundContentSectionProps = {
  children: ReactElement
}

const RightSlot = () => {
  const { surfaceConfigOpen, toggleSurfaceConfigOpen, surfaceConfigEnabled } = usePlaygroundStore()
  return (
    <RevealButton
      open={surfaceConfigOpen}
      setOpen={toggleSurfaceConfigOpen}
      size="s"
      buttonProps={{
        nativeButtonProps: { style: { opacity: surfaceConfigEnabled ? 1 : 0 } },
      }}
    />
  )
}

export const PlaygroundContentSection = ({ children }: PlaygroundContentSectionProps) => {
  const { t, i18n } = useTranslation()
  const push = useNavigate()

  const { categoryKey, itemKey } = usePlaygroundStore()

  return useMemo(() => {
    if (!itemKey) {
      return children
    }

    const description = t(`playground.${itemKey}`, { defaultValue: '' })

    return (
      <Section
        headingText={pascalCase(itemKey)}
        surfaceProps={{ size: 'l' }}
        iconName="code"
        iconColor="blue-3"
        RightSlot={RightSlot}
        scrollIntoView
        topDividerSize="m-micro"
        bottomDividerSize="xxl"
      >
        {description ? (
          <>
            <Paragraph
              surfaceProps={{ color: 'blue-4' }}
              nativeParagraphProps={{ style: { fontStyle: 'italic' } }}
            >
              {description}
            </Paragraph>
            <Divider size="xs" />
          </>
        ) : null}
        <Button
          width="AUTO"
          surfaceProps={{ size: 's' }}
          nativeButtonProps={{ onClick: () => push(`/docs/${categoryKey}/${itemKey}`) }}
          iconProps={{ name: 'arrow right', surfaceProps: { color: 'blue-3' } }}
          flexContainerProps={{ flexDirection: 'row-reverse' }}
        >
          {t('common.docs')}
        </Button>
        <Divider size="s" />
        {children}
      </Section>
    )
  }, [i18n.language, itemKey])
}
