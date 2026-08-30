import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router'
import { getHtmlMetaData } from 'src/server/helpers'

import {
  AppFrame,
  Box,
  Button,
  Divider,
  Link,
  Loader,
  MarkerList,
  NEB_LENGTH,
  Spacer,
  Text,
  Toolbar,
} from 'lib/components'
import { useGetUser, useLogoutUser } from 'client/api'
import { PageKey, RELEASE_VERSIONS } from 'client/definitions'
import { getCopyrightInfo } from 'client/helpers'
import { useNavigateTo } from 'client/hooks'

import { RootPage } from '../RootPage'
import { AppJump } from './AppJump'
import { PageNavigation } from './PageNavigation'
import { UserActionMenu } from './UserActionMenu'

export const App = () => {
  const { pathname } = useLocation()
  const navigateTo = useNavigateTo()

  const getUser = useGetUser(true, 300)
  const logoutUser = useLogoutUser()

  const runAsync = async () => {
    if (pathname.startsWith(PageKey.confirmAction)) {
      await logoutUser.sendRequest()
    } else {
      const getUserRes = await getUser.sendRequest()

      if (!getUserRes.ok) {
        await logoutUser.sendRequest()
        if (pathname.startsWith('/profile')) {
          navigateTo(PageKey.authLogin, { replace: true })
        }
      } else {
        if (pathname.startsWith('/auth')) {
          navigateTo(PageKey.profileAccount, { replace: true })
        }
      }
    }
  }

  useLayoutEffect(() => {
    runAsync()
  }, [])

  useLayoutEffect(() => {
    document.title = getHtmlMetaData(pathname).title
    window.scrollTo(0, 0)
  }, [pathname])

  if (getUser.isMakingRequest || logoutUser.isMakingRequest) {
    return (
      <Box blockSize="100dvh">
        <Loader centered size={NEB_LENGTH.px_032} />
      </Box>
    )
  }

  if (pathname.startsWith(PageKey.confirmAction)) {
    return <RootPage />
  }

  return (
    <AppFrame stickyHeader>
      <AppFrame.Header>
        <Toolbar switchAt="xxl">
          {({ setMainOpen, mainOpen }) => (
            <>
              <Toolbar.Start>
                <PageNavigation toolbarSlot="start" mainOpen={mainOpen} setMainOpen={setMainOpen} />
              </Toolbar.Start>
              <Toolbar.Main>
                <PageNavigation toolbarSlot="main" mainOpen={mainOpen} setMainOpen={setMainOpen} />
              </Toolbar.Main>
              <Toolbar.End>
                <UserActionMenu />
              </Toolbar.End>
            </>
          )}
        </Toolbar>
        <AppJump />
      </AppFrame.Header>
      <AppFrame.Main
        paddingTop={{ base: NEB_LENGTH.px_024, lg: NEB_LENGTH.px_048 }}
        paddingBottom={NEB_LENGTH.px_096}
      >
        <RootPage />
      </AppFrame.Main>
      <AppFrame.Footer footerStackBreakpoint="lg">
        <AppFrame.FooterSection padding={NEB_LENGTH.px_016}>
          <Text bold>Current release</Text>
          <Divider marginBottom={NEB_LENGTH.px_016} intent="muted" surface="raised" />
          <Text typography="small" italic color="gray" intent="primary">
            NebulaKit is actively developed and released in incremental updates. Each release
            introduces improvements and refinements across the system.
          </Text>
          <Spacer blockSize={NEB_LENGTH.px_016} />
          <Link
            href={`${PageKey.foundations}/resources/changelog/v${RELEASE_VERSIONS[0]}`}
            onClick={() => {
              navigateTo(`${PageKey.foundations}/resources/changelog/v${RELEASE_VERSIONS[0]}`)
            }}
          >
            <Text typography="small" color="blue" intent="primary">
              NebulaKit v{RELEASE_VERSIONS[0]}
            </Text>
          </Link>
          <Spacer blockSize={NEB_LENGTH.px_016} />
          <Link href="https://www.npmjs.com/package/@nebula-kit/core" target="_blank">
            <Button
              color="red"
              intent="primary"
              scale="xs"
              iconName="external-link"
              iconPlacement="right"
            >
              @nebula-kit/core
            </Button>
          </Link>
        </AppFrame.FooterSection>
        <AppFrame.FooterSection padding={NEB_LENGTH.px_016}>
          <Text bold>Community & Support</Text>
          <Divider marginBottom={NEB_LENGTH.px_016} intent="muted" surface="raised" />
          <Text typography="small" italic color="gray" intent="primary">
            This is a closed-source project. There is no public GitHub repository. You can still
            follow updates, ask questions and join the community through the channels below.
          </Text>
          <Spacer blockSize={NEB_LENGTH.px_016} />
          <Box display="flex" flexDirection="row" flexWrap="wrap" gap={NEB_LENGTH.px_004}>
            <Link href="https://x.com/captainnebula" target="_blank">
              <Button
                theme="global-flipped"
                color="gray"
                scale="xs"
                iconName="external-link"
                iconPlacement="right"
              >
                X profile
              </Button>
            </Link>
            <Link href="https://discord.gg/BgezCRDN8H" target="_blank">
              <Button
                color="blue"
                intent="primary"
                scale="xs"
                iconName="external-link"
                iconPlacement="right"
              >
                Discord server
              </Button>
            </Link>
          </Box>
        </AppFrame.FooterSection>
        <AppFrame.FooterSection padding={NEB_LENGTH.px_016}>
          <Text bold>About the author</Text>
          <Divider marginBottom={NEB_LENGTH.px_016} intent="muted" surface="raised" />
          <Text typography="small" italic color="gray" intent="primary">
            The product is designed and maintained by a solo software engineer focused on long-term
            UI architecture and system consistency.
          </Text>
          <Spacer blockSize={NEB_LENGTH.px_016} />
          <Box display="flex" flexDirection="row" flexWrap="wrap" gap={NEB_LENGTH.px_004}>
            <Link href="https://www.linkedin.com/in/nogakamil" target="_blank">
              <Button
                color="blue"
                intent="primary"
                scale="xs"
                iconName="external-link"
                iconPlacement="right"
              >
                LinkedIn
              </Button>
            </Link>
            <Link href="https://github.com/Karmello" target="_blank">
              <Button
                theme="global-flipped"
                color="gray"
                scale="xs"
                iconName="external-link"
                iconPlacement="right"
              >
                GitHub
              </Button>
            </Link>
          </Box>
        </AppFrame.FooterSection>
        <AppFrame.FooterSection padding={NEB_LENGTH.px_016}>
          <Text bold>Legal information</Text>
          <Divider marginBottom={NEB_LENGTH.px_016} intent="muted" surface="raised" />
          <MarkerList gap={NEB_LENGTH.px_000}>
            <MarkerList.Item>
              <Link
                href={`${PageKey.foundations}/other/legal/terms-of-use`}
                onClick={() => {
                  navigateTo(`${PageKey.foundations}/other/legal/terms-of-use`)
                }}
              >
                <Text typography="small" color="blue" intent="primary">
                  Terms of Use
                </Text>
              </Link>
            </MarkerList.Item>
            <MarkerList.Item>
              <Link
                href={`${PageKey.foundations}/other/legal/license`}
                onClick={() => {
                  navigateTo(`${PageKey.foundations}/other/legal/license`)
                }}
              >
                <Text typography="small" color="blue" intent="primary">
                  License
                </Text>
              </Link>
            </MarkerList.Item>
            <MarkerList.Item>
              <Link
                href={`${PageKey.foundations}/other/legal/privacy-policy`}
                onClick={() => {
                  navigateTo(`${PageKey.foundations}/other/legal/privacy-policy`)
                }}
              >
                <Text typography="small" color="blue" intent="primary">
                  Privacy Policy
                </Text>
              </Link>
            </MarkerList.Item>
          </MarkerList>
          <Spacer blockSize={NEB_LENGTH.px_016} />
          <Link href="mailto:contact@nebulakit.dev" target="_blank">
            <Button color="blue" intent="secondary" variant="outline" scale="xs" iconName="mail">
              contact@nebulakit.dev
            </Button>
          </Link>
          <Spacer blockSize={NEB_LENGTH.px_016} />
          <Text typography="caption" intent="primary" color="gray">
            {getCopyrightInfo()}
          </Text>
        </AppFrame.FooterSection>
      </AppFrame.Footer>
    </AppFrame>
  )
}
