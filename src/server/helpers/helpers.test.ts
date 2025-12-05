import META from 'client/meta'

import { getHtmlMetaData, DEFAULT_TITLE, DEFAULT_DESCRIPTION } from './helpers'

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

  it('path /foundations/overview/introduction/why-nebula', () => {
    expect(getHtmlMetaData('/foundations/overview/introduction/why-nebula')).toEqual({
      title: 'NebulaKit | Foundations | Overview | Introduction | Why Nebula',
      description: DEFAULT_DESCRIPTION,
    })
  })

  it('path /core/base/html-tag/overview', () => {
    expect(getHtmlMetaData('/core/base/html-tag/overview')).toEqual({
      title: 'NebulaKit | Core | Base | HtmlTag | Overview',
      description: META.HtmlTag.HtmlTag.overview.title,
    })
  })

  it('path /pro/navigation/side-nav/props', () => {
    expect(getHtmlMetaData('/pro/navigation/side-nav/props')).toEqual({
      title: 'NebulaKit | Pro | Navigation | SideNav | Props',
      description: META.SideNav.SideNav.overview.title,
    })
  })
})
