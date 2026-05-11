export const formatOptions = (options: readonly string[]): string => {
  if (!options?.length) return '-'
  return options.join(', ')
}
