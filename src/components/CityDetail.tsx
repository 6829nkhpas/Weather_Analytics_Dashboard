import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getWeatherForLatLon } from '../api/weatherApi'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

export default function CityDetail(){
  const loc = useLocation()
  const params = new URLSearchParams(loc.search)
  const lat = Number(params.get('lat'))
  const lon = Number(params.get('lon'))
  const name = params.get('name') || 'City'
  const [data, setData] = useState<any>(null)
  const [hourly, setHourly] = useState<any[]>([])

  useEffect(()=>{
    if (!lat || !lon) return
    getWeatherForLatLon(lat, lon).then(res=>{
      setData(res)
      setHourly(res.hourly?.slice(0,24).map((h:any, i:number)=>({
        time: new Date(h.dt*1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
        temp: h.temp
      })))
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

          <h3>Next 24 hours</h3>
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
        </div>
      )}
    </div>
  )
}
