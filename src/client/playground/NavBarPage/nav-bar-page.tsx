import { useState, useMemo } from 'react'

import { NavBar, Paragraph } from 'lib/components'
import { PlaygroundConfigurator, PlaygroundScenario } from 'client/components'

export const NavBarPage = () => {
  const [activePage, setActivePage] = useState<string>('home')

  const onChange = (value: string) => {
    if (value === 'logout') {
      alert('logged out')
    } else {
      setActivePage(value)
    }
  }

  const MAIN_MENU_PROPS = useMemo(
    () => ({
      options: [
        { value: 'home', text: 'Home' },
        { value: 'browse', text: 'Browse' },
        { value: 'about', text: 'About' },
      ],
      value: activePage,
      defaultValue: 'Places',
      onChange,
    }),
    [activePage]
  )

  const SIDE_MENU_PROPS = useMemo(
    () => ({
      options: [
        { value: 'profile', text: 'Profile' },
        { value: 'settings', text: 'Settings' },
        { value: 'logout', text: 'Logout' },
      ],
      value: activePage,
      defaultValue: 'Account',
      onChange,
    }),
    [activePage]
  )

  return (
    <PlaygroundConfigurator surfaceConfigProps={['size']}>
      <PlaygroundScenario title="Default" props>
        <NavBar
          mainMenuProps={MAIN_MENU_PROPS}
          sideMenuProps={SIDE_MENU_PROPS}
          selectedItem={activePage}
          style={{
            border: 'var(--border-width) dashed var(--blue-4)',
            height: '300px',
          }}
        >
          <div style={{ padding: '20px' }}>
            <Paragraph surfaceProps={{ size: 's' }}>
              {activePage[0].toUpperCase() + activePage.slice(1) + ' page'}
            </Paragraph>
          </div>
        </NavBar>
      </PlaygroundScenario>
    </PlaygroundConfigurator>
  )
}
