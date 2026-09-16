import META from 'client/meta'

import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, getHtmlMetaData } from './helpers'

describe('server / helpers / getHtmlMetaData', () => {
  it('path /', () => {
    expect(getHtmlMetaData('/')).toEqual({
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
    })
  })

  it('path /home', () => {
    expect(getHtmlMetaData('/home')).toEqual({
      title: 'NebulaKit | Home',
      description: DEFAULT_DESCRIPTION,
    })
  })

  it('path /auth/log-in', () => {
    expect(getHtmlMetaData('/auth/log-in')).toEqual({
      title: 'NebulaKit | Auth | Log In',
      description: DEFAULT_DESCRIPTION,
    })
  })

  it('path /foundations/overview/introduction/about-nebula-kit', () => {
    expect(getHtmlMetaData('/foundations/overview/introduction/about-nebula-kit')).toEqual({
      title: 'NebulaKit | Foundations | Overview | Introduction | About Nebula Kit',
      description: DEFAULT_DESCRIPTION,
    })
  })

  it('path /library/base/box/overview', () => {
    expect(getHtmlMetaData('/library/base/box/overview')).toEqual({
      title: 'NebulaKit | Library | Base | Box | Overview',
      description: META.Box.Box.overview.title,
    })
  })

  it('path /library/navigation/side-nav/props', () => {
    expect(getHtmlMetaData('/library/navigation/side-nav/props')).toEqual({
      title: 'NebulaKit | Library | Navigation | SideNav | Props',
      description: META.SideNav.SideNav.overview.title,
    })
  })

  it('path /library/motion/use-scale/props', () => {
    expect(getHtmlMetaData('/library/motion/use-scale/props')).toEqual({
      title: 'NebulaKit | Library | Motion | useScale | Props',
      description: META.useScale.useScale.overview.title,
    })
  })
})
