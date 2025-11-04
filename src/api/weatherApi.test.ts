import { describe, it, expect, beforeEach, vi } from 'vitest'
import axios from 'axios'
import { getWeatherForLatLon } from './weatherApi'

describe('weatherApi caching', () => {
  beforeEach(() => {
    // ensure localStorage is available in the test environment
    if (typeof (globalThis as any).localStorage === 'undefined') {
      const store: Record<string,string> = {}
      ;(globalThis as any).localStorage = {
        getItem: (k:string) => store[k] ?? null,
        setItem: (k:string, v:string) => { store[k] = v },
        removeItem: (k:string) => { delete store[k] },
        clear: () => { for (const k of Object.keys(store)) delete store[k] }
      }
    }
    localStorage.clear()
    vi.restoreAllMocks()
  })

  it('caches responses for the same lat/lon and units', async () => {
    const fake = { data: { current: { temp: 10 } } }
    const spy = vi.spyOn(axios, 'get').mockResolvedValueOnce(fake)

    const lat = 1.2345
    const lon = 2.3456

    const a = await getWeatherForLatLon(lat, lon, 'metric')
    expect(a.current.temp).toBe(10)
    expect(spy).toHaveBeenCalledTimes(1)

    // second call should use cache and not call axios.get again
    const b = await getWeatherForLatLon(lat, lon, 'metric')
    expect(b.current.temp).toBe(10)
    expect(spy).toHaveBeenCalledTimes(1)
  })
})
