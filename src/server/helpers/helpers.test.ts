import META from 'client/meta'

import { getMetaData, DEFAULT_TITLE, DEFAULT_DESCRIPTION } from './helpers'

describe('server / helpers / getMetaData', () => {
  it('path /', () => {
    expect(getMetaData('/')).toEqual({
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
    })
  })

  it('path /home', () => {
    expect(getMetaData('/home')).toEqual({
      title: 'NebulaKit | Home',
      description: DEFAULT_DESCRIPTION,
    })
  })

  it('path /auth/log-in', () => {
    expect(getMetaData('/auth/log-in')).toEqual({
      title: 'NebulaKit | Auth | Log In',
      description: DEFAULT_DESCRIPTION,
    })
  })

  it('path /foundations/overview/introduction/why-nebula', () => {
    expect(getMetaData('/foundations/overview/introduction/why-nebula')).toEqual({
      title: 'NebulaKit | Foundations | Overview | Introduction | Why Nebula',
      description: DEFAULT_DESCRIPTION,
    })
  })

  it('path /core/base/html-tag/overview', () => {
    expect(getMetaData('/core/base/html-tag/overview')).toEqual({
      title: 'NebulaKit | Core | Base | HtmlTag | Overview',
      description: META.HtmlTag.HtmlTag.overview.title,
    })
  })

  it('path /pro/navigation/side-nav/props', () => {
    expect(getMetaData('/pro/navigation/side-nav/props')).toEqual({
      title: 'NebulaKit | Pro | Navigation | SideNav | Props',
      description: META.SideNav.SideNav.overview.title,
    })
  })
})
