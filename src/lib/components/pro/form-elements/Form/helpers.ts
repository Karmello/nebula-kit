export const waitForTime = async (start: number, minLoadingTime?: number) => {
  if (!minLoadingTime) return

  const remaining = minLoadingTime - (Date.now() - start)

  if (remaining > 0) {
    await new Promise(resolve => setTimeout(resolve, remaining))
  }
}
