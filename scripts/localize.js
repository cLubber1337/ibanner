import { setNewUrlWithLang } from './set-new-url-with-lang.js'

const DEFAULT_LOCALE = 'en'
const LOCALES = ['en', 'de', 'es', 'fr', 'ja', 'pt']

export async function localize() {
  const langFromBrowser = window.navigator.language.slice(0, 2)
  const urlParams = new URLSearchParams(window.location.search)
  const paramsLang = urlParams.get('lang')
  let locale = paramsLang || langFromBrowser
  locale = setNewUrlWithLang(locale, DEFAULT_LOCALE, LOCALES)
  document.body.setAttribute('data-locale', locale)

  const elementsWithDataI18n = document.querySelectorAll('[data-i18n]')
  const currentTranslations = await fetchTranslations(locale)

  elementsWithDataI18n.forEach((element) => {
    const dataI18n = element.getAttribute('data-i18n')
    element.innerHTML = currentTranslations[dataI18n]
  })
}

async function fetchTranslations(locale) {
  const response = await fetch(`../public/locale/${locale}.json`)

  return await response.json()
}
