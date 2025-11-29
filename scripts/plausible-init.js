if (import.meta.env.PROD) {
  const domain = import.meta.env.VITE_PLAUSIBLE_DOMAIN

  if (domain) {
    const s = document.createElement('script')
    s.async = true
    s.src = 'https://plausible.io/js/plausible.js'
    s.dataset.domain = domain
    document.head.appendChild(s)
  }
}
