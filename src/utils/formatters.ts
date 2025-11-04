export function formatTemp(value: number | undefined, unit: 'metric' | 'imperial'): string {
  if (value === undefined) return '--'
  const symbol = unit === 'metric' ? '°C' : '°F'
  return `${Math.round(value)}${symbol}`
}

export function formatWind(value: number | undefined, unit: 'metric' | 'imperial'): string {
  if (value === undefined) return '--'
  const speedUnit = unit === 'metric' ? 'm/s' : 'mph'
  return `${value.toFixed(1)} ${speedUnit}`
}
