export const waitForTime = async (minLoadingTime: number, start: number) => {
  const remaining = minLoadingTime - (Date.now() - start)

  if (minLoadingTime && remaining > 0) {
    await new Promise(resolve => setTimeout(resolve, remaining))
  }
}
