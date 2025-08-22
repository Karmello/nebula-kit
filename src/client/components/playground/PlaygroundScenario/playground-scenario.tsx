import { cloneElement, ReactElement, useState } from 'react'
import get from 'lodash/get'
import isEmpty from 'lodash/isEmpty'

import {
  Section,
  Button,
  Dialog,
  ObjectRenderer,
  FlexContainer,
  FlexItem,
  Box,
  Divider,
  SurfaceConfig,
} from 'lib/components'

import { usePlaygroundStore } from 'client/store'

export type PlaygroundScenarioProps = {
  children: ReactElement<any>
  title?: string
  displayName?: string
  props?: boolean
  surfaceConfigProps?: (keyof SurfaceConfig)[]
  hasSurfaceInterface?: boolean
}

export const PlaygroundScenario = ({
  children,
  title = 'Default',
  displayName,
  props = false,
  surfaceConfigProps,
  hasSurfaceInterface = false,
}: PlaygroundScenarioProps) => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false)

  const { surfaceConfig, surfaceConfigOpen } = usePlaygroundStore()

  const surfaceProps: SurfaceConfig = {}

  if (surfaceConfigOpen) {
    surfaceConfigProps.forEach(prop => (surfaceProps[prop] = surfaceConfig[prop] as never))
  }

  let finalProps = {}

  if (hasSurfaceInterface) {
    const finalSurfaceProps = { ...children.props.surfaceProps, ...surfaceProps }
    finalProps = {
      ...children.props,
      surfaceProps: !isEmpty(finalSurfaceProps) ? finalSurfaceProps : undefined,
    }
  } else {
    finalProps = { ...children.props, ...surfaceProps }
  }

  const finalChildren = cloneElement(children, finalProps)

  return (
    <>
      <Box>
        <Section
          headingText={title}
          iconName="arrow right"
          iconColor="blue-3"
          bottomDividerSize="l-micro"
          scrollIntoView
          surfaceProps={{ size: 's' }}
          RightSlot={
            props
              ? () => (
                  <Button
                    iconProps={{ name: 'settings' }}
                    surfaceProps={{
                      size: 'xs',
                      squared: true,
                    }}
                    nativeButtonProps={{ onClick: () => setDialogOpen(true) }}
                  />
                )
              : null
          }
        >
          {finalChildren}
        </Section>
        {props ? (
          <Dialog
            headingText={get(finalChildren, 'type.displayName', displayName)}
            iconName="code"
            iconColor="blue-3"
            width="500px"
            open={dialogOpen}
            setOpen={setDialogOpen}
          >
            <ObjectRenderer data={finalChildren.props} />
            <FlexContainer center="always">
              <FlexItem width="100%" maxWidthDesktop="100px">
                <Button
                  surfaceProps={{ size: 's' }}
                  nativeButtonProps={{ onClick: () => setDialogOpen(false) }}
                >
                  Close
                </Button>
              </FlexItem>
            </FlexContainer>
          </Dialog>
        ) : null}
      </Box>
      <Divider size="xs" />
    </>
  )
}
