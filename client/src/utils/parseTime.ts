export const parseTime = (time: number) => {
  const distanceTime = Math.floor((new Date().getTime() - time) / 60000)

  if (Math.floor(distanceTime / 1440) >= 1) return `${Math.floor(distanceTime / 1440)} Years`

  if (Math.floor(distanceTime / 10080) >= 1) return `${Math.floor(distanceTime / 10080)} Weeks`

  if (Math.floor(distanceTime / 60) >= 1) return `${Math.floor(distanceTime / 60)} Hours`

  return `${distanceTime} Minutes`
}
