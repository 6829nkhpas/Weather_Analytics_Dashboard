import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getWeatherForLatLon } from '../api/weatherApi'

export const fetchWeather = createAsyncThunk('weather/fetch', async ({lat, lon}:{lat:number, lon:number})=>{
  const data = await getWeatherForLatLon(lat, lon)
  return { lat, lon, data }
})

const slice = createSlice({
  name: 'weather',
  initialState: { items: {} as Record<string, any>, status: 'idle' as string },
  reducers: {},
  extraReducers: (builder)=>{
    builder.addCase(fetchWeather.pending, (s)=>{ s.status='loading' })
    builder.addCase(fetchWeather.fulfilled, (s, a)=>{
      const key = `${a.payload.lat},${a.payload.lon}`
      s.items[key] = a.payload.data
      s.status='idle'
    })
  }
})

export default slice.reducer
