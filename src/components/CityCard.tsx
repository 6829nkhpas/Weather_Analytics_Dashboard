import React from 'react'
import { Link } from 'react-router-dom'
import { City } from '../types'
import { useAppSelector } from '../store/store'

export default function CityCard({ city }: { city: City }) {
  const key = `${city.lat},${city.lon}`
  const weatherState = useAppSelector(s => (s as any).weather.items[key])
  const current = weatherState?.current ?? city.current
  const temp = current?.temp ?? '--'
  const icon = current?.weather?.[0]?.icon
  return (
    <div className="card">
      <h3>{city.name}, {city.country}</h3>
      <div style={{display:'flex', alignItems:'center', gap:12}}>
        {icon && <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" />}
        <div style={{fontSize:20}}>{temp}°</div>
      </div>
      <div>Humidity: {city.current?.humidity ?? '—'}%</div>
      <div>Wind: {city.current?.wind_speed ?? '—'} m/s</div>
      <div style={{marginTop:8}}><Link to={`/city?lat=${city.lat}&lon=${city.lon}&name=${encodeURIComponent(city.name)}`}>Details</Link></div>
    </div>
  )
}
