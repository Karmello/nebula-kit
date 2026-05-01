import meta from 'client/meta'

export const CORE_DATA = Object.keys(meta)
  .filter(key => meta[key][key].overview.bundle === 'core')
  .map(key => ({
    name: key,
    title: meta[key][key].overview.title,
  }))

export const PRO_DATA = Object.keys(meta)
  .filter(key => meta[key][key].overview.bundle === 'pro')
  .map(key => ({
    name: key,
    title: meta[key][key].overview.title,
  }))
