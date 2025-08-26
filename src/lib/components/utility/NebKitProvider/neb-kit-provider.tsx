import { ReactElement, useEffect } from 'react'
import i18next from 'i18next'

import { useLibStore } from 'lib/state'
import { DEFAULT_BORDER_RADIUS, Language, ScaleValue, Theme } from 'lib/definitions'

import 'lib/icons'
import 'lib/styles/index.scss'

export type NebKitProviderOwnProps = {
  /** The single React element to wrap with provider context */
  children: ReactElement
  /** Initial language to set in the store and i18next */
  defaultLang?: Language
  /** Initial theme applied as data-theme attribute */
  defaultTheme?: Theme
  defaultBorderRadius?: ScaleValue | string
}

/** NebKitProvider is the root context wrapper for the library. It initializes language and theme, wires them into the internal store, syncs with i18next for translations, and applies the active theme as a data-theme attribute on the document. Consumers wrap their app in it once to enable consistent theming, localization, and shared state across all Nebula-kit components. */
export const NebKitProvider = ({
  children,
  defaultLang = Language.DEFAULT,
  defaultTheme = Theme.DEFAULT,
  defaultBorderRadius = DEFAULT_BORDER_RADIUS,
}: NebKitProviderOwnProps): ReactElement => {
  const { lang, setLang, theme, setTheme, setBorderRadius } = useLibStore()

  useEffect(() => {
    setLang(defaultLang)
    setTheme(defaultTheme)
    setBorderRadius(defaultBorderRadius)
  }, [])

  useEffect(() => {
    i18next.changeLanguage(lang)
  }, [lang])

  useEffect(() => {
    document?.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return children
}
