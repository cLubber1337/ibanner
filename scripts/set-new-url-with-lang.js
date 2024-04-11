export function setNewUrlWithLang(lang, defaultLang = 'en', availableLocales) {
  if (!availableLocales.includes(lang)) lang = defaultLang
  const newUrl =
    window.location.protocol +
    '//' +
    window.location.host +
    window.location.pathname +
    '?lang=' +
    lang
  window.history.pushState({ path: newUrl }, '', newUrl)

  return lang
}
