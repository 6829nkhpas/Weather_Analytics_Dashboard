import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getWeatherForLatLon } from '../api/weatherApi'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts'

export default function CityDetail(){
  const loc = useLocation()
  const params = new URLSearchParams(loc.search)
  const lat = Number(params.get('lat'))
  const lon = Number(params.get('lon'))
  const name = params.get('name') || 'City'
  const [data, setData] = useState<any>(null)
  const [hourly, setHourly] = useState<any[]>([])
  const [daily, setDaily] = useState<any[]>([])
  const [mode, setMode] = useState<'hourly'|'daily'>('hourly')
  const [error, setError] = useState<string | null>(null)

  useEffect(()=>{
    if (!lat || !lon) return
    setError(null)
    getWeatherForLatLon(lat, lon).then(res=>{
      setData(res)
      setHourly(res.hourly?.slice(0,24).map((h:any, i:number)=>({
        time: new Date(h.dt*1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
        temp: h.temp,
        pop: h.pop,
        wind: h.wind_speed
      })))
      setDaily(res.daily?.slice(0,7).map((d:any)=>({
        date: new Date(d.dt*1000).toLocaleDateString([], {month:'short', day:'numeric'}),
        temp_min: d.temp?.min,
        temp_max: d.temp?.max,
        pop: d.pop
      })) || [])
    }).catch(err=>{
      console.error(err)
      setError('Failed to load weather data')
    })
  }, [lat, lon])

  return (
    <div>
      <h2>Details: {name}</h2>
      {!data && <div className="card">Loading...</div>}
      {data && (
        <div>
          <div className="card">
            <div>Current: {data.current.temp}°</div>
            <div>Pressure: {data.current.pressure} hPa</div>
            <div>Dew point: {data.current.dew_point}</div>
            <div>UV index: {data.current.uvi}</div>
          </div>

          <div style={{display:'flex', alignItems:'center', gap:12}}>
            <h3 style={{margin:0}}>Forecast</h3>
            <div>
              <button onClick={()=>setMode('hourly')} style={{marginRight:8, fontWeight: mode==='hourly' ? '600' : '400'}}>Hourly</button>
              <button onClick={()=>setMode('daily')} style={{fontWeight: mode==='daily' ? '600' : '400'}}>7-day</button>
            </div>
          </div>

          {mode === 'hourly' && (
            <div>
              <div className="card" style={{height:240}}>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={hourly}>
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="temp" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <h4 style={{marginTop:12}}>Wind (next 24h)</h4>
              <div className="card" style={{height:180}}>
                <ResponsiveContainer width="100%" height={140}>
                  <LineChart data={hourly}>
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Line name="Wind speed (m/s)" type="monotone" dataKey="wind" stroke="#888888" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <h4 style={{marginTop:12}}>Precipitation probability (next 24h)</h4>
              <div className="card" style={{height:140}}>
                <ResponsiveContainer width="100%" height={100}>
                  <LineChart data={hourly}>
                    <XAxis dataKey="time" />
                    <YAxis domain={[0,1]} tickFormatter={(v)=>Math.round(v*100)+'%'} />
                    <Tooltip formatter={(v:any)=> (typeof v === 'number' ? Math.round(v*100)+'%' : v)} />
                    <Line name="Precip" type="monotone" dataKey="pop" stroke="#1f77b4" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {mode === 'daily' && (
            <div className="card" style={{height:320}}>
              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={daily} margin={{ right: 20 }}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line name="Max" type="monotone" dataKey="temp_max" stroke="#ff7300" />
                  <Line name="Min" type="monotone" dataKey="temp_min" stroke="#387908" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
