export async function load(url, context, defaultLoad) {
  if (/\.(png|jpg|jpeg|gif|svg|webp|css|scss)$/i.test(url)) {
    return {
      format: 'module',
      source: 'export default undefined',
      shortCircuit: true,
    }
  }

  return defaultLoad(url, context, defaultLoad)
}
