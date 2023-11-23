export function calculateTimeBasedOnSeconds(secs: number) {
  const minutes = Math.floor(secs / 60)
  const minutesStringfied = minutes.toString().padStart(2, '0')

  const seconds = Math.floor(secs % 60)
  const secondsStringfied = seconds.toString().padStart(2, '0')

  const formatMinutesAndSeconds = `${minutesStringfied}:${secondsStringfied}`

  return formatMinutesAndSeconds
}
