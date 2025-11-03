import axios from 'axios'

const CACHE_TTL = 60 * 1000 // 60 seconds

function cacheKey(prefix: string, lat: number, lon: number){
  return `${prefix}:${lat.toFixed(4)},${lon.toFixed(4)}`
}

async function fetchWithCache(key: string, url: string, params: any){
  try{
    const raw = localStorage.getItem(key)
    if (raw){
      const parsed = JSON.parse(raw)
      if (Date.now() - parsed.ts < CACHE_TTL){
        return parsed.data
      }
    }
  }catch(e){/* ignore */}

  const res = await axios.get(url, { params })
  try{ localStorage.setItem(key, JSON.stringify({ ts: Date.now(), data: res.data })) }catch(e){/* ignore */}
  return res.data
}

export async function getWeatherForLatLon(lat: number, lon: number){
  const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY
  const key = cacheKey('onecall', lat, lon)
  const url = 'https://api.openweathermap.org/data/2.5/onecall'
  const params = { lat, lon, exclude: 'minutely', units: 'metric', appid: apiKey }
  return fetchWithCache(key, url, params)
}

export async function getCurrentWeather(lat: number, lon: number){
  const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY
  const key = cacheKey('current', lat, lon)
  const url = 'https://api.openweathermap.org/data/2.5/weather'
  const params = { lat, lon, units: 'metric', appid: apiKey }
  return fetchWithCache(key, url, params)
}
