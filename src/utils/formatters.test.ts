import { describe, it, expect } from 'vitest'
import { formatTemp, formatWind } from './formatters'

describe('formatters', () => {
  describe('formatTemp', () => {
    it('formats metric temperature', () => {
      expect(formatTemp(25.3, 'metric')).toBe('25°C')
      expect(formatTemp(0, 'metric')).toBe('0°C')
      expect(formatTemp(-5.7, 'metric')).toBe('-6°C')
    })

    it('formats imperial temperature', () => {
      expect(formatTemp(77.5, 'imperial')).toBe('78°F')
      expect(formatTemp(32, 'imperial')).toBe('32°F')
    })

    it('handles undefined', () => {
      expect(formatTemp(undefined, 'metric')).toBe('--')
      expect(formatTemp(undefined, 'imperial')).toBe('--')
    })
  })

  describe('formatWind', () => {
    it('formats metric wind speed', () => {
      expect(formatWind(5.5, 'metric')).toBe('5.5 m/s')
      expect(formatWind(0, 'metric')).toBe('0.0 m/s')
    })

    it('formats imperial wind speed', () => {
      expect(formatWind(12.3, 'imperial')).toBe('12.3 mph')
    })

    it('handles undefined', () => {
      expect(formatWind(undefined, 'metric')).toBe('--')
      expect(formatWind(undefined, 'imperial')).toBe('--')
    })
  })
})
